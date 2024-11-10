import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Space,
  Card,
  Typography,
  Tag,
  Row,
  Col,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function JobsPage() {
  const navigate = useNavigate()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [form] = Form.useForm()
  const [filterStatus, setFilterStatus] = useState<string>('')
  const [filterCustomer, setFilterCustomer] = useState<string>('')
  const [filterDate, setFilterDate] = useState<any>(null)

  const { data: jobs, refetch } = Api.job.findMany.useQuery({
    include: {
      customer: true,
      jobTeams: {
        include: {
          team: true,
        },
      },
    },
  })

  const { data: teams } = Api.team.findMany.useQuery({})
  const { data: customers } = Api.customer.findMany.useQuery({})
  const { mutateAsync: createJob } = Api.job.create.useMutation()
  const { mutateAsync: createJobTeam } = Api.jobTeam.create.useMutation()
  const { mutateAsync: generatePdf } =
    Api.documentProcessor.htmlToPdf.useMutation()

  const handleCreateJob = async (values: any) => {
    try {
      const job = await createJob({
        data: {
          title: values.title,
          description: values.description,
          status: 'PENDING',
          priority: values.priority,
          startDate: values.startDate.format('YYYY-MM-DD'),
          endDate: values.endDate.format('YYYY-MM-DD'),
          customerId: values.customerId,
        },
      })

      // Create job team assignments
      if (values.teamIds) {
        for (const teamId of values.teamIds) {
          await createJobTeam({
            data: {
              jobId: job.id,
              teamId,
            },
          })
        }
      }

      setIsCreateModalOpen(false)
      form.resetFields()
      refetch()
    } catch (error) {
      console.error('Error creating job:', error)
    }
  }

  const exportToPdf = async () => {
    const htmlContent = `
      <html>
        <body>
          <h1>Jobs Report</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Customer</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              ${jobs
                ?.map(
                  job => `
                <tr>
                  <td>${job.title}</td>
                  <td>${job.status}</td>
                  <td>${job.customer?.name}</td>
                  <td>${job.startDate}</td>
                  <td>${job.endDate}</td>
                </tr>
              `,
                )
                .join('')}
            </tbody>
          </table>
        </body>
      </html>
    `
    const { url } = await generatePdf({ html: htmlContent })
    window.open(url, '_blank')
  }

  const filteredJobs = jobs?.filter(job => {
    let matches = true
    if (filterStatus && job.status !== filterStatus) matches = false
    if (filterCustomer && job.customerId !== filterCustomer) matches = false
    if (filterDate && job.startDate !== filterDate.format('YYYY-MM-DD'))
      matches = false
    return matches
  })

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag
          color={
            status === 'COMPLETED'
              ? 'green'
              : status === 'IN_PROGRESS'
              ? 'blue'
              : 'orange'
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      render: (customer: any) => customer?.name,
    },
    {
      title: 'Teams',
      dataIndex: 'jobTeams',
      key: 'teams',
      render: (jobTeams: any[]) => (
        <Space>
          {jobTeams?.map(jt => (
            <Tag key={jt.team?.id}>{jt.team?.name}</Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Button type="link" onClick={() => navigate(`/jobs/${record.id}`)}>
          <i className="las la-eye"></i> View Details
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Card>
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Title level={2}>
              <i className="las la-tasks"></i> Jobs Management
            </Title>
            <Text>
              Manage and track all jobs, their status, and assignments
            </Text>
          </Col>
          <Col>
            <Space>
              <Button type="primary" onClick={() => setIsCreateModalOpen(true)}>
                <i className="las la-plus"></i> Create Job
              </Button>
              <Button onClick={exportToPdf}>
                <i className="las la-file-pdf"></i> Export to PDF
              </Button>
            </Space>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={8}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by Status"
              allowClear
              onChange={setFilterStatus}
            >
              <Select.Option value="PENDING">Pending</Select.Option>
              <Select.Option value="IN_PROGRESS">In Progress</Select.Option>
              <Select.Option value="COMPLETED">Completed</Select.Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by Customer"
              allowClear
              onChange={setFilterCustomer}
            >
              {customers?.map(customer => (
                <Select.Option key={customer.id} value={customer.id}>
                  {customer.name}
                </Select.Option>
              ))}
            </Select>
          </Col>
          <Col span={8}>
            <DatePicker
              style={{ width: '100%' }}
              onChange={setFilterDate}
              placeholder="Filter by Start Date"
            />
          </Col>
        </Row>

        <Table
          dataSource={filteredJobs}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title="Create New Job"
          open={isCreateModalOpen}
          onCancel={() => setIsCreateModalOpen(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateJob} layout="vertical">
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="priority"
              label="Priority"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="LOW">Low</Select.Option>
                <Select.Option value="MEDIUM">Medium</Select.Option>
                <Select.Option value="HIGH">High</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="customerId"
              label="Customer"
              rules={[{ required: true }]}
            >
              <Select>
                {customers?.map(customer => (
                  <Select.Option key={customer.id} value={customer.id}>
                    {customer.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="teamIds" label="Assign Teams">
              <Select mode="multiple">
                {teams?.map(team => (
                  <Select.Option key={team.id} value={team.id}>
                    {team.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[{ required: true }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Job
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </PageLayout>
  )
}

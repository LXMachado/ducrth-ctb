import {
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Table,
  Tag,
  Button,
  Space,
  Select,
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

export default function HomeDashboardPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [jobFilter, setJobFilter] = useState<string>('all')

  // Fetch jobs with related data
  const { data: jobs } = Api.job.findMany.useQuery({
    include: {
      customer: true,
      jobTeams: {
        include: {
          team: true,
        },
      },
    },
  })

  // Fetch material orders with related data
  const { data: materialOrders } = Api.materialOrder.findMany.useQuery({
    include: {
      material: true,
      job: true,
    },
  })

  // Filter jobs based on status/priority
  const filteredJobs = jobs?.filter(job => {
    if (jobFilter === 'all') return true
    return job.status === jobFilter || job.priority === jobFilter
  })

  // Calculate statistics
  const totalJobs = jobs?.length || 0
  const pendingJobs = jobs?.filter(job => job.status === 'PENDING').length || 0
  const delayedMaterials =
    materialOrders?.filter(order => order.status === 'DELAYED').length || 0

  const jobColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: any) => (
        <a onClick={() => navigate(`/jobs/${record.id}`)}>{text}</a>
      ),
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      render: (customer: any) => customer?.name,
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
              : status === 'PENDING'
              ? 'orange'
              : 'blue'
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => (
        <Tag
          color={
            priority === 'HIGH'
              ? 'red'
              : priority === 'MEDIUM'
              ? 'orange'
              : 'blue'
          }
        >
          {priority}
        </Tag>
      ),
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('MMM D, YYYY'),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-home" style={{ marginRight: '8px' }}></i>
          Dashboard
        </Title>
        <Text type="secondary">
          Welcome back, {user?.name}! Here's your overview.
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Total Jobs"
                value={totalJobs}
                prefix={<i className="las la-briefcase"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Pending Jobs"
                value={pendingJobs}
                prefix={<i className="las la-clock"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Delayed Materials"
                value={delayedMaterials}
                prefix={<i className="las la-exclamation-triangle"></i>}
                valueStyle={{
                  color: delayedMaterials > 0 ? '#cf1322' : undefined,
                }}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col span={24}>
            <Card
              title={
                <Space>
                  <i className="las la-tasks"></i>
                  Assigned Jobs
                </Space>
              }
              extra={
                <Space>
                  <Select
                    defaultValue="all"
                    style={{ width: 120 }}
                    onChange={setJobFilter}
                    options={[
                      { value: 'all', label: 'All' },
                      { value: 'HIGH', label: 'High Priority' },
                      { value: 'PENDING', label: 'Pending' },
                      { value: 'IN_PROGRESS', label: 'In Progress' },
                    ]}
                  />
                  <Button type="primary" onClick={() => navigate('/jobs')}>
                    <i className="las la-plus"></i> New Job
                  </Button>
                </Space>
              }
            >
              <Table
                dataSource={filteredJobs}
                columns={jobColumns}
                rowKey="id"
                pagination={{ pageSize: 5 }}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col span={24}>
            <Card
              title={
                <Space>
                  <i className="las la-exclamation-circle"></i>
                  Delayed Materials
                </Space>
              }
            >
              <Table
                dataSource={materialOrders?.filter(
                  order => order.status === 'DELAYED',
                )}
                columns={[
                  {
                    title: 'Material',
                    dataIndex: 'material',
                    key: 'material',
                    render: (material: any) => material?.name,
                  },
                  {
                    title: 'Quantity',
                    dataIndex: 'quantity',
                    key: 'quantity',
                  },
                  {
                    title: 'Expected Delivery',
                    dataIndex: 'deliveryDate',
                    key: 'deliveryDate',
                    render: (date: string) => dayjs(date).format('MMM D, YYYY'),
                  },
                  {
                    title: 'Job',
                    dataIndex: 'job',
                    key: 'job',
                    render: (job: any) => job?.title,
                  },
                ]}
                rowKey="id"
                pagination={{ pageSize: 5 }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}

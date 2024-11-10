import {
  Typography,
  Card,
  Button,
  Space,
  Table,
  Upload,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Image,
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

export default function JobDetailsPage() {
  const { jobId } = useParams()
  const [isJobSheetModalOpen, setIsJobSheetModalOpen] = useState(false)
  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false)
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const [selectedJobSheet, setSelectedJobSheet] = useState(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const { mutateAsync: upload } = useUploadPublic()
  const [jobSheetForm] = Form.useForm()

  const { data: job, refetch } = Api.job.findFirst.useQuery({
    where: { id: jobId },
    include: {
      customer: true,
      jobTeams: { include: { team: true } },
      jobSheets: true,
      materialOrders: { include: { material: true } },
    },
  })

  const { data: teams } = Api.team.findMany.useQuery({})
  const { data: materials } = Api.material.findMany.useQuery({})

  const { mutateAsync: createJobSheet } = Api.jobSheet.create.useMutation()
  const { mutateAsync: createMaterialOrder } =
    Api.materialOrder.create.useMutation()
  const { mutateAsync: createJobTeam } = Api.jobTeam.create.useMutation()
  const { mutateAsync: updateJob } = Api.job.update.useMutation()

  const handleFileUpload = async (file: File) => {
    const { url } = await upload({ file })
    return url
  }

  const handleJobSheetSubmit = async (values: any) => {
    await createJobSheet({
      data: {
        ...values,
        jobId,
      },
    })
    setIsJobSheetModalOpen(false)
    jobSheetForm.resetFields()
    refetch()
  }

  const handleMaterialOrderSubmit = async (values: any) => {
    await createMaterialOrder({
      data: {
        ...values,
        jobId,
      },
    })
    setIsMaterialModalOpen(false)
    refetch()
  }

  const handleTeamAssignment = async (values: any) => {
    await createJobTeam({
      data: {
        teamId: values.teamId,
        jobId,
      },
    })
    setIsTeamModalOpen(false)
    refetch()
  }

  const handleStatusUpdate = async (status: string) => {
    await updateJob({
      where: { id: jobId },
      data: { status },
    })
    refetch()
  }

  const jobSheetColumns = [
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Details', dataIndex: 'details', key: 'details' },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('DD/MM/YYYY'),
    },
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (url: string) =>
        url && (
          <img
            src={url}
            alt="Job Sheet"
            style={{ width: 50, cursor: 'pointer' }}
            onClick={() => {
              setSelectedJobSheet({ imageUrl: url })
              setIsViewModalOpen(true)
            }}
          />
        ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            setSelectedJobSheet(record)
            setIsViewModalOpen(true)
          }}
        >
          <i className="las la-eye"></i> View Details
        </Button>
      ),
    },
  ]

  const materialOrderColumns = [
    { title: 'Material', dataIndex: ['material', 'name'], key: 'material' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Delivery Date', dataIndex: 'deliveryDate', key: 'deliveryDate' },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card>
            <Space direction="vertical">
              <Title level={2}>{job?.title}</Title>
              <Text>Customer: {job?.customer?.name}</Text>
              <Text>Status: {job?.status}</Text>
              <Text>Priority: {job?.priority}</Text>
              <Text>
                Duration: {job?.startDate} - {job?.endDate}
              </Text>
              <Space>
                <Button
                  type="primary"
                  onClick={() => handleStatusUpdate('In Progress')}
                >
                  <i className="las la-play"></i> Start Job
                </Button>
                <Button onClick={() => handleStatusUpdate('Completed')}>
                  <i className="las la-check"></i> Complete Job
                </Button>
              </Space>
            </Space>
          </Card>

          <Card
            title={
              <>
                <i className="las la-file-alt"></i> Job Sheets
              </>
            }
          >
            <Button
              type="primary"
              onClick={() => setIsJobSheetModalOpen(true)}
              style={{ marginBottom: 16 }}
            >
              <i className="las la-plus"></i> Add Job Sheet
            </Button>
            <Table dataSource={job?.jobSheets} columns={jobSheetColumns} />
          </Card>

          <Card
            title={
              <>
                <i className="las la-boxes"></i> Materials
              </>
            }
          >
            <Button
              type="primary"
              onClick={() => setIsMaterialModalOpen(true)}
              style={{ marginBottom: 16 }}
            >
              <i className="las la-plus"></i> Order Material
            </Button>
            <Table
              dataSource={job?.materialOrders}
              columns={materialOrderColumns}
            />
          </Card>

          <Card
            title={
              <>
                <i className="las la-users"></i> Assigned Teams
              </>
            }
          >
            <Button
              type="primary"
              onClick={() => setIsTeamModalOpen(true)}
              style={{ marginBottom: 16 }}
            >
              <i className="las la-plus"></i> Assign Team
            </Button>
            <Space wrap>
              {job?.jobTeams?.map(jobTeam => (
                <Card key={jobTeam.id} size="small">
                  {jobTeam.team?.name}
                </Card>
              ))}
            </Space>
          </Card>
        </Space>

        <Modal
          title="Add Job Sheet"
          open={isJobSheetModalOpen}
          onCancel={() => setIsJobSheetModalOpen(false)}
          footer={null}
        >
          <Form form={jobSheetForm} onFinish={handleJobSheetSubmit}>
            <Form.Item name="type" label="Type">
              <Input />
            </Form.Item>
            <Form.Item name="details" label="Details">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="imageUrl" label="Image">
              <Upload
                customRequest={async ({ file }: any) => {
                  const url = await handleFileUpload(file)
                  jobSheetForm.setFieldsValue({ imageUrl: url })
                }}
              >
                <Button>
                  <i className="las la-upload"></i> Upload
                </Button>
              </Upload>
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Modal>

        <Modal
          title="Order Material"
          open={isMaterialModalOpen}
          onCancel={() => setIsMaterialModalOpen(false)}
          footer={null}
        >
          <Form onFinish={handleMaterialOrderSubmit}>
            <Form.Item name="materialId" label="Material">
              <Select>
                {materials?.map(material => (
                  <Select.Option key={material.id} value={material.id}>
                    {material.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="quantity" label="Quantity">
              <Input type="number" />
            </Form.Item>
            <Form.Item name="deliveryDate" label="Delivery Date">
              <DatePicker />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Modal>

        <Modal
          title="Assign Team"
          open={isTeamModalOpen}
          onCancel={() => setIsTeamModalOpen(false)}
          footer={null}
        >
          <Form onFinish={handleTeamAssignment}>
            <Form.Item name="teamId" label="Team">
              <Select>
                {teams?.map(team => (
                  <Select.Option key={team.id} value={team.id}>
                    {team.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Modal>

        <Modal
          title="Job Sheet Details"
          open={isViewModalOpen}
          onCancel={() => {
            setIsViewModalOpen(false)
            setSelectedJobSheet(null)
          }}
          footer={null}
        >
          {selectedJobSheet && (
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Text strong>Type:</Text> {selectedJobSheet.type}
              </div>
              <div>
                <Text strong>Details:</Text> {selectedJobSheet.details}
              </div>
              <div>
                <Text strong>Created:</Text>{' '}
                {dayjs(selectedJobSheet.createdAt).format('DD/MM/YYYY')}
              </div>
              {selectedJobSheet.imageUrl && (
                <Image
                  src={selectedJobSheet.imageUrl}
                  alt="Job Sheet"
                  style={{ maxWidth: '100%' }}
                />
              )}
            </Space>
          )}
        </Modal>
      </div>
    </PageLayout>
  )
}

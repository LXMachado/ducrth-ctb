import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Space,
  message,
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

export default function JobSheetsPage() {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const { mutateAsync: upload } = useUploadPublic()

  // Fetch job sheets with related data
  const { data: jobSheets, refetch } = Api.jobSheet.findMany.useQuery({
    include: {
      job: {
        include: {
          customer: true,
        },
      },
    },
  })

  // Fetch jobs for dropdown
  const { data: jobs } = Api.job.findMany.useQuery()

  // Create mutation
  const { mutateAsync: createJobSheet } = Api.jobSheet.create.useMutation()

  // Update mutation
  const { mutateAsync: updateJobSheet } = Api.jobSheet.update.useMutation()

  const handleCreate = async (values: any) => {
    try {
      await createJobSheet({
        data: {
          type: values.type,
          measurements: values.measurements,
          details: values.details,
          jobId: values.jobId,
          imageUrl: values.imageUrl,
        },
      })
      message.success('Job sheet created successfully')
      setIsModalOpen(false)
      form.resetFields()
      refetch()
    } catch (error) {
      message.error('Failed to create job sheet')
    }
  }

  const handleArchive = async (id: string) => {
    try {
      await updateJobSheet({
        where: { id },
        data: { type: 'ARCHIVED' },
      })
      message.success('Job sheet archived')
      refetch()
    } catch (error) {
      message.error('Failed to archive job sheet')
    }
  }

  const handleImageUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      form.setFieldsValue({ imageUrl: url })
      return url
    } catch (error) {
      message.error('Failed to upload image')
      return ''
    }
  }

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Text>
          <i
            className={`las la-file-alt mr-2 ${
              type === 'ARCHIVED' ? 'text-gray-400' : ''
            }`}
          ></i>
          {type || 'N/A'}
        </Text>
      ),
    },
    {
      title: 'Job',
      dataIndex: 'job',
      key: 'job',
      render: (job: any) => (
        <Text>
          <i className="las la-briefcase mr-2"></i>
          {job?.title || 'N/A'}
        </Text>
      ),
    },
    {
      title: 'Customer',
      dataIndex: 'job',
      key: 'customer',
      render: (job: any) => (
        <Text>
          <i className="las la-user mr-2"></i>
          {job?.customer?.name || 'N/A'}
        </Text>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('DD/MM/YYYY'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="link"
            onClick={() => navigate(`/jobs/${record.jobId}`)}
            icon={<i className="las la-eye"></i>}
          >
            View Job
          </Button>
          <Button
            type="link"
            onClick={() => handleArchive(record.id)}
            icon={<i className="las la-archive"></i>}
            disabled={record.type === 'ARCHIVED'}
          >
            Archive
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <Title level={2}>
            <i className="las la-file-alt mr-2"></i>
            Job Sheets Management
          </Title>
          <Button
            type="primary"
            onClick={() => setIsModalOpen(true)}
            icon={<i className="las la-plus"></i>}
          >
            Create Job Sheet
          </Button>
        </div>

        <Table
          dataSource={jobSheets}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title="Create Job Sheet"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleCreate}>
            <Form.Item name="type" label="Type" rules={[{ required: true }]}>
              <Select>
                <Select.Option value="MEASUREMENT">Measurement</Select.Option>
                <Select.Option value="INSTALLATION">Installation</Select.Option>
                <Select.Option value="MAINTENANCE">Maintenance</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="jobId" label="Job" rules={[{ required: true }]}>
              <Select>
                {jobs?.map(job => (
                  <Select.Option key={job.id} value={job.id}>
                    {job.title}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="measurements" label="Measurements">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="details" label="Details">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="imageUrl" label="Image">
              <Upload
                customRequest={async ({ file }: any) => {
                  await handleImageUpload(file)
                }}
                listType="picture-card"
                maxCount={1}
              >
                <div>
                  <i className="las la-upload"></i>
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Job Sheet
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}

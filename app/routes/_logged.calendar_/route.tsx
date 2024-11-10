import {
  Calendar,
  Select,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Typography,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CalendarPage() {
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month')
  const [selectedTeam, setSelectedTeam] = useState<string>('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const { user } = useUserContext()

  const { data: jobs, refetch } = Api.job.findMany.useQuery({
    include: {
      jobTeams: {
        include: {
          team: true,
        },
      },
    },
  })

  const { data: teams } = Api.team.findMany.useQuery({})

  const { mutateAsync: createJob } = Api.job.create.useMutation()
  const { mutateAsync: updateJob } = Api.job.update.useMutation()

  const handleCreateJob = async (values: any) => {
    try {
      await createJob({
        data: {
          title: values.title,
          description: values.description,
          startDate: values.date.format('YYYY-MM-DD'),
          endDate: values.date.format('YYYY-MM-DD'),
          status: 'SCHEDULED',
        },
      })
      message.success('Job scheduled successfully')
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      message.error('Failed to schedule job')
    }
  }

  const handleDateSelect = (date: Dayjs): void => {
    setIsModalVisible(true)
    form.setFieldsValue({ date })
  }

  const dateCellRender = (date: Dayjs): JSX.Element => {
    const dayJobs = jobs?.filter(job => {
      const jobDate = dayjs(job.startDate)
      return (
        jobDate.isSame(date, 'day') &&
        (!selectedTeam ||
          job.jobTeams?.some(jt => jt.team?.id === selectedTeam))
      )
    })

    return (
      <div className="events">
        {dayJobs?.map(job => (
          <div
            key={job.id}
            style={{
              backgroundColor: '#1890ff',
              color: 'white',
              borderRadius: '4px',
              padding: '2px 4px',
              marginBottom: '2px',
              cursor: 'pointer',
            }}
            onClick={e => {
              e.stopPropagation()
              Modal.confirm({
                title: 'Job Actions',
                content: (
                  <div>
                    <p>
                      <strong>{job.title}</strong>
                    </p>
                    <p>{job.description}</p>
                  </div>
                ),
                okText: 'Cancel Job',
                cancelText: 'Close',
                onOk: async () => {
                  try {
                    await updateJob({
                      where: { id: job.id },
                      data: { status: 'CANCELLED' },
                    })
                    message.success('Job cancelled successfully')
                    refetch()
                  } catch (error) {
                    message.error('Failed to cancel job')
                  }
                },
              })
            }}
          >
            <i className="las la-calendar-check"></i> {job.title}
          </div>
        ))}
      </div>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <div
          style={{
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title level={2}>
            <i className="las la-calendar"></i> Job Calendar
          </Title>
          <div>
            <Select
              style={{ width: 200, marginRight: '16px' }}
              placeholder="Filter by team"
              allowClear
              onChange={setSelectedTeam}
            >
              {teams?.map(team => (
                <Select.Option key={team.id} value={team.id}>
                  {team.name}
                </Select.Option>
              ))}
            </Select>
            <Select
              style={{ width: 120 }}
              value={viewMode}
              onChange={setViewMode}
            >
              <Select.Option value="month">Month</Select.Option>
              <Select.Option value="year">Year</Select.Option>
            </Select>
          </div>
        </div>

        <Calendar
          mode={viewMode}
          dateCellRender={dateCellRender}
          onSelect={handleDateSelect}
        />

        <Modal
          title="Schedule New Job"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateJob} layout="vertical">
            <Form.Item
              name="title"
              label="Job Title"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Schedule Job
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}

import {
  Typography,
  Button,
  Table,
  Modal,
  Form,
  Input,
  Select,
  Card,
  Row,
  Col,
  Tag,
  Spin,
  Space,
  message,
} from 'antd'
import { useState } from 'react'
import type { Prisma } from '@prisma/client'
const { Title, Text } = Typography
type TeamWithMembers = Prisma.TeamGetPayload<{
  include: {
    teamMembers: {
      include: {
        user: true
      }
    }
  }
}>
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TeamsPage() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<TeamWithMembers | null>(null)
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false)
  const [form] = Form.useForm()
  const [memberForm] = Form.useForm()
  const [editMemberForm] = Form.useForm()

  const {
    data: teams,
    isLoading: isLoadingTeams,
    refetch: refetchTeams,
  } = Api.team.findMany.useQuery({
    include: {
      teamMembers: {
        include: {
          user: true,
        },
      },
    },
  })

  const { data: users } = Api.user.findMany.useQuery({})
  const { mutateAsync: createTeam } = Api.team.create.useMutation()
  const { mutateAsync: createTeamMembers } = Api.teamMember.createMany.useMutation()
  const { mutateAsync: updateTeamMember } = Api.teamMember.update.useMutation()
  const { mutateAsync: deleteTeamMember } = Api.teamMember.delete.useMutation()

  const handleCreateTeam = async (values: any) => {
    await createTeam({
      data: {
        name: values.name,
        description: values.description,
      },
    })
    setIsTeamModalOpen(false)
    form.resetFields()
    refetchTeams()
  }

  const handleAddMember = async (values: any) => {
    if (!selectedTeam) return

    try {
      const memberData = values.userIds.map((userId: string) => ({
        teamId: selectedTeam.id,
        userId,
        role: values.role,
        skills: values.skills,
      }))

      await createTeamMembers({
        data: memberData,
      })
      setIsMemberModalOpen(false)
      memberForm.resetFields()
      refetchTeams()
      message.success('Team members added successfully')
    } catch (error) {
      message.error('Failed to add team members')
    }
  }

  const handleEditMember = async (values: any) => {
    if (!selectedMember) return

    try {
      await updateTeamMember({
        where: { id: selectedMember.id },
        data: {
          role: values.role,
          skills: values.skills,
        },
      })
      setIsEditMemberModalOpen(false)
      editMemberForm.resetFields()
      refetchTeams()
      message.success('Team member updated successfully')
    } catch (error) {
      message.error('Failed to update team member')
    }
  }

  const handleDeleteMember = async (memberId: string) => {
    try {
      await deleteTeamMember({
        where: { id: memberId },
      })
      refetchTeams()
      message.success('Team member deleted successfully')
    } catch (error) {
      message.error('Failed to delete team member')
    }
  }

  const columns = [
    {
      title: 'Team Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Members',
      dataIndex: 'teamMembers',
      key: 'members',
      render: (members: any[]) => (
        <Space wrap>
          {members?.map(member => (
            <Tag color="blue" key={member.id}>
              {member.user?.name || 'Unnamed'} ({member.role})
              {member.skills && <div>Skills: {member.skills}</div>}
              <Space style={{ marginLeft: 8 }}>
                <Button
                  type="text"
                  size="small"
                  icon={<i className="las la-edit" />}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedMember(member)
                    editMemberForm.setFieldsValue({
                      role: member.role,
                      skills: member.skills,
                    })
                    setIsEditMemberModalOpen(true)
                  }}
                />
                <Button
                  type="text"
                  size="small"
                  danger
                  icon={<i className="las la-trash" />}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteMember(member.id)
                  }}
                />
              </Space>
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: TeamWithMembers) => (
        <Button
          type="primary"
          onClick={() => {
            setSelectedTeam(record)
            setIsMemberModalOpen(true)
          }}
        >
          <i className="las la-user-plus"></i> Add Member
        </Button>
      ),
    },
  ]

  if (isLoadingTeams) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Title level={2}>
              <i className="las la-users"></i> Team Management
            </Title>
            <Text>Manage your teams and their members efficiently</Text>
          </Col>
          <Col>
            <Button type="primary" onClick={() => setIsTeamModalOpen(true)}>
              <i className="las la-plus"></i> Create Team
            </Button>
          </Col>
        </Row>

        <Card>
          <Table
            dataSource={teams}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Card>

        <Modal
          title="Create New Team"
          open={isTeamModalOpen}
          onCancel={() => setIsTeamModalOpen(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateTeam} layout="vertical">
            <Form.Item
              name="name"
              label="Team Name"
              rules={[{ required: true, message: 'Please input team name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Team
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Add Team Member"
          open={isMemberModalOpen}
          onCancel={() => setIsMemberModalOpen(false)}
          footer={null}
        >
          <Form form={memberForm} onFinish={handleAddMember} layout="vertical">
            <Form.Item
              name="userIds"
              label="Select Users"
              rules={[{ required: true, message: 'Please select at least one user!', type: 'array' }]}
            >
              <Select
                mode="multiple"
                showSearch={true}
                maxTagCount={3}
                placeholder="Search and select users"
              >
                {users?.map(user => (
                  <Select.Option key={user.id} value={user.id}>
                    {user.name || user.email || 'Unnamed User'}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="role"
              label="Role"
              rules={[{ required: true, message: 'Please input role!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="skills" label="Skills">
              <Input.TextArea placeholder="Enter comma-separated skills" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Member
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Edit Team Member"
          open={isEditMemberModalOpen}
          onCancel={() => setIsEditMemberModalOpen(false)}
          footer={null}
        >
          <Form form={editMemberForm} onFinish={handleEditMember} layout="vertical">
            <Form.Item
              name="role"
              label="Role"
              rules={[{ required: true, message: 'Please input role!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="skills" label="Skills">
              <Input.TextArea placeholder="Enter comma-separated skills" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Member
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}

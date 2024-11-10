import {
  Button,
  Input,
  Table,
  Modal,
  Form,
  Typography,
  Space,
  Card,
  Tooltip,
  message,
  Flex,
} from 'antd'
import { useState } from 'react'
import type { Customer } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CustomersPage() {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null)
  const [form] = Form.useForm()

  const { data: customers, refetch } = Api.customer.findMany.useQuery({
    include: { jobs: true },
  })

  const { mutateAsync: createCustomer } = Api.customer.create.useMutation()
  const { mutateAsync: updateCustomer } = Api.customer.update.useMutation()
  const { mutateAsync: deleteCustomer } = Api.customer.delete.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      if (editingCustomer) {
        await updateCustomer({
          where: { id: editingCustomer.id },
          data: values,
        })
        message.success('Customer updated successfully')
      } else {
        await createCustomer({ data: values })
        message.success('Customer created successfully')
      }
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteCustomer({ where: { id } })
      message.success('Customer deleted successfully')
      refetch()
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Jobs',
      key: 'jobs',
      render: (record: Customer & { jobs: any[] }) => record.jobs?.length || 0,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: Customer) => (
        <Space>
          <Tooltip title="View Jobs">
            <Button
              icon={<i className="las la-tasks" />}
              onClick={() => navigate(`/jobs?customerId=${record.id}`)}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Button
              icon={<i className="las la-edit" />}
              onClick={() => {
                setEditingCustomer(record)
                form.setFieldsValue(record)
                setIsModalVisible(true)
              }}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<i className="las la-trash" />}
              onClick={() => handleDelete(record.id)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ]

  const filteredCustomers = customers?.filter(
    customer =>
      customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
      customer.email?.toLowerCase().includes(searchText.toLowerCase()) ||
      customer.phone?.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <PageLayout layout="full-width">
      <Card>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Flex justify="space-between" style={{ width: '100%' }}>
            <Title level={2}>
              <i className="las la-users" /> Customers
            </Title>
            <Button
              type="primary"
              icon={<i className="las la-plus" />}
              onClick={() => {
                setEditingCustomer(null)
                form.resetFields()
                setIsModalVisible(true)
              }}
            >
              Add Customer
            </Button>
          </Flex>

          <Input
            placeholder="Search customers..."
            prefix={<i className="las la-search" />}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />

          <Table
            columns={columns}
            dataSource={filteredCustomers}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Space>
      </Card>

      <Modal
        title={editingCustomer ? 'Edit Customer' : 'Add New Customer'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input customer name!' }]}
          >
            <Input prefix={<i className="las la-user" />} />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input prefix={<i className="las la-envelope" />} />
          </Form.Item>

          <Form.Item name="phone" label="Phone">
            <Input prefix={<i className="las la-phone" />} />
          </Form.Item>

          <Form.Item name="address" label="Address">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="notes" label="Notes">
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {editingCustomer ? 'Update' : 'Create'}
              </Button>
              <Button onClick={() => setIsModalVisible(false)}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}

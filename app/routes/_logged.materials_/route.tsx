import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  InputNumber,
  Switch,
  Select,
  Typography,
  Space,
  Card,
  Tag,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { inchesToMm, mmToInches } from '@/core/helpers/unit-conversion'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MaterialsPage() {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const { data: materials, refetch } = Api.material.findMany.useQuery({
    include: {
      supplier: true,
      materialOrders: {
        include: {
          job: true,
        },
      },
    },
  })

  const { data: suppliers } = Api.supplier.findMany.useQuery()

  const { mutateAsync: createMaterial } = Api.material.create.useMutation()
  const { mutateAsync: updateMaterial } = Api.material.update.useMutation()

  const handleCreateMaterial = async (values: any) => {
    const specifications = JSON.stringify({
      dimensions: values.dimensions,
      unit: values.unit
    })
    
    await createMaterial({
      data: {
        name: values.name,
        description: values.description,
        specifications,
        criticalFlag: values.criticalFlag || false,
        supplierId: values.supplierId,
      },
    })
    form.resetFields()
    setIsModalOpen(false)
    refetch()
  }

  const handleToggleCritical = async (record: any) => {
    await updateMaterial({
      where: { id: record.id },
      data: { criticalFlag: !record.criticalFlag },
    })
    refetch()
  }

  const columns = [
    {
      title: 'Name',
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
      title: 'Supplier',
      dataIndex: 'supplier',
      key: 'supplier',
      render: (supplier: any) => supplier?.name || '-',
    },
    {
      title: 'Dimensions',
      dataIndex: 'specifications',
      key: 'specifications',
      render: (specs: any) => {
        if (!specs?.dimensions || !specs?.unit) return '-'
        return `${specs.dimensions} ${specs.unit}`
      }
    },
    {
      title: 'Critical',
      dataIndex: 'criticalFlag',
      key: 'criticalFlag',
      render: (critical: boolean, record: any) => (
        <Switch
          checked={critical}
          onChange={() => handleToggleCritical(record)}
          checkedChildren={<i className="las la-exclamation-circle" />}
          unCheckedChildren={<i className="las la-check" />}
        />
      ),
    },
    {
      title: 'Linked Jobs',
      key: 'jobs',
      render: (record: any) => (
        <Space>
          {record.materialOrders?.map(
            (order: any) =>
              order.job && (
                <Tag
                  key={order.job.id}
                  color="blue"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/jobs/${order.job.id}`)}
                >
                  {order.job.title}
                </Tag>
              ),
          )}
        </Space>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('MMM D, YYYY'),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <Title level={2}>
                <i className="las la-boxes" /> Materials Management
              </Title>
              <Text type="secondary">
                Manage your materials, track orders, and link them to jobs
              </Text>
            </div>
            <Button
              type="primary"
              icon={<i className="las la-plus" />}
              onClick={() => setIsModalOpen(true)}
            >
              Add Material
            </Button>
          </div>

          <Card>
            <Table
              columns={columns}
              dataSource={materials}
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </Card>
        </Space>

        <Modal
          title="Add New Material"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleCreateMaterial}>
            <Form.Item
              name="name"
              label="Material Name"
              rules={[
                { required: true, message: 'Please enter material name' },
              ]}
            >
              <Input prefix={<i className="las la-box" />} />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="dimensions" label="Dimensions" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="unit" label="Unit" rules={[{ required: true }]}>
              <Select>
                <Select.Option value="inches">inches</Select.Option>
                <Select.Option value="mm">mm</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="supplierId" label="Supplier">
              <Select>
                {suppliers?.map(supplier => (
                  <Select.Option key={supplier.id} value={supplier.id}>
                    {supplier.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="criticalFlag"
              valuePropName="checked"
              label="Mark as Critical"
            >
              <Switch />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Create Material
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}

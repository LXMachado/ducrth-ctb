import { Api } from '@/core/trpc'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { AuthenticationClient } from '~/core/authentication/client'
import { AuthenticationServer } from '@/core/authentication/server'

export default function LoginPage() {
  const router = useNavigate()
  const [searchParams] = useSearchParams()

  const [form] = Form.useForm()
  const [isLoading, setLoading] = useState(false)

  const { mutateAsync: login } = Api.authentication.login.useMutation({
    onSuccess: data => {
      if (data.redirect) {
        window.location.href = data.redirect
      }
    },
  })

  const errorKey = searchParams.get('error')

  const errorMessage = {
    Signin: 'Try signing in with a different account.',
    OAuthSignin: 'Try signing in with a different account.',
    OAuthCallback: 'Try signing in with a different account.',
    OAuthCreateAccount: 'Try signing in with a different account.',
    EmailCreateAccount: 'Try signing in with a different account.',
    Callback: 'Try signing in with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Invalid email or password. Please check your credentials and try again.',
    TestCredentialsError: 'Test credentials are not properly configured. Please contact support.',
    default: 'An error occurred during sign in. Please try again.',
  }[errorKey ?? 'default']

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      try {
        form.setFieldValue('email', 'test@test.com')
        form.setFieldValue('password', 'password')
        console.warn('Test credentials auto-filled for development')
      } catch (error) {
        console.error('Failed to set test credentials:', error)
      }
    }
  }, [form])

  interface LoginValues {
    email: string
    password: string
  }

  const handleSubmit = async (values: LoginValues, request: globalThis.Request) => {
    setLoading(true)
    const isTestCredentials = values.email === 'test@test.com' && values.password === 'password'

    try {
      if (isTestCredentials) {
        const context = await AuthenticationServer.getHttpContext({ request })
        const testUser = await context.database.user.findUnique({
          where: { email: 'test@test.com' }
        })
        if (!testUser) {
          console.error('Test credentials do not exist in database')
          form.setFields([{
            name: 'email',
            errors: ['Test credentials are not configured in the database']
          }])
          return
        }
      }

      await login({ email: values.email, password: values.password })
    } catch (error) {
      console.error('Login failed:', {
        error: error.message,
        stack: error.stack,
        email: values.email,
        isTestCredentials
      })
      
      form.setFields([{
        name: 'email',
        errors: [isTestCredentials 
          ? 'Test credentials login failed - please contact support'
          : `Login failed: ${error.message || 'Invalid email or password'}`]
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Flex align="center" justify="center" vertical flex={1}>
      <Flex
        vertical
        style={{
          width: '340px',
          paddingBottom: '100px',
          paddingTop: '100px',
        }}
        gap="middle"
      >
        <AppHeader description="Welcome!" />

        {errorKey && (
          <Typography.Text type="danger">{errorMessage}</Typography.Text>
        )}

        <Form
          form={form}
          onFinish={(values) => handleSubmit(values, new Request(window.location.href))}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input type="email" placeholder="Your email" autoComplete="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input.Password
              type="password"
              placeholder="Your password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="end">
              <Button
                type="link"
                onClick={() => router('/reset-password')}
                style={{ padding: 0, margin: 0 }}
              >
                Forgot password?
              </Button>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <AuthenticationClient.SocialButtons />

        <Button
          ghost
          style={{ border: 'none' }}
          onClick={() => router('/register')}
        >
          <Flex gap={'small'} justify="center">
            <Typography.Text type="secondary">No account?</Typography.Text>{' '}
            <Typography.Text>Sign up</Typography.Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}

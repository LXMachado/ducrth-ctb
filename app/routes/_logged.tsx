import { useUserContext } from '@/core/context'
import { NavigationLayout } from '@/designSystem/layouts/NavigationLayout'
import { Outlet, useNavigate } from '@remix-run/react'
import { useEffect } from 'react'
import { MrbSplashScreen } from '~/designSystem'

export default function LoggedLayout() {
  const { isLoggedIn, isLoading } = useUserContext()

  const router = useNavigate()

  useEffect(() => {
    console.log('Auth state:', { isLoading, isLoggedIn })
    if (!isLoading && !isLoggedIn) {
      console.log('Redirecting to login due to missing auth')
      router('/login')
    }
  }, [isLoading, isLoggedIn])

  if (isLoading) {
    return <MrbSplashScreen />
  }

  if (isLoggedIn) {
    return (
      <NavigationLayout>
        <Outlet />
      </NavigationLayout>
    )
  }
}

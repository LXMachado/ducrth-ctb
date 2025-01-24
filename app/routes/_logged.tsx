import { Cookies } from '@/core/authentication/server/cookies'
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
      // Clear auth cookies
      Cookies.delete(new Headers(), 'MARBLISM_ACCESS_TOKEN')
      // Clear any route-specific cookies
      document.cookie.split(';').forEach(cookie => {
        const [name] = cookie.split('=')
        if (name.trim().startsWith('route_')) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`
        }
      })
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

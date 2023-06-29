'use client'

import { Loading } from '@/components/icons/Loading'
import { ButtonLogin } from '@/components/ButtonLogin'
import NavUserProfile from '@/components/NavUserProfile'
import useUser from '@/hooks/useUser'

export default function NavUserOutlet () {
  const { user, loading } = useUser()
  console.log(user)

  if (loading) return <Loading />
  if (user) return <NavUserProfile user={user} />
  if (!user) return <ButtonLogin />

  return null
}

'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { User as UserApp } from '@/types/type'
import { User } from '@supabase/supabase-js'

const extractInfoFrom = (rowUser: User | undefined): UserApp | null => {
  if (rowUser === undefined) return null

  const userData = rowUser?.user_metadata
  if (!userData) return null

  const idUser: string = rowUser?.id
  const { avatar_url, email, name, user_name } = userData
  return { avatar: avatar_url, email, user: user_name, name, id: idUser }
}

export default function useUser () {
  const [user, setUser] = useState<UserApp | null | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const rowUser = supabase.auth.getUser() as unknown as User
    const user = extractInfoFrom(rowUser)
    user && setUser(user)

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      const newUser = extractInfoFrom(session?.user)
      setUser(newUser)
    })

    if (user ?? user === null) setLoading(!loading)

    return () => listener.subscription.unsubscribe()
  }, [])

  return { user, loading }
}

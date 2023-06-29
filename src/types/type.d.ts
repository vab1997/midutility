export interface Utility {
  title: string
  description: string
  use_case: string
  code: string
  language: string
  timestamp: number
}

export type User = {
  avatar: string
  email: string
  name: string
  user: string
  id: string
}

export interface UserResponse {
  id: string
  aud: string
  role: string
  email: string
  email_confirmed_at: Date
  phone: string
  confirmed_at: Date
  last_sign_in_at: Date
  app_metadata: AppMetadata
  user_metadata: Data
  identities: Identity[]
  created_at: Date
  updated_at: Date
}

export interface AppMetadata {
  provider: string
  providers: string[]
}

export interface Identity {
  id: string
  user_id: string
  identity_data: Data
  provider: string
  last_sign_in_at: Date
  created_at: Date
  updated_at: Date
}

export interface Data {
  avatar_url: string
  email: string
  email_verified: boolean
  full_name: string
  iss: string
  name: string
  preferred_username: string
  provider_id: string
  sub: string
  user_name: string
}

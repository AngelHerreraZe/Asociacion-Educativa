import { Navigate } from 'react-router-dom'
import { useAuth } from '@/auth/auth'

export function RequireRole({
  role,
  children,
}: {
  role: 'student' | 'moderator' | 'admin'
  children: JSX.Element
}) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  const hierarchy: any = { guest: 0, student: 1, moderator: 2, admin: 3 }
  if (hierarchy[user.role] >= hierarchy[role]) return children
  return <Navigate to="/" replace />
}

import { createContext, useContext, useEffect, useState } from 'react'

type Role = 'guest' | 'student' | 'moderator' | 'admin'
type User = { name: string; role: Role } | null
type AuthContextType = { user: User; login: (role: Role) => void; logout: () => void }

const AuthContext = createContext<AuthContextType>({ user: null, login: () => {}, logout: () => {} })

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    const saved = localStorage.getItem('ae:user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = (role: Role) => {
    const u = { name: role.toUpperCase(), role }
    setUser(u)
    localStorage.setItem('ae:user', JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ae:user')
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

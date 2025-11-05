import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/auth/auth'

export default function Navbar() {
  const { user, login, logout } = useAuth()
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    'hover:opacity-80 ' + (isActive ? 'font-semibold' : 'text-gray-700')

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-black" />
          <span className="font-semibold">Asociación Educativa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/videos" className={linkCls}>Videos</NavLink>
          <NavLink to="/simuladores" className={linkCls}>Simuladores</NavLink>
          <NavLink to="/clases" className={linkCls}>Clases</NavLink>
          <NavLink to="/articulos" className={linkCls}>Artículos</NavLink>
          <NavLink to="/recursos" className={linkCls}>Recursos</NavLink>
          <NavLink to="/foros" className={linkCls}>Foros</NavLink>
          <NavLink to="/ejercicios" className={linkCls}>Ejercicios</NavLink>
          <NavLink to="/cuestionarios" className={linkCls}>Cuestionarios</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="text-sm text-gray-700 hidden sm:inline">
                Hola, {user.name} ({user.role})
              </span>
              <Button variant="outline" onClick={logout}>Salir</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => login('student')} className="hidden sm:inline-flex">
                Entrar alumno
              </Button>
              <Button onClick={() => login('moderator')} className="rounded-2xl">
                Entrar moderador
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const linkCls = ({ isActive }: {isActive:boolean}) =>
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
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">Ingresar</Button>
          <Button className="rounded-2xl">Crear cuenta</Button>
        </div>
      </div>
    </header>
  )
}
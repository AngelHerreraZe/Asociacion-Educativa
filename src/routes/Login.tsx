import { useAuth } from '@/auth/auth'

export default function Login() {
  const { login } = useAuth()
  return (
    <section className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Iniciar sesión</h1>
      <p className="text-gray-600 mt-2">Selecciona un rol de prueba para acceder a secciones protegidas.</p>
      <div className="mt-6 grid gap-2">
        <button className="h-10 px-4 rounded-2xl bg-black text-white text-sm" onClick={() => login('student')}>Entrar como Alumno</button>
        <button className="h-10 px-4 rounded-2xl border text-sm" onClick={() => login('moderator')}>Entrar como Moderador</button>
      </div>
    </section>
  )
}

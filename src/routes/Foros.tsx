import { RequireRole } from '@/auth/RequireRole'

export default function Foros() {
  return (
    <RequireRole role="student">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold">Foros de discusión</h1>
        <p className="text-gray-600 mt-2">Disponible para usuarios autenticados (alumno o mayor).</p>
        <div className="mt-6 rounded-2xl border p-6 bg-white shadow-sm">
          <p className="text-sm text-gray-600">Crea temas, responde y marca soluciones (en preparación).</p>
        </div>
      </section>
    </RequireRole>
  )
}

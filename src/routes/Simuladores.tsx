const sims = ['Circuitos eléctricos','Reacciones químicas','Ecosistemas','Óptica','Estadística']

export default function Simuladores() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Simuladores y laboratorios</h1>
      <p className="text-gray-600 mt-2">Interactivos con métricas de progreso.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {sims.map((t,i)=>(
          <div key={i} className="rounded-2xl overflow-hidden border bg-white text-gray-900 shadow-sm">
            <div className="aspect-[4/3] bg-gray-100" />
            <div className="p-4 pb-2"><h3 className="text-base font-semibold tracking-tight">{t}</h3></div>
            <div className="px-4 pb-4 text-sm text-gray-600">Preview • Métricas • Feedback</div>
          </div>
        ))}
      </div>
    </section>
  )
}
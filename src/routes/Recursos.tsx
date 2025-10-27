export default function Recursos() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Material descargable</h1>
      <p className="text-gray-600 mt-2">Guías, PDFs y recursos de estudio.</p>
      <div className="mt-6 rounded-2xl border p-6 bg-white shadow-sm">
        <div className="flex gap-2">
          <button className="h-9 px-3 rounded-2xl bg-black text-white text-sm">Ver recursos</button>
          <button className="h-9 px-3 rounded-2xl border text-sm">Subir archivo</button>
        </div>
      </div>
    </section>
  )
}
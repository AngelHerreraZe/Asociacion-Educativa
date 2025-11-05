import { useMemo, useState } from 'react'

type Q = { id: number; q: string; options: string[]; correctIndex: number; explanation: string }
const quiz: Q[] = [
  { id: 1, q: '¿Cuál es la fórmula correcta de la Ley de Ohm?', options: ['V = I / R', 'V = I * R', 'I = R / V', 'R = V + I'], correctIndex: 1, explanation: 'La relación es V = I × R.' },
  { id: 2, q: '¿De qué está compuesta el agua?', options: ['H2', 'H2O', 'CO2', 'O2'], correctIndex: 1, explanation: 'Dos átomos de hidrógeno y uno de oxígeno.' },
  { id: 3, q: '¿Qué es un ecosistema?', options: ['Un único organismo', 'Una red de organismos y su entorno', 'Solo plantas', 'Solo animales'], correctIndex: 1, explanation: 'Incluye organismos y factores abióticos.' },
]

export default function Cuestionarios() {
  const [selected, setSelected] = useState<Record<number, number | null>>(
    Object.fromEntries(quiz.map(q => [q.id, null]))
  )
  const [submitted, setSubmitted] = useState(false)

  const score = useMemo(
    () => (submitted ? quiz.reduce((acc, q) => acc + ((selected[q.id] === q.correctIndex) ? 1 : 0), 0) : 0),
    [submitted, selected]
  )

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Cuestionario de autoevaluación</h1>
      <p className="text-gray-600 mt-2">Elige la opción correcta. Al enviar verás tu puntaje y explicaciones.</p>

      <div className="mt-6 space-y-6">
        {quiz.map(q => (
          <div key={q.id} className="rounded-2xl border bg-white shadow-sm">
            <div className="p-4 font-medium">{q.q}</div>
            <div className="px-4 pb-4 grid gap-2">
              {q.options.map((op, idx) => {
                const isSel = selected[q.id] === idx
                const post = submitted ? (idx === q.correctIndex ? 'border-green-500' : (isSel ? 'border-red-500' : '')) : ''
                return (
                  <button
                    key={idx}
                    onClick={() => !submitted && setSelected(s => ({ ...s, [q.id]: idx }))}
                    className={`text-left border rounded-xl px-3 py-2 text-sm ${isSel ? 'bg-black text-white' : ''} ${post}`}
                  >
                    {op}
                  </button>
                )
              })}
            </div>
            {submitted && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                ✅ Respuesta: {q.options[q.correctIndex]} — {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button onClick={() => setSubmitted(true)} className="h-10 px-4 rounded-2xl bg-black text-white text-sm">Enviar</button>
        <button
          onClick={() => { setSubmitted(false); setSelected(Object.fromEntries(quiz.map(q => [q.id, null]))) }}
          className="h-10 px-4 rounded-2xl border text-sm"
        >
          Reiniciar
        </button>
        {submitted && <span className="text-sm">Puntaje: {score} / {quiz.length}</span>}
      </div>
    </section>
  )
}

import { useState } from 'react'

type Item = { id: number; text: string; correct: boolean }
const dataset: Item[] = [
  { id: 1, text: '2 + 2 = 4', correct: true },
  { id: 2, text: 'La ley de Ohm es V = I / R', correct: false },
  { id: 3, text: 'H2O es agua', correct: true },
]

export default function Ejercicios() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>(
    Object.fromEntries(dataset.map(d => [d.id, null]))
  )
  const [checked, setChecked] = useState(false)

  const toggle = (id: number, val: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: val }))
  }

  const score = checked
    ? dataset.reduce((acc, it) => acc + ((answers[it.id] === it.correct) ? 1 : 0), 0)
    : 0

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Ejercicios interactivos (Verdadero/Falso)</h1>
      <p className="text-gray-600 mt-2">Selecciona V o F y valida tus respuestas.</p>

      <div className="mt-6 space-y-4">
        {dataset.map(it => (
          <div key={it.id} className="rounded-2xl border p-4 bg-white shadow-sm flex items-center justify-between">
            <span className="text-sm">{it.text}</span>
            <div className="flex gap-2">
              <button onClick={() => toggle(it.id, true)} className={`h-9 px-3 rounded-2xl border text-sm ${answers[it.id] === true ? 'bg-black text-white' : ''}`}>V</button>
              <button onClick={() => toggle(it.id, false)} className={`h-9 px-3 rounded-2xl border text-sm ${answers[it.id] === false ? 'bg-black text-white' : ''}`}>F</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button onClick={() => setChecked(true)} className="h-10 px-4 rounded-2xl bg-black text-white text-sm">Validar</button>
        <button
          onClick={() => { setChecked(false); setAnswers(Object.fromEntries(dataset.map(d => [d.id, null]))) }}
          className="h-10 px-4 rounded-2xl border text-sm"
        >
          Reiniciar
        </button>
        {checked && <span className="text-sm">Puntaje: {score} / {dataset.length}</span>}
      </div>

      {checked && (
        <div className="mt-4 text-sm">
          {dataset.map(it => (
            <div key={it.id}>
              {answers[it.id] === it.correct ? '✅' : '❌'} {it.text}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

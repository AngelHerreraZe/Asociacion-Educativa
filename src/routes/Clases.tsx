import { ClassCard } from '@/components/ClassCard'

const clases = [
  { id:1, title:'Álgebra I', datetime:'12 de octubre, 18:00', teacher:'Prof. A. García' },
  { id:2, title:'Química básica', datetime:'14 de octubre, 17:30', teacher:'M. F. Bernal' },
  { id:3, title:'Introducción a Programación', datetime:'16 de octubre, 19:00', teacher:'Ing. H. Hernández' },
  { id:4, title:'Electrónica I', datetime:'18 de octubre, 18:30', teacher:'Prof. E. López' },
]

export default function Clases() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Clases (grabadas y próximas)</h1>
      <p className="text-gray-600 mt-2">Explora y reserva clases; consulta grabaciones cuando estén disponibles.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {clases.map(c => <ClassCard key={c.id} title={c.title} datetime={c.datetime} teacher={c.teacher} />)}
      </div>
    </section>
  )
}
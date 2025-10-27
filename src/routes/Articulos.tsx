import { ArticleCard } from '@/components/ArticleCard'

const articles = [
  { id:1, title:'Guía rápida de Álgebra', summary:'Conceptos base: expresiones, ecuaciones y factorización.'},
  { id:2, title:'Fundamentos de Química', summary:'Estructura atómica, tabla periódica y tipos de enlace.'},
  { id:3, title:'Pensamiento computacional', summary:'Descomposición de problemas, patrones y algoritmos.'},
  { id:4, title:'Ecosistemas y energía', summary:'Flujo de energía y relaciones tróficas.'},
  { id:5, title:'Circuitos básicos', summary:'Serie vs paralelo y leyes de Ohm y Kirchhoff.'},
]

export default function Articulos() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Artículos y lecturas</h1>
      <p className="text-gray-600 mt-2">Material complementario para reforzar el aprendizaje.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {articles.map(a => <ArticleCard key={a.id} title={a.title} summary={a.summary} />)}
      </div>
    </section>
  )
}
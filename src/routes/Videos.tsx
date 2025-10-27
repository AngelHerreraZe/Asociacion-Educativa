import { VideoCard } from '@/components/VideoCard'

const data = Array.from({length:12}).map((_,i)=>({
  id:i+1, title:`Video ${i+1}: Introducción`, duration:'10:24', category:'General'
}))

export default function Videos() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Videos educativos</h1>
      <p className="text-gray-600 mt-2">Colección de lecciones en video categorizadas.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map(v => <VideoCard key={v.id} title={v.title} duration={v.duration} category={v.category} />)}
      </div>
    </section>
  )
}
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PlayCircle, FlaskConical, FileText, MessageSquare, Download, GraduationCap, Calendar, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold leading-tight">
              Educación abierta, práctica y <span className="underline decoration-black">gratuita</span>
            </motion.h1>
            <p className="mt-4 text-lg text-gray-600">
              Aprende con videos, simuladores y clases guiadas. Practica con ejercicios y evalúa tu progreso.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="rounded-2xl"><PlayCircle className="mr-2 h-5 w-5"/>Ver videos</Button>
              <Button size="lg" variant="outline" className="rounded-2xl"><FlaskConical className="mr-2 h-5 w-5"/>Probar simuladores</Button>
            </div>
            <div className="mt-6 flex gap-2 max-w-md">
              <Input placeholder="Tu correo" />
              <Button className="rounded-2xl">Unirme</Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">+120</div>
                <div className="text-xs text-gray-500">Videos</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-gray-500">Simuladores</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24</div>
                <div className="text-xs text-gray-500">Clases al mes</div>
              </div>
            </div>
          </div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} className="relative">
            <div className="aspect-video rounded-3xl bg-gray-100 shadow-inner flex items-center justify-center">
              <PlayCircle className="h-16 w-16"/>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-28 bg-gray-100 rounded-2xl shadow-sm flex items-center justify-center">
              <FlaskConical className="h-8 w-8"/>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="videos" className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><PlayCircle className="h-7 w-7"/> Videos Destacados</h2>
          <button className="rounded-2xl text-sm hover:opacity-80 flex items-center">Ver todos <ChevronRight className="ml-1 h-4 w-4"/></button>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({length:8}).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white text-gray-900 shadow-sm">
              <div className="aspect-video bg-gray-100" />
              <div className="p-4 pb-2">
                <h3 className="font-semibold tracking-tight text-base">Título del video {i+1}</h3>
              </div>
              <div className="px-4 pb-4 text-sm text-gray-600">Categoría • 10:24 min</div>
            </div>
          ))}
        </div>
      </section>

      <section id="clases" className="bg-gray-50 border-y py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><Calendar className="h-7 w-7"/> Próximas clases en vivo</h2>
            <button className="rounded-2xl text-sm hover:opacity-80">Calendario</button>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {["Álgebra I","Química básica","Introducción a Programación"].map((t, i)=> (
              <div key={i} className="rounded-2xl border bg-white text-gray-900 shadow-sm">
                <div className="p-4">
                  <h3 className="font-semibold tracking-tight flex items-center gap-2 text-base"><GraduationCap className="h-5 w-5"/> {t}</h3>
                </div>
                <div className="px-4 pb-4 text-sm text-gray-600">
                  12 de octubre, 18:00 — Prof. Nombre Apellido
                  <div className="mt-3 flex gap-2">
                    <button className="h-9 px-3 rounded-2xl bg-black text-white text-sm">Reservar</button>
                    <button className="h-9 px-3 rounded-2xl border text-sm">Detalles</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="simuladores" className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><FlaskConical className="h-7 w-7"/> Simuladores y Laboratorios Virtuales</h2>
          <button className="rounded-2xl text-sm hover:opacity-80">Explorar</button>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {["Circuitos eléctricos","Reacciones químicas","Ecosistemas"].map((t, i)=> (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white text-gray-900 shadow-sm">
              <div className="aspect-[4/3] bg-gray-100" />
              <div className="p-4 pb-2"><h3 className="text-base font-semibold tracking-tight">{t}</h3></div>
              <div className="px-4 pb-4 text-sm text-gray-600">Interactivo • Métricas de progreso • Feedback</div>
            </div>
          ))}
        </div>
      </section>

      <section id="articulos" className="bg-gray-50 border-y py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><FileText className="h-7 w-7"/> Lecturas y artículos</h2>
            <button className="rounded-2xl text-sm hover:opacity-80">Ver blog</button>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {Array.from({length:3}).map((_, i)=> (
              <div key={i} className="rounded-2xl border bg-white text-gray-900 shadow-sm">
                <div className="p-4"><h3 className="text-base font-semibold tracking-tight">Artículo destacado {i+1}</h3></div>
                <div className="px-4 pb-4 text-sm text-gray-600">Resumen breve del contenido para invitar a la lectura.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recursos" className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white text-gray-900 shadow-sm">
            <div className="p-4">
              <h3 className="font-semibold tracking-tight flex items-center gap-2 text-base"><Download className="h-5 w-5"/> Material descargable</h3>
            </div>
            <div className="px-4 pb-4 text-sm text-gray-600">
              Guías y PDFs para estudiar offline.
              <div className="mt-3 flex gap-2">
                <button className="h-9 px-3 rounded-2xl bg-black text-white text-sm">Ver recursos</button>
                <button className="h-9 px-3 rounded-2xl border text-sm">Subir archivo</button>
              </div>
            </div>
          </div>
          <div id="foros" className="rounded-2xl border bg-white text-gray-900 shadow-sm">
            <div className="p-4">
              <h3 className="font-semibold tracking-tight flex items-center gap-2 text-base"><MessageSquare className="h-5 w-5"/> Foros de discusión</h3>
            </div>
            <div className="px-4 pb-4 text-sm text-gray-600">
              Resuelve dudas y comparte conocimiento con la comunidad.
              <div className="mt-3 flex gap-2">
                <button className="h-9 px-3 rounded-2xl bg-black text-white text-sm">Entrar</button>
                <button className="h-9 px-3 rounded-2xl border text-sm">Reglas</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
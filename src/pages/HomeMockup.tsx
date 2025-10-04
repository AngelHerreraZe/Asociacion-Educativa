import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PlayCircle, FlaskConical, FileText, MessageSquare, Download, GraduationCap, Calendar, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomeMockup() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl bg-black" />
            <span className="font-semibold">Asociación Educativa</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#videos">Videos</a>
            <a className="hover:opacity-80" href="#simuladores">Simuladores</a>
            <a className="hover:opacity-80" href="#clases">Clases</a>
            <a className="hover:opacity-80" href="#articulos">Artículos</a>
            <a className="hover:opacity-80" href="#recursos">Recursos</a>
            <a className="hover:opacity-80" href="#foros">Foros</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex">Ingresar</Button>
            <Button className="rounded-2xl">Crear cuenta</Button>
          </div>
        </div>
      </header>

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
          <Button variant="ghost" className="rounded-2xl">Ver todos <ChevronRight className="ml-1 h-4 w-4"/></Button>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({length:8}).map((_, i) => (
            <Card key={i} className="rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gray-100" />
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Título del video {i+1}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">Categoría • 10:24 min</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="clases" className="bg-gray-50 border-y py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><Calendar className="h-7 w-7"/> Próximas clases en vivo</h2>
            <Button variant="ghost" className="rounded-2xl">Calendario</Button>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {["Álgebra I","Química básica","Introducción a Programación"].map((t, i)=> (
              <Card key={i} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5"/> {t}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  12 de octubre, 18:00 — Prof. Nombre Apellido
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" className="rounded-2xl">Reservar</Button>
                    <Button size="sm" variant="outline" className="rounded-2xl">Detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="simuladores" className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><FlaskConical className="h-7 w-7"/> Simuladores y Laboratorios Virtuales</h2>
          <Button variant="ghost" className="rounded-2xl">Explorar</Button>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {["Circuitos eléctricos","Reacciones químicas","Ecosistemas"].map((t, i)=> (
            <Card key={i} className="rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100" />
              <CardHeader className="pb-2"><CardTitle className="text-base">{t}</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-600">Interactivo • Métricas de progreso • Feedback</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="articulos" className="bg-gray-50 border-y py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><FileText className="h-7 w-7"/> Lecturas y artículos</h2>
            <Button variant="ghost" className="rounded-2xl">Ver blog</Button>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {Array.from({length:3}).map((_, i)=> (
              <Card key={i} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">Artículo destacado {i+1}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">Resumen breve del contenido para invitar a la lectura.</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="recursos" className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Download className="h-5 w-5"/> Material descargable</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Guías y PDFs para estudiar offline.
              <div className="mt-3 flex gap-2">
                <Button className="rounded-2xl">Ver recursos</Button>
                <Button variant="outline" className="rounded-2xl">Subir archivo</Button>
              </div>
            </CardContent>
          </Card>
          <Card id="foros" className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><MessageSquare className="h-5 w-5"/> Foros de discusión</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Resuelve dudas y comparte conocimiento con la comunidad.
              <div className="mt-3 flex gap-2">
                <Button className="rounded-2xl">Entrar</Button>
                <Button variant="outline" className="rounded-2xl">Reglas</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-2xl bg-white" />
              <span className="font-semibold text-white">Asociación Educativa</span>
            </div>
            <p className="mt-4 text-sm">Organización sin fines de lucro comprometida con la educación abierta.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Explorar</div>
            <ul className="space-y-2 text-sm">
              <li>Videos</li>
              <li>Simuladores</li>
              <li>Clases</li>
              <li>Artículos</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Recursos</div>
            <ul className="space-y-2 text-sm">
              <li>PDFs y guías</li>
              <li>Foros</li>
              <li>Cuestionarios</li>
              <li>Ejercicios</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Boletín</div>
            <div className="flex gap-2">
              <Input placeholder="Tu correo" className="bg-white text-gray-900"/>
              <Button className="rounded-2xl">Suscribirme</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 text-xs text-center py-4">© {new Date().getFullYear()} Asociación Educativa • Sin fines de lucro</div>
      </footer>
    </div>
  )
}
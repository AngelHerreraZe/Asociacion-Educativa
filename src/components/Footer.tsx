import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
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
  )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import Home from '@/routes/Home'
import Videos from '@/routes/Videos'
import Clases from '@/routes/Clases'
import Articulos from '@/routes/Articulos'
import Foros from '@/routes/Foros'
import Recursos from '@/routes/Recursos'
import Simuladores from '@/routes/Simuladores'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/simuladores" element={<Simuladores />} />
            <Route path="/clases" element={<Clases />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/foros" element={<Foros />} />
            <Route path="/recursos" element={<Recursos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
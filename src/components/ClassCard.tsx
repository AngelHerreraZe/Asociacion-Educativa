import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

export function ClassCard({ title, datetime, teacher }: {title:string; datetime:string; teacher:string}) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5"/> {title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        {datetime} — {teacher}
        <div className="mt-3 flex gap-2">
          <Button size="sm" className="rounded-2xl">Reservar</Button>
          <Button size="sm" variant="outline" className="rounded-2xl">Detalles</Button>
        </div>
      </CardContent>
    </Card>
  )
}
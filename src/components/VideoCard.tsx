import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function VideoCard({ title, duration, category }: {title:string; duration:string; category:string}) {
  return (
    <Card className="rounded-2xl overflow-hidden">
      <div className="aspect-video bg-gray-100" />
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">{category} • {duration}</CardContent>
    </Card>
  )
}
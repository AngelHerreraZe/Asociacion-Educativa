import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ArticleCard({ title, summary }: {title:string; summary:string}) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">{summary}</CardContent>
    </Card>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export default function ActivityHighlight() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle>最新の活動記録</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video relative mb-4">
          <Image
            src="/images/placeholder.webp"
            alt="活動の様子"
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">地域清掃イベントを開催しました</h3>
        <p className="text-muted-foreground mb-4">
          先週末、地域の皆様と協力して大規模な清掃活動を行いました。多くの参加者が集まり、街をきれいにすることができました。
        </p>
        <Button asChild>
          <Link href="/activities">もっと見る</Link>
        </Button>
      </CardContent>
    </Card>
  )
}


import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-87.5 p-6 space-y-4">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Subscribe</h2>

          <Label>Email</Label>
          <Input placeholder="Enter your email" />

          <Button className="w-full mt-4">
            Subscribe 🚀
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
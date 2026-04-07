
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-8 shadow-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Campus Chronicle</h1>
          <nav className="mt-4 md:mt-0 space-x-6">
            <a href="#articles" className="hover:underline">Articles</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#subscribe" className="hover:underline">Subscribe</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with the Latest Campus News</h2>
          <p className="text-lg mb-6">Your source for events, stories, and opportunities at College Name.</p>
          <a href="#subscribe">
            <Button className="text-lg px-8 py-3">Subscribe Now</Button>
          </a>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articles" className="container mx-auto px-4 py-12">
        <h3 className="text-xl font-bold mb-6 text-blue-900">Featured Articles</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg mb-2">Student Council Elections: Meet the Candidates</h4>
              <p className="text-gray-700 mb-2">Get to know the students running for council this year and their visions for a better campus.</p>
              <a href="#" className="text-blue-700 hover:underline text-sm">Read more</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg mb-2">Spring Fest 2026: Highlights & Winners</h4>
              <p className="text-gray-700 mb-2">A recap of the most exciting moments and the champions of this year’s Spring Fest.</p>
              <a href="#" className="text-blue-700 hover:underline text-sm">Read more</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg mb-2">Alumni Spotlight: Success Stories</h4>
              <p className="text-gray-700 mb-2">Inspiring journeys of our alumni making a difference in the world.</p>
              <a href="#" className="text-blue-700 hover:underline text-sm">Read more</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-6 text-blue-900">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-4">
                <h5 className="font-semibold mb-1">Career Fair 2026</h5>
                <p className="text-gray-700 mb-1">April 15, 2026 | Main Auditorium</p>
                <p className="text-gray-600 text-sm">Meet top recruiters and explore internship and job opportunities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h5 className="font-semibold mb-1">Guest Lecture: AI in Education</h5>
                <p className="text-gray-700 mb-1">April 22, 2026 | Room B201</p>
                <p className="text-gray-600 text-sm">Join us for an insightful talk on the future of artificial intelligence in learning.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section id="subscribe" className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="p-6">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Subscribe to Our Newsletter</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <Button className="w-full mt-2" type="submit">Subscribe 🚀</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; 2026 Campus Chronicle. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
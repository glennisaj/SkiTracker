import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Snowflake, Star } from "lucide-react"
import { SkiDifficultyRating } from "@/components/SkiDifficultyRating"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Snowflake className="h-6 w-6 mr-2" />
          <span className="font-bold">SkiTracker</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Resorts
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            My Runs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Track Your Ski Adventures
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Find, rate, and share your favorite ski runs. Plan your next powder day with ease.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search for a ski resort" type="text" />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Popular Ski Runs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkiRunCard
                name="Powder Paradise"
                resort="Whistler Blackcomb"
                officialDifficulty="Black"
                userDifficulty="Blue"
                rating={4.8}
                image="/placeholder.svg?height=400&width=600"
              />
              <SkiRunCard
                name="Eagle's Nest"
                resort="Vail"
                officialDifficulty="Double Black"
                userDifficulty="Black"
                rating={4.5}
                image="/placeholder.svg?height=400&width=600"
              />
              <SkiRunCard
                name="Sunshine Cruiser"
                resort="Aspen Snowmass"
                officialDifficulty="Blue"
                userDifficulty="Green"
                rating={4.2}
                image="/placeholder.svg?height=400&width=600"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Hit the Slopes?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join SkiTracker today and start logging your runs, rating your experiences, and discovering new
                  adventures.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Sign Up Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 SkiTracker. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

interface SkiRunCardProps {
  name: string
  resort: string
  officialDifficulty: "Green" | "Blue" | "Black" | "Double Black"
  userDifficulty: "Green" | "Blue" | "Black" | "Double Black"
  rating: number
  image: string
}

function SkiRunCard({ name, resort, officialDifficulty, userDifficulty, rating, image }: SkiRunCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={600}
        height={400}
        className="object-cover w-full h-48"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{resort}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Official:</span>
            <SkiDifficultyRating difficulty={officialDifficulty} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">User Rated:</span>
            <SkiDifficultyRating difficulty={userDifficulty} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
          <span>{rating.toFixed(1)}</span>
        </div>
        <Button variant="outline">View Run</Button>
      </CardFooter>
    </Card>
  )
}


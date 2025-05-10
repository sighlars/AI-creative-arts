import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import FeaturedVideo from "@/components/featured-video"
import AIImageCard from "@/components/ai-image-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:gap-24 md:py-12">
      <HeroSection />

      <section className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Explore AI in Creative Fields</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover how artificial intelligence is revolutionizing creative expressions
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="AI in Visual Art"
            description="From generative art to style transfer"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m8 12 2 2 4-4" />
                <path d="M12 7v1" />
                <path d="M12 16v1" />
                <path d="M7 12h1" />
                <path d="M16 12h1" />
                <path d="m9 9 .7.7" />
                <path d="m14.3 14.3.7.7" />
                <path d="m14.3 9.7-.7.7" />
                <path d="m9.7 14.3-.7.7" />
              </svg>
            }
            link="/visual-art"
          />
          <FeatureCard
            title="AI in Music"
            description="Composition, production, and performance"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            }
            link="/music"
          />
          <FeatureCard
            title="AI in Writing"
            description="Storytelling, poetry, and content creation"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 6.1H3" />
                <path d="M21 12.1H3" />
                <path d="M15.1 18H3" />
              </svg>
            }
            link="/writing"
          />
          <FeatureCard
            title="AI in Film"
            description="Visual effects, editing, and scriptwriting"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" />
                <line x1="7" x2="7" y1="2" y2="22" />
                <line x1="17" x2="17" y1="2" y2="22" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <line x1="2" x2="7" y1="7" y2="7" />
                <line x1="2" x2="7" y1="17" y2="17" />
                <line x1="17" x2="22" y1="17" y2="17" />
                <line x1="17" x2="22" y1="7" y2="7" />
              </svg>
            }
            link="/film"
          />
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <FeaturedVideo
          title="Featured Video: The Rise of AI Artists"
          description="Watch how AI is transforming the creative landscape"
          thumbnailUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          videoUrl="/video.mp4"
        />
      </section>

      <section className="bg-accent py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Latest AI Innovations</h2>
              <p className="text-lg text-muted-foreground">
                Stay updated with the cutting-edge developments in AI for creative expression. Our platform showcases
                the most recent breakthroughs and their applications in the arts.
              </p>
              <div>
                <Link href="/about">
                  <Button size="lg">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
                alt="AI innovations in creative arts"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">AI-Generated Artwork</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore stunning examples of art created with artificial intelligence
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <AIImageCard
            imageUrl="/abstract.jpg"
            title="Abstract Dreamscape"
            description="AI-generated abstract art exploring the boundaries of imagination"
          />
          <AIImageCard
            imageUrl="/digital.jpg"
            title="Digital Renaissance"
            description="Modern interpretation of classical art styles using neural networks"
          />
          <AIImageCard
            imageUrl="/futuristic.jpg"
            title="Futuristic Cityscape"
            description="AI-imagined urban environments of tomorrow"
          />
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why AI in Creative Arts?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the benefits of integrating AI into creative processes
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-primary/10 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-primary"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m15.5 9-4.5 4.5L7.5 11" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Enhanced Creativity</h3>
            <p className="mt-3 text-muted-foreground">
              AI tools can inspire new ideas and help artists overcome creative blocks by suggesting novel approaches
              and combinations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-primary/10 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-primary"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Time Efficiency</h3>
            <p className="mt-3 text-muted-foreground">
              Automate repetitive tasks and streamline workflows, allowing artists to focus on the creative aspects of
              their work.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-primary/10 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-primary"
              >
                <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Accessibility</h3>
            <p className="mt-3 text-muted-foreground">
              AI tools make creative expression more accessible to people without formal training, democratizing the
              arts.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

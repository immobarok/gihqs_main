import { Link } from "react-router"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
          Global Institute of Healthcare Quality
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Empowering healthcare professionals through world-class training, webinars, and certification programs.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link to="/courses">Explore Courses</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/auth/login">Login</Link>
          </Button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Transforming Healthcare Careers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-card border shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Self-Paced Courses</h3>
            <p className="text-muted-foreground mb-4">Learn at your own pace with our comprehensive online course material.</p>
            <Button variant="link" className="p-0 text-primary">Learn more &rarr;</Button>
          </div>
          <div className="p-6 rounded-2xl bg-card border shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Live Webinars</h3>
            <p className="text-muted-foreground mb-4">Join expert-led sessions and interact with global healthcare leaders realtime.</p>
            <Button variant="link" className="p-0 text-primary">View Schedule &rarr;</Button>
          </div>
          <div className="p-6 rounded-2xl bg-card border shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Certifications</h3>
            <p className="text-muted-foreground mb-4">Validate your skills and enhance your resume with industry recognized credentials.</p>
            <Button variant="link" className="p-0 text-primary">Get Certified &rarr;</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

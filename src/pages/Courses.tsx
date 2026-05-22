import { Link } from "react-router"
import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  const dummyCourses = [
    { id: 1, title: "Healthcare Quality Foundations", category: "Self Paced", price: "$199" },
    { id: 2, title: "Advanced Patient Safety", category: "Webinar", price: "$99" },
    { id: 3, title: "Clinical Risk Management", category: "Certification", price: "$299" },
    { id: 4, title: "Leadership in Healthcare", category: "Self Paced", price: "$149" },
  ]

  return (
    <div className="container mx-auto p-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Our Catalogue</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Browse through our curated list of courses perfectly tailored for ambitious healthcare professionals.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map(course => (
          <div key={course.id} className="border rounded-2xl p-6 bg-card flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 inline-block px-3 py-1 rounded-full mb-4">
                {course.category}
              </div>
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-muted-foreground mb-4">Gain comprehensive knowledge and practical skills that you can directly apply securely.</p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t">
              <span className="text-lg font-bold">{course.price}</span>
              <Button asChild variant="outline">
                <Link to={`/courses/${course.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

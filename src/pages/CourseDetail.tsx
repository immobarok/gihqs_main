import { useParams } from "react-router"

export default function CourseDetailPage() {
  const { id } = useParams()
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Course Detail</h1>
      <p>Details for course ID: {id || "unknown"}</p>
    </div>
  )
}

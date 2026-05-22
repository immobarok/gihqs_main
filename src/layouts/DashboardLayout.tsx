
import { Outlet } from "react-router"

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <aside className="w-64 border-r bg-card p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="/dashboard" className="block p-2 rounded hover:bg-muted">Overview</a></li>
            <li><a href="/courses" className="block p-2 rounded hover:bg-muted">Back to Courses</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto bg-muted/20">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
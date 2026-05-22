import { GIHQSNavbar } from "@/components/layout/Navbar"
import { Outlet } from "react-router"

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <GIHQSNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
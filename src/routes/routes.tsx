
import { createBrowserRouter } from "react-router"
import { ROUTES } from "./routes.constants"

import RootLayout       from "@/layouts/RootLayout"
import PrivateRoute     from "./PrivateRoute"
import DashboardLayout from "@/layouts/DashboardLayout"
import HomePage from "@/pages/Home"
import CoursesPage from "@/pages/Courses"
import CourseDetailPage from "@/pages/CourseDetail"
import DashboardPage from "@/pages/Dashboard"
import NotFoundPage from "@/pages/NotFound"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [

      { path: ROUTES.HOME,          element: <HomePage /> },
      { path: ROUTES.COURSES,       element: <CoursesPage /> },
      { path: ROUTES.COURSE_DETAIL, element: <CourseDetailPage /> },
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
            ],
          },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])
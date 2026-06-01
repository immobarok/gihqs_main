
import { createBrowserRouter } from "react-router"
import { ROUTES } from "./routes.constants"

import RootLayout       from "@/layouts/RootLayout"
import PrivateRoute     from "./PrivateRoute"
import DashboardLayout from "@/layouts/DashboardLayout"
import CoursesPage from "@/pages/Courses"
import CourseDetailPage from "@/pages/CourseDetail"
import DashboardPage from "@/pages/Dashboard"
import NotFoundPage from "@/pages/NotFound"
import HomePage from "@/pages/Home/Index"
import LoginPage from "@/pages/Login/Login"
import SignupPage from "@/pages/Signup/Signup"

export const router = createBrowserRouter([
  { path: ROUTES.LOGIN,  element: <LoginPage /> },
  { path: ROUTES.SIGNUP, element: <SignupPage /> },
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

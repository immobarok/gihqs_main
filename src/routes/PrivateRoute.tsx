import { Navigate, Outlet } from "react-router"
import { useAppSelector } from "@/app/hooks"
import { ROUTES } from "./routes.constants"

export default function PrivateRoute() {
  const token = useAppSelector((state) => state.auth.token)
  return token ? <Outlet /> : <Navigate to={ROUTES.HOME} replace />
}
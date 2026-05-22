import { RouterProvider } from "react-router/dom"
import { Provider } from "react-redux"
import { store } from "@/app/store"
// import { ThemeProvider } from "@/components/theme-provider"
import { router } from "@/routes/routes"

export default function AppProviders() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  )
}
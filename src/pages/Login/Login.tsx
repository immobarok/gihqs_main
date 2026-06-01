import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Link } from "react-router"
import { Eye, EyeOff, Mail, Lock, ChevronLeft, ArrowRight } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { AuthLogo } from "@/components/shared/AuthLogo"
import { ROUTES } from "@/routes/routes.constants"

const loginSchema = z.object({
  email: z.email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  rememberMe: z.boolean().default(false).optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  })

  // Watch for the checkbox state manually since we are using Shadcn Checkbox
  const rememberMe = watch("rememberMe")

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login data:", data)
    // Add auth logic here
  }

  return (
    <div className="min-h-screen container mx-auto  bg-[#F7FAF9] flex flex-col pt-8 sm:pt-16 items-center px-4 relative">
      {/* Back button */}
      <Link 
        to={ROUTES.HOME}
        className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center text-sm font-semibold text-[#1B3C32] hover:opacity-70 transition-opacity"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </Link>

      <AuthLogo />

      <div className="w-full max-w-[480px] bg-white rounded-[24px] shadow-sm shadow-[#1B3C32]/[0.03] p-8 md:p-10 border border-[#E5EDE9] mb-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#111827] mb-2 font-['Outfit']">Sign in to your account</h1>
          <p className="text-[13px] text-[#6B7280]">Access your GIHQS member dashboard</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2 relative">
            <Label htmlFor="email" className="text-xs font-semibold text-[#374151]">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-[#9CA3AF] pointer-events-none" />
              <Input
                id="email"
                type="email"
                placeholder="john@google.com"
                className="pl-11 h-12 bg-[#F3F4F6] border-transparent focus-visible:ring-[#1E5F4C]/20 focus-visible:bg-white transition-colors rounded-xl text-sm"
                {...register("email")}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-2 relative">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-xs font-semibold text-[#374151]">Password</Label>
              <Link to="#" className="text-xs font-bold text-[#1E5F4C] hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-[#9CA3AF] pointer-events-none" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-11 pr-11 h-12 bg-[#F3F4F6] border-transparent focus-visible:ring-[#1E5F4C]/20 focus-visible:bg-white transition-colors rounded-xl text-sm"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#4B5563] transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center space-x-2 pt-1 pb-2">
            <Checkbox 
              id="rememberMe" 
              checked={rememberMe}
              onCheckedChange={(checked) => setValue("rememberMe", checked as boolean)}
              className="rounded-[4px] border-[#D1D5DB] text-[#1E5F4C] focus-visible:ring-[#1E5F4C]"
            />
            <Label
              htmlFor="rememberMe"
              className="text-xs font-semibold text-[#4B5563] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Remember me
            </Label>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 bg-[#1A5C4A] hover:bg-[#154637] text-white rounded-xl font-medium text-[15px] transition-colors shadow-sm group"
          >
            {isSubmitting ? "Signing In..." : "Sign In"} <ArrowRight className="w-4 h-4 ml-2 group-hover:w-5 group-hover:translate-x-0.5" />
          </Button>
        </form>

        <div className="mt-8 text-center text-[13px] text-[#4B5563] font-medium">
          Don't have an account?{" "}
          <Link to={ROUTES.SIGNUP} className="text-primary font-bold underline underline-offset-2">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

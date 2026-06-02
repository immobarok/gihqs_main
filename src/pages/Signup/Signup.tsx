import  { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Link } from "react-router"
import { Eye, EyeOff, Mail, ChevronLeft, ChevronDown, ArrowRight } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { AuthLogo } from "@/components/shared/AuthLogo"
import { ROUTES } from "@/routes/routes.constants"

const signupSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  email: z.email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  rememberMe: z.boolean().default(false).optional(),
})

type SignupFormValues = z.infer<typeof signupSchema>

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      country: "",
      rememberMe: false,
    },
  })

  const rememberMe = watch("rememberMe")

  const onSubmit = async (data: SignupFormValues) => {
    console.log("Signup data:", data)
    // Add logic here
  }

  return (
    <div className="min-h-screen container mx-auto bg-[#F8FAFA] flex flex-col pt-8 sm:pt-16 items-center px-4 relative pb-10">
      {/* Back button */}
      <Link 
        to={ROUTES.HOME}
        className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center text-sm font-semibold text-[#1B3C32] hover:opacity-70 transition-opacity"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </Link>

      <AuthLogo />

      <div className="w-full max-w-[500px] bg-white rounded-[24px] shadow-sm shadow-[#1B3C32]/[0.03] p-8 md:p-10 border border-[#E5EDE9]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#111827] mb-2 font-['Outfit']">Create your Free Account</h1>
          <p className="text-[13px] text-[#6B7280] max-w-sm mx-auto leading-relaxed">
            Welcome! Registering gives you access to world-class resources, free templates, free e-learning and much more.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs font-semibold text-[#374151]">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className="h-12 bg-[#F3F4F6] border-transparent transition-colors rounded-xl text-sm placeholder:text-[#9CA3AF]"
                {...register("firstName")}
              />
              {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs font-semibold text-[#374151]">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className="h-12 bg-[#F3F4F6] border-transparent focus-visible:ring-[#1E5F4C]/20 focus-visible:bg-white transition-colors rounded-xl text-sm placeholder:text-[#9CA3AF]"
                {...register("lastName")}
              />
              {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="country" className="text-xs font-semibold text-[#374151]">Select Country</Label>
            <div className="relative">
              {/* For simplicity we'll use a native select styled properly or an input masquerading as select */}
              <select
                id="country"
                className="w-full h-12 bg-[#F3F4F6] border-transparent focus-visible:ring-[#1E5F4C]/20 focus-visible:bg-white transition-colors rounded-xl text-sm px-3.5 appearance-none text-[#9CA3AF] cursor-pointer outline-none"
                {...register("country")}
              >
                <option value="" disabled hidden>Select Country</option>
                <option value="US" className="text-black">United States</option>
                <option value="UK" className="text-black">United Kingdom</option>
                <option value="AE" className="text-black">United Arab Emirates</option>
                <option value="SA" className="text-black">Saudi Arabia</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF] pointer-events-none" />
            </div>
            {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="email" className="text-xs font-semibold text-[#374151]">Email</Label>
            <div className="relative">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-[#9CA3AF] pointer-events-none" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your mail"
                className="pr-11 pl-3.5 h-12 bg-[#F3F4F6] border-transparent focus-visible:ring-[#1E5F4C]/20 focus-visible:bg-white transition-colors rounded-xl text-sm placeholder:text-[#9CA3AF]"
                {...register("email")}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="password" className="text-xs font-semibold text-[#374151]">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pr-11 pl-3.5 h-12 bg-[#F3F4F6] border-transparent focus-visible:ring-[#1E5F4C]/20 focus-visible:bg-white transition-colors rounded-xl text-sm placeholder:text-[#9CA3AF]"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#4B5563] transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center space-x-2 pt-1 pb-2">
            <Checkbox 
              id="rememberMeSignup" 
              checked={rememberMe}
              onCheckedChange={(checked) => setValue("rememberMe", checked as boolean)}
              className="rounded-[4px] border-[#D1D5DB] text-[#1E5F4C] focus-visible:ring-[#1E5F4C]"
            />
            <Label
              htmlFor="rememberMeSignup"
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
            {isSubmitting ? "Creating..." : "Create Account "} <ArrowRight className="w-4 h-4 ml-2 group-hover:w-5 group-hover:translate-x-0.5" />
          </Button>
        </form>

        <div className="mt-8 text-center text-[13px] text-[#4B5563] font-medium">
          Already registered?{" "}
          <Link to={ROUTES.LOGIN} className="text-primary font-bold underline underline-offset-2">
            Sign In Now
          </Link>
        </div>
      </div>
    </div>
  )
}

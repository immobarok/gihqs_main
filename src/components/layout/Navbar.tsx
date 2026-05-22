import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/assets/icons/MainLogo.svg?react";


interface NavChild {
  title: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: "CERTIFICATIONS",
    children: [
      { title: "CPHQ Certification",  href: "/certifications/cphq",    description: "Certified Professional in Healthcare Quality" },
      { title: "Exam Preparation",    href: "/certifications/prep",    description: "Study materials and practice exams" },
      { title: "Renewal",             href: "/certifications/renewal", description: "Maintain your certification status" },
    ],
  },
  {
    label: "LEARNING",
    children: [
      { title: "Online Courses", href: "/learning/courses",   description: "Self-paced quality & safety education" },
      { title: "Webinars",       href: "/learning/webinars",  description: "Live and recorded sessions" },
      { title: "Workshops",      href: "/learning/workshops", description: "Hands-on training programs" },
    ],
  },
  {
    label: "ACCREDITATION",
    children: [
      { title: "Standards",      href: "/accreditation/standards", description: "International quality standards" },
      { title: "Survey Process", href: "/accreditation/survey",    description: "Understanding the accreditation journey" },
    ],
  },
  {
    label: "ADVISORY",
    children: [
      { title: "Consulting",       href: "/advisory/consulting", description: "Expert guidance for organizations" },
      { title: "Risk Management",  href: "/advisory/risk",       description: "Proactive safety solutions" },
    ],
  },
  { label: "MEMBERSHIP", href: "/membership" },
  {
    label: "ABOUT",
    children: [
      { title: "Our Story",   href: "/about/story",      description: "Mission, vision, and values" },
      { title: "Leadership",  href: "/about/leadership", description: "Board and executive team" },
      { title: "Careers",     href: "/about/careers",    description: "Join our team" },
    ],
  },
];



interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

const ListItem = React.forwardRef<React.ComponentRef<"a">, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-[#1a5f4a]/5 ",
            "focus:bg-[#1a5f4a]/5 ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

// ─── Trigger style shared ───
const triggerClass = cn(
  "h-auto bg-transparent px-3 py-2",
  "text-[0.75rem] font-semibold tracking-wide text-gray-600",
  "hover:bg-transparent hover:text-[#1a5f4a]",
  "focus:bg-transparent",
  "data-[state=open]:text-[#1a5f4a]",
  "data-[active]:text-[#1a5f4a]"
);

export function GIHQSNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-28.5 container items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="shrink-0">
          <Logo />
        </div>

        {/* Center Navigation */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-1">
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.label} className="relative">
                  <NavigationMenuTrigger className={triggerClass}>
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full center-x-0 left-1/2 -translate-x-1/2 mt-2 rounded-lg border bg-white p-4 shadow-lg">
                    <ul className="grid w-125 gap-3 p-4 md:grid-cols-2">
                        {item.children.map((child) => (
                        <ListItem
                            key={child.title}
                            title={child.title}
                            href={child.href}
                        >
                            {child.description}
                        </ListItem>
                        ))}
                    </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(navigationMenuTriggerStyle(), triggerClass)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right — User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-10 gap-2 rounded-full border border-[#1a5f4a]/20 bg-[#1a5f4a] px-4 text-white hover:bg-[#145240] hover:text-white focus-visible:ring-[#1a5f4a]"
            >
              <Avatar className="h-6 w-6 border border-white/30">
                <AvatarImage src="/avatar.jpg" alt="Baki Billah" />
                <AvatarFallback className="bg-[#145240] text-[10px] text-white">
                  BB
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Baki Billah</span>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>My Courses</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 focus:text-red-600">
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
}
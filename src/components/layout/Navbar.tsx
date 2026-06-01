import * as React from "react";
import { UserRound } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/assets/icons/MainLogo.svg?react";


interface NavChild {
  title: string;
  href: string;
  description?: string;
}

interface NavGroup {
  heading: string;
  items: { title: string; href: string }[];
}

interface LearningSection {
  heading: string;
  items: { title: string; href: string }[];
}

interface LearningColumn {
  sections: LearningSection[];
}

interface CertificationItem {
  code: string;
  title: string;
  exploreHref: string;
  storyGuideHref: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
  groups?: NavGroup[];
}

const learningSections: LearningSection[] = [
  {
    heading: "Modules",
    items: [
      { title: "HEALTHCARE QUALITY IMPROVEMENT", href: "/learning/modules/healthcare-quality-improvement" },
      { title: "Lean Healthcare", href: "/learning/modules/lean-healthcare" },
      { title: "Patient Experience Excellence", href: "/learning/modules/patient-experience-excellence" },
      { title: "Healthcare Intelligence & KPI", href: "/learning/modules/healthcare-intelligence-kpi" },
      { title: "Value-Based Purchasing", href: "/learning/modules/value-based-purchasing" },
      { title: "Value-Based Purchasing", href: "/learning/modules/value-based-purchasing-2" },
    ],
  },
  {
    heading: "Courses",
    items: [
      { title: "High-Reliability Healthcare Systems", href: "/learning/courses/high-reliability-healthcare-systems" },
      { title: "Artificial Intelligence for Healthcare Quality & Safety", href: "/learning/courses/ai-for-healthcare-quality-safety" },
      { title: "Healthcare Data Analytics & Performance Intelligence", href: "/learning/courses/healthcare-data-analytics-performance-intelligence" },
      { title: "Accreditation Readiness & Survey Preparedness", href: "/learning/courses/accreditation-readiness-survey-preparedness" },
      { title: "Value-Based Healthcare Strategy", href: "/learning/courses/value-based-healthcare-strategy" },
    ],
  },
  {
    heading: "Patient Safety & Risk Management",
    items: [
      { title: "Root Cause Analysis", href: "/learning/modules/root-cause-analysis" },
      { title: "Healthcare FMEA", href: "/learning/modules/healthcare-fmea" },
      { title: "Human Factors Engineering", href: "/learning/modules/human-factors-engineering" },
      { title: "Just Culture in Healthcare", href: "/learning/modules/just-culture-in-healthcare" },
    ],
  },
  {
    heading: "Toolkits",
    items: [
      { title: "Hospital Quality Improvement Toolkit", href: "/learning/toolkits/hospital-quality-improvement-toolkit" },
      { title: "Patient Safety Incident Investigation Toolkit", href: "/learning/toolkits/patient-safety-incident-investigation-toolkit" },
      { title: "Root Cause Analysis Professional Toolkit", href: "/learning/toolkits/root-cause-analysis-professional-toolkit" },
      { title: "AI Governance & Responsible AI Toolkit", href: "/learning/toolkits/ai-governance-responsible-ai-toolkit" },
    ],
  },
];

const learningColumns: LearningColumn[] = [
  { sections: [learningSections[0], learningSections[2]] },
  { sections: [learningSections[1], learningSections[3]] },
];

const learningVerticalBarClass = "absolute left-0 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-[#c0a062] to-transparent md:block";
const learningHorizontalBarClass = "absolute -top-3 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c0a062]/50 to-transparent";

const certifications: CertificationItem[] = [
  {
    code: "AIHQSP",
    title: "AI Healthcare Quality & Safety Professional",
    exploreHref: "/certifications/aihqsp",
    storyGuideHref: "/certifications/aihqsp/story-guide",
  },
  {
    code: "CHSCP",
    title: "Healthcare Standards & Compliance Professional",
    exploreHref: "/certifications/chscp",
    storyGuideHref: "/certifications/chscp/story-guide",
  },
  {
    code: "CCDIP",
    title: "Certified Clinical Documentation Improvement Professional",
    exploreHref: "/certifications/ccdip",
    storyGuideHref: "/certifications/ccdip/story-guide",
  },
];

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
  },
  {
    label: "ACCREDITATION",
    children: [
      { title: "Overview", href: "/accreditation/overview" },
      { title: "Apply for Accreditation", href: "/accreditation/apply" },
    ],
  },
  {
    label: "ADVISORY",
    children: [
      { title: "Advisory Services", href: "/advisory/services" },
      { title: "Request Advisory Consultation", href: "/advisory/request-consultation" },
    ],
  },
  { label: "MEMBERSHIP", href: "/membership" },
  {
    label: "ABOUT",
    groups: [
      {
        heading: "GIHQS",
        items: [
          { title: "About the Institute", href: "/about/institute" },
          { title: "Mission, Vision & Values", href: "/about/mission" },
          { title: "Policies & Governance", href: "/about/policies" },
        ],
      },
      {
        heading: "Governance",
        items: [
          { title: "Strategic Advisory Board", href: "/about/advisory-board" },
          { title: "Accreditation Review Panel", href: "/about/review-panel" },
        ],
      },
      {
        heading: "Connect",
        items: [
          { title: "Contact", href: "/contact" },
        ],
      },
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
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-28.5 container items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="shrink-0 w-32 sm:w-40 md:w-auto">
          <Logo className="w-full h-auto md:w-[initial]" />
        </div>

        {/* Center Navigation */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-1">
            {navItems.map((item) =>
              item.label === "CERTIFICATIONS" ? (
                <NavigationMenuItem key={item.label} className="relative">
                  <NavigationMenuTrigger className={triggerClass}>
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-2xl bg-white p-0 shadow-[0_18px_40px_rgba(26,95,74,0.12)]"
                    style={{ width: "525px", maxWidth: "calc(100vw - 2rem)" }}
                  >
                    <div className="relative pl-14 pr-2">
                      <div className="absolute left-6 top-0 bottom-0 w-[0.3px] bg-linear-to-b from-transparent via-[#c0a062]/70 to-transparent" />

                      {certifications.map((cert, index) => (
                        <section
                          key={cert.code}
                          className={cn(
                            "pl-0 pr-1 py-6",
                            index > 0 && "relative"
                          )}
                        >
                          {index > 0 && (
                            <div className="absolute -top-3 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c0a062]/50 to-transparent" />
                          )}
                          <h4 className="text-xl font-bold uppercase text-[#b89551]">
                            {cert.code}
                          </h4>
                          <p className="mt-3 text-[0.95rem] leading-snug text-[#0f6b62]">
                            {cert.title}
                          </p>
                          <div className="mt-4 flex flex-nowrap gap-6 text-[0.75rem] font-medium uppercase tracking-[0.04em] text-[#b89551]">
                            <NavigationMenuLink asChild>
                              <a href={cert.exploreHref} className="whitespace-nowrap transition-colors hover:text-[#8f671e]">
                                Explore
                              </a>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <a href={cert.storyGuideHref} className="whitespace-nowrap transition-colors hover:text-[#8f671e]">
                                Story Guide
                              </a>
                            </NavigationMenuLink>
                          </div>
                        </section>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : item.label === "LEARNING" ? (
                <NavigationMenuItem key={item.label} className="relative">
                  <NavigationMenuTrigger className={triggerClass}>
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-1/2 top-full mt-2 w-[min(56rem,calc(100vw-2rem))]! max-w-none! -translate-x-1/2 rounded-lg border bg-white p-6 shadow-lg">
                    <div className="grid min-w-0 gap-6 md:grid-cols-2 md:gap-x-10">
                      {learningColumns.map((column, columnIndex) => (
                        <div
                          key={columnIndex}
                          className={cn(
                            "relative min-w-0 space-y-6 pl-6",
                            columnIndex === 1 && "md:pl-6"
                          )}
                        >
                          <div
                            className={cn(
                              learningVerticalBarClass,
                              columnIndex === 1 && "md:-left-3"
                            )}
                          />

                          {column.sections.map((section, sectionIndex) => (
                            <section key={section.heading} className="relative space-y-3 pb-5 last:pb-0">
                              {sectionIndex > 0 && (
                                <div className={learningHorizontalBarClass} />
                              )}
                              <h4 className={cn(
                                "text-[0.9rem] font-bold uppercase tracking-[0.08em]",
                                section.heading === "Patient Safety & Risk Management"
                                  ? "text-black"
                                  : "text-[#b89551]"
                              )}>
                                {section.heading}
                              </h4>
                              <ul className="space-y-3">
                                {section.items.map((link, linkIndex) => {
                                  const isHighlightedFirstItem = section.heading === "Modules" && linkIndex === 0;

                                  return (
                                    <li key={link.title}>
                                      <NavigationMenuLink asChild>
                                        <a
                                          href={link.href}
                                          className={cn(
                                            "block text-[0.95rem] leading-snug transition-colors hover:text-[#145240] hover:underline",
                                            isHighlightedFirstItem
                                              ? "font-bold uppercase text-black hover:text-black"
                                              : "font-medium text-[#1a5f4a]"
                                          )}
                                        >
                                          {link.title}
                                        </a>
                                      </NavigationMenuLink>
                                    </li>
                                  );
                                })}
                              </ul>
                            </section>
                          ))}
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : item.groups ? (
                <NavigationMenuItem key={item.label} className="relative">
                  <NavigationMenuTrigger className={triggerClass}>
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full center-x-0 left-1/2 -translate-x-1/2 mt-2 rounded-lg border bg-white p-6 shadow-lg">
                    <div className="relative w-80 pl-6 space-y-6">
                      {/* Left vertical bar - faded at ends */}
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#c0a062] to-transparent" />
                      
                      {item.groups.map((group, idx) => (
                        <div key={group.heading} className="relative space-y-4">
                          {/* Horizontal divider - faded at ends */}
                          {idx > 0 && (
                            <div className="absolute -top-3 left-0 h-px w-full bg-linear-to-r from-transparent via-[#c0a062]/50 to-transparent" />
                          )}
                          <h4 className="text-xl font-bold text-[#b89551]">
                            {group.heading}
                          </h4>
                          <ul className="space-y-3">
                            {group.items.map((link) => (
                              <li key={link.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={link.href}
                                    className="text-[0.95rem] font-medium text-[#1a5f4a] transition-colors hover:text-[#145240] hover:underline"
                                  >
                                    {link.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : item.children ? (
                <NavigationMenuItem key={item.label} className="relative">
                  <NavigationMenuTrigger className={triggerClass}>
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg bg-white p-0 shadow-[0_18px_40px_rgba(26,95,74,0.12)]">
                    <div className="relative w-72 pl-6 pr-3 py-2">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c0a062] to-transparent" />

                      <ul className="space-y-2">
                        {item.children.map((child) => (
                          <li key={child.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={child.href}
                                className="block text-[0.95rem] font-medium leading-snug text-[#b89551] transition-colors hover:text-[#8f671e] hover:underline"
                              >
                                {child.title}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
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
        {/*
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
        */}

        <Button
          variant="ghost"
          className="h-10 gap-2 rounded-full border border-[#1a5f4a]/20 bg-[#1a5f4a] px-6 text-white hover:bg-[#145240] hover:text-white focus-visible:ring-[#1a5f4a]"
        >
          <span className="text-sm font-medium">Log In</span>
          <UserRound className="h-4 w-4" />
        </Button>

      </div>
    </header>
  );
}
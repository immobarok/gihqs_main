import { ArrowRight } from "lucide-react";

// Structure for the actionable pathway options
interface PathwayOption {
  label: string;
  href: string;
  isPrimary?: boolean;
}

const pathwayOptions: PathwayOption[] = [
  {
    label: "Get Certified",
    href: "#",
    isPrimary: true, // Uses the signature golden brand color accents
  },
  {
    label: "Explore Learning",
    href: "#",
  },
  {
    label: "Advisory Services",
    href: "#",
  },
  {
    label: "Become a Premium Member",
    href: "#",
  },
];

export default function PathwayCTA() {
  return (
    <div className="w-full bg-background px-0 py-16 ">
        
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 bg-primary relative overflow-hidden shadow-lg rounded-[24px] border-3 border-[#F0D070]"
          
        >
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 blur-3xl opacity-40 z-0"
            style={{
              background: `radial-gradient(130% 130% at 75% 50%, #CAA24A 0%, rgba(202, 162, 74, 0.15) 35%, transparent 80%)`,
            }}
          />

          {/* LEFT CONTENT BLOCK */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
            <span className="text-muted-foreground text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-90">
              Choose Your Next Step
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight">
              Begin Your Professional <br className="hidden md:inline" />
              Pathway with{" "}
              <span className="font-serif italic text-[#CAA24A]">
                GIHQS
              </span>
            </h2>
          </div>

          {/* RIGHT ACTIONABLE GRID ROWS */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-3 relative z-10 lg:border-l border-white/10 bg-white/[0.02] backdrop-blur-sm">
            {pathwayOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                className="group flex items-center justify-between w-full px-6 py-4 transition-all duration-200 border bg-white/5 border-white/10 text-white  hover:bg-[#CAA24A]"

                style={{
                  borderRadius: "0px", // Strict flat edge requirement matching layout consistency
                }}
              >
                <span className="text-sm md:text-base font-semibold tracking-wide">
                  {option.label}
                </span>
                
                <ArrowRight 
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200 shrink-0 ml-4"
                    
                />
              </a>
            ))}
          </div>

        </div>

    </div>
  );
}
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// Types for the ecosystem list on the right
interface EcosystemItem {
  category: string;
  title: string;
  description: string;
}

const ecosystemData: EcosystemItem[] = [
  {
    category: "PROFESSIONAL LEARNING",
    title: "Learn",
    description: "Courses, toolkits, and structured development pathways",
  },
  {
    category: "PROFESSIONAL CERTIFICATION",
    title: "Certify",
    description: "AIHQSP, CHSCP, and CCDIP credentials",
  },
  {
    category: "ACCREDITATION & ADVISORY",
    title: "Lead",
    description: "Accreditation and advisory pathways for education providers and healthcare organizations",
  },
];

const bannerItems = [
  "Professional Certification",
  "Program Accreditation",
  "Healthcare Quality & Patient Safety",
];

export default function EcosystemHero() {
  return (
    <div className="w-full bg-[#f8faf9] py-8 font-sans">
      <div className="w-full overflow-hidden rounded-[32px] bg-[#0F2F26] relative">
        
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 blur-3xl opacity-85"
          style={{
            background: `radial-gradient(140% 140% at 72% 50%, rgba(212, 170, 58, 0.22) 0%, rgba(212, 170, 58, 0.12) 24%, rgba(212, 170, 58, 0.06) 48%, rgba(15, 47, 38, 0) 80%)`,
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 p-4 md:p-8 lg:p-16">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            <div>
              <div 
            className="rounded-full border border-[rgba(240,208,112,0.72)] bg-[rgba(240,208,112,0.10)] inline-flex items-center px-1 md:px-3.5 py-1.75 text-[#D4AA3A] text-xs font-normal md:font-semibold tracking-wider uppercase leading-none"
          >
                Global Institute for Healthcare Quality & Safety
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-normal text-white leading-[1.15] tracking-tight max-w-2xl">
              Advancing Healthcare Professionals for{" "}
              <span className="font-serif italic text-[#D4AA3A]">
                High Reliability Healthcare Systems
              </span>
            </h1>

            <p className="text-[#B8C5C0] text-sm md:text-base leading-relaxed font-normal max-w-xl opacity-90">
              GIHQS advances healthcare quality and patient safety through certification, 
              professional education, and accreditation pathways designed to strengthen safer 
              systems, stronger leadership, and responsible innovation in healthcare.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button 
                className="hover:bg-[#dfba5f] border-[#2c4e44] bg-[#16382e] text-white font-medium text-xs rounded-full px-6 py-5 transition-colors duration-150"
              >
                Get Certified
              </Button>
              <Button 
                variant="outline" 
                className="hover:bg-[#dfba5f] border-[#2c4e44] bg-[#16382e] text-white font-medium text-xs rounded-full px-6 py-5 transition-colors duration-150"
              >
                Explore Learning
              </Button>
              <Button 
                variant="outline" 
                className="hover:bg-[#dfba5f] border-[#2c4e44] bg-[#16382e] text-white font-medium text-xs rounded-full px-6 py-5 transition-colors duration-150"
              >
                Advisory Services
              </Button>
              <Button 
                variant="outline" 
                className="hover:bg-[#dfba5f] border-[#2c4e44] bg-[#16382e] text-white font-medium text-xs rounded-full px-6 py-5 transition-colors duration-150"
              >
                Become a Premium Member
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center relative lg:pl-8">
            
            <div className="hidden lg:block absolute left-0 top-4 bottom-4 w-px bg-[#CAA24A99]/60" />

            <div className="space-y-8 lg:pl-8">
              {/* Feature Box Context Title */}
              <h2 className="text-[#D4AA3A] text-xs font-semibold tracking-[0.22em] uppercase">
                GIHQS Professional Ecosystem
              </h2>

              {/* Dynamic Feature Separator Rendering Grid */}
              <div className="space-y-6">
                {ecosystemData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`space-y-2 pt-6 ${index !== 0 ? "border-t border-[#CAA24A99]/60" : "pt-0"}`}
                  >
                    <span className="text-[#8FA89F] text-[10px] font-bold tracking-[0.15em] uppercase block">
                      {item.category}
                    </span>
                    <h3 className="text-white text-2xl font-semibold tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[#8FA89F] text-sm font-normal leading-normal max-w-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SUB-BAR: Content Validation Row */}
        <div className="w-full bg-[#EAF2F0] border-t border-white/5 py-5 px-6 md:px-16">
          <div className="flex flex-wrap justify-start md:justify-center items-center gap-x-10 gap-y-3">
            {bannerItems.map((text, idx) => (
              <div key={idx} className="flex items-center space-x-2.5">
                <div className="bg-[#0F2F26] rounded-full p-1 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white stroke-[3.5]" />
                </div>
                <span className="text-[#2B473E] text-xs md:text-sm font-semibold tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
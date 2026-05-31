import { ArrowRight } from "lucide-react";

// Types for the pathway cards
interface PathwayCardProps {
  number: string;
  title: string;
  description: string;
  linkText?: string;
}

const pathwayData: PathwayCardProps[] = [
  {
    number: "01",
    title: "Learn",
    description: "Build practical knowledge through education in healthcare quality, patient safety, leadership, and system improvement.",
  },
  {
    number: "02",
    title: "Get Certified",
    description: "Earn professional credentials that validate capability in modern healthcare quality, compliance, and responsible innovation.",
  },
  {
    number: "03",
    title: "Maintain Competence",
    description: "Sustain professional credibility through continuing education, renewal cycles, and ongoing development.",
  },
  {
    number: "04",
    title: "Lead Quality Systems",
    description: "Support stronger organizations and safer systems through leadership, advisory engagement, accreditation readiness, quality oversight, and professional membership.",
    linkText: "Become a Member",
  },
];

export default function ProfessionalPathway() {
  return (
    <div className="w-full bg-[#f8faf9] px-6 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with split horizontal lines */}
        <div className="flex items-center justify-center mb-10 w-full">
          <div className="h-px bg-[#d1dddb] grow max-w-xs md:max-w-md"></div>
          <span className="text-[#5b8276] text-xs font-semibold tracking-[0.25em] mx-4 whitespace-nowrap uppercase">
            The GIHQS Professional Pathway
          </span>
          <div className="h-px bg-[#d1dddb] grow max-w-xs md:max-w-md"></div>
        </div>

        {/* Main Grid Container - sharp corners (no rounded classes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#d1dddb] bg-white overflow-hidden divide-y divide-[#d1dddb] md:divide-y-0 md:divide-x">
          {pathwayData.map((item) => (
            <div
              key={item.number}
              className="flex flex-col justify-between p-8 min-h-[420px] bg-[#fdfefe] transition-colors duration-200 hover:bg-[#f4f7f6]"
            >
              <div>
                {/* Large Subtle Numeric Identifier */}
                <div className="text-5xl font-light tracking-tight mb-6 opacity-80" style={{ color: "var(--primary-300, #8AA89C)" }}>
                  {item.number}
                </div>

                {/* Primary Card Heading */}
                <h3 className="text-2xl font-normal font-serif mb-4 leading-snug" style={{ color: "var(--primary-900, #0F2F26)" }}>
                  {item.title}
                </h3>

                {/* Context / Informational Text */}
                <p className="text-sm font-normal leading-relaxed tracking-normal" style={{ color: "var(--primary-700, #3A5A50)" }}>
                  {item.description}
                </p>
              </div>

              {/* Action Link / Only rendered if present on the item object (Card 4) */}
              <div className="mt-8 pt-4 min-h-8">
                {item.linkText && (
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-semibold hover:text-[#3a6356] transition-colors duration-150 group"
                    style={{ color: "var(--primary-800, #1A3C32)" }}
                  >
                    <span className="mr-2">{item.linkText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-150" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Summary Narrative */}
        <div className="mt-6 text-left">
          <p className="text-xs md:text-sm font-semibold text-[#006045] tracking-wide leading-relaxed">
            An integrated pathway from professional learning to certification, continuing education, and leadership in high-reliability healthcare systems.
          </p>
        </div>

      </div>
    </div>
  );
}
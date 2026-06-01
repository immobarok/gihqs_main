import React from "react";
import { ArrowRight, Cpu, ShieldCheck, FileText } from "lucide-react";

// Types for the certification card items
interface CertificationCard {
  acronym: string;
  fullName: string;
  focusIcon: React.ReactNode;
  focusTitle: string;
  tagline: string;
  description: string;
  forText: string;
  badges: string[];
  linkText: string;
}

const certificationsData: CertificationCard[] = [
  {
    acronym: "AIHQSP",
    fullName: "AI Healthcare Quality & Safety Professional",
    focusIcon: <Cpu className="w-3.5 h-3.5 text-[#5b8276]" />,
    focusTitle: "AI & QUALITY FOCUS",
    tagline: "AI governance for safer, smarter healthcare",
    description: "Built for professionals working at the intersection of healthcare quality, digital transformation, and responsible AI adoption. Focus: Human-AI collaboration, explainability, oversight, and digital patient safety.",
    forText: "Quality leaders, informatics teams, patient safety professionals, and digital health specialists.",
    badges: ["AI in Healthcare", "Patient Safety", "Quality Systems"],
    linkText: "Explore AIHQSP",
  },
  {
    acronym: "CHSCP",
    fullName: "Certified Healthcare Standards & Compliance Professional",
    focusIcon: <ShieldCheck className="w-3.5 h-3.5 text-[#5b8276]" />,
    focusTitle: "STANDARDS & COMPLIANCE",
    tagline: "Standards, compliance, and accreditation readiness",
    description: "Designed for professionals responsible for healthcare standards, regulatory compliance, accreditation readiness, clinical governance, quality oversight, and the structured systems that support organizational excellence and accountability.",
    forText: "Compliance leaders, accreditation teams, administrators, and quality oversight professionals.",
    badges: ["Compliance", "Accreditation", "Governance"],
    linkText: "Explore CHSCP",
  },
  {
    acronym: "CCDIP",
    fullName: "Certified Clinical Documentation Improvement Professional",
    focusIcon: <FileText className="w-3.5 h-3.5 text-[#5b8276]" />,
    focusTitle: "CLINICAL DOCUMENTATION",
    tagline: "Clinical documentation that supports quality and clarity",
    description: "A focused pathway for professionals improving documentation integrity, coding alignment, and the quality of the medical record. Focus: Documentation improvement, record completeness, clarity, and integrity.",
    forText: "CDI specialists, HIM professionals, quality teams, and clinical documentation leaders.",
    badges: ["Clinical Documentation", "Record Integrity", "HIM"],
    linkText: "Explore CCDIP",
  },
];

export default function FlagshipCertifications() {
  return (
    <div className="relative w-full bg-[#f8faf9] px-0 py-16 font-sans overflow-hidden">
        {/* Section Header with thin horizontal lines */}
        <div className="relative z-10 flex items-center justify-center mb-14 w-full">
          <div className="h-px bg-[#d1dddb] grow max-w-xs md:max-w-md"></div>
          <span className="text-[#5b8276] text-xs font-semibold tracking-[0.25em] mx-4 whitespace-nowrap uppercase">
            Flagship Certifications
          </span>
          <div className="h-px bg-[#d1dddb] grow max-w-xs md:max-w-md"></div>
        </div>

        {/* Deep Green Outer Container Section */}
        <div className="bg-[#0F2F26] rounded-[24px] p-4 md:p-12 lg:p-16 relative z-10 overflow-hidden shadow-xl">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 blur-3xl opacity-85"
            style={{
              background: `radial-gradient(140% 140% at 72% 50%, rgba(212, 170, 58, 0.22) 0%, rgba(212, 170, 58, 0.12) 24%, rgba(212, 170, 58, 0.06) 48%, rgba(15, 47, 38, 0) 80%)`,
            }}
          />
          
          {/* Top Info Header Grid Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 relative z-10">
            <div className="lg:col-span-6 space-y-2">
              <h2 className="text-white text-3xl md:text-4xl font-normal tracking-tight font-serif">
                Recognized Pathways For
              </h2>
              <h2 className="text-[#D4AA3A] text-3xl md:text-4xl font-normal tracking-tight font-serif italic">
                Modern Healthcare Headers
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-center">
              <p className="text-[#B8C5C0] text-sm md:text-base leading-relaxed max-w-xl lg:ml-auto">
                GIHQS certifications recognize professionals who demonstrate advanced knowledge and leadership in healthcare quality, patient safety, standards, compliance, clinical documentation, and the responsible use of AI in healthcare systems.
              </p>
            </div>
          </div>

          {/* Three-Column Certificate Dynamic Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {certificationsData.map((cert) => (
              <div 
                key={cert.acronym} 
                className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-md border border-gray-500"
              >
                {/* Upper Colored Gradient Branding Block */}
                <div 
                  className="p-8 pb-6 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(115deg, #0C2A1F 0%, #0F3828 40%, #1A5C4A 100%)"
                  }}
                >
                  {/* Subtle lighting overlay glow */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 pointer-events-none" 
                    style={{
                      borderRadius: "55px",
                      background: "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 70%)"
                    }}
                  />
                  
                  <h3 className="text-3xl font-semibold tracking-wide text-[#E2BA5A] mb-1 font-sans">
                    {cert.acronym}
                  </h3>
                  <p className="text-[#89A59C] text-xs font-medium leading-normal max-w-[90%]">
                    {cert.fullName}
                  </p>
                  
                  {/* Bottom divider line inside heading section */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AA3A]" />
                </div>

                {/* Lower White Description Content Block */}
                <div className="p-6 md:p-8 grow flex flex-col justify-between bg-white space-y-6">
                  
                  <div className="space-y-4">
                    {/* Functional Context Mini Header Label */}
                    <div className="flex items-center space-x-2">
                      {cert.focusIcon}
                      <span className="text-[#5b8276] text-[10px] font-bold tracking-[0.15em] uppercase">
                        {cert.focusTitle}
                      </span>
                    </div>

                    {/* Tagline sentence */}
                    <h4 className="text-[#1a2d27] font-semibold text-base leading-snug">
                      {cert.tagline}
                    </h4>

                    {/* Paragraph description */}
                    <p className="text-[#3A5A50] text-xs md:text-sm leading-relaxed font-normal">
                      {cert.description}
                    </p>

                    {/* TARGET/FOR Grey Context Callout Container */}
                    <div className="bg-[#f4f7f6] rounded-lg p-4 border border-[#e3eae8]">
                      <span className="text-[#728d83] text-[9px] font-bold tracking-wider block mb-1 uppercase">
                        FOR
                      </span>
                      <p className="text-[#234238] text-xs font-normal leading-relaxed">
                        {cert.forText}
                      </p>
                    </div>
                  </div>

                  {/* Badges Container and Navigation Trigger */}
                  <div className="space-y-6 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.badges.map((badge, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 bg-[#eaf2f0] text-[#3a5a4f] text-[10px] font-medium rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Explore Link Anchor */}
                    <div className="border-t border-[#e3eae8] pt-4">
                      <a 
                        href="#" 
                        className="inline-flex items-center text-xs md:text-sm font-bold text-[#1A5C4A] hover:text-[#316452] transition-colors duration-150 group"
                      >
                        <span className="mr-2">{cert.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-150" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

  );
}
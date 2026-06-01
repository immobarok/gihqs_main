import React from "react";
import { ArrowRight } from "lucide-react";

// Types for our service cards data
interface ServiceCardProps {
  number: string;
  audience: string;
  title: string;
  description: string;
  linkText: string;
}

const servicesData: ServiceCardProps[] = [
  {
    number: "01",
    audience: "FOR PROFESSIONALS",
    title: "Certification",
    description: "Earn professional credentials in healthcare quality, patient safety, standards, compliance, and responsible AI in healthcare.",
    linkText: "Explore Certifications",
  },
  {
    number: "02",
    audience: "FOR LEARNERS",
    title: "Professional Learning",
    description: "Access courses, toolkits, and structured learning designed for real healthcare system improvement and safer operational performance.",
    linkText: "View Professional Catalogue",
  },
  {
    number: "03",
    audience: "FOR PROGRAMS & PROVIDERS",
    title: "Accreditation",
    description: "Apply for accreditation for healthcare education programs and training providers through a structured review and recognition pathway.",
    linkText: "Start Accreditation",
  },
  {
    number: "04",
    audience: "FOR ORGANIZATIONS",
    title: "Advisory Services",
    description: "Engage GIHQS advisory services to support healthcare quality, patient safety, accreditation readiness, and system-level performance improvement.",
    linkText: "Explore Advisory Services",
  },
];

export default function ServicesAndPathways() {
  return (
    <div className="w-full bg-[#f8faf9] py-16 font-sans">
      <div className="container mx-auto">
        
        {/* Section Header with split horizontal lines */}
        <div className="flex items-center justify-center mb-10 w-full">
          <div className="h-[1px] bg-[#d1dddb] grow max-w-xs md:max-w-md"></div>
          <span className="text-[#5b8276] text-xs font-semibold tracking-[0.25em] mx-4 whitespace-nowrap uppercase">
            Services & Pathways
          </span>
          <div className="h-[1px] bg-[#d1dddb] grow max-w-xs md:max-w-md"></div>
        </div>

        {/* Main Grid Container - sharp corners (no rounded classes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#d1dddb] bg-white overflow-hidden divide-y divide-[#d1dddb] md:divide-y-0 md:divide-x">
          {servicesData.map((service, index) => (
            <div
              key={service.number}
              className="flex flex-col justify-between p-8 min-h-[420px] bg-[#fdfefe] transition-colors duration-200 hover:bg-[#f4f7f6]"
            >
              <div>
                {/* Large Subtle Numeric Identifier */}
                <div className="text-5xl font-light text-[#8ba39c] tracking-tight mb-6 opacity-80">
                  {service.number}
                </div>

                {/* Targeted Audience Subtitle */}
                <div className="text-[10px] font-bold text-[#2D7D6A] tracking-[0.15em] uppercase mb-3">
                  {service.audience}
                </div>

                {/* Primary Card Heading */}
                <h3 className="text-2xl font-normal text-[#000000] font-serif mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Context / Informational Text */}
                <p className="text-sm text-[#3A5A50] font-normal leading-relaxed tracking-normal">
                  {service.description}
                </p>
              </div>

              {/* Action Link / Anchor Button */}
              <div className="mt-8 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-[#1A5C4A] hover:text-[#3a6356] transition-colors duration-150 group"
                >
                  <span className="mr-2">{service.linkText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-150" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
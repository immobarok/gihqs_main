import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const options = [
  "Individual professional",
  "Training provider, university, or institution",
  "Organisation seeking advisory or capability-building support",
];

const tags = [
  "Professional Certifications",
  "Learning Catalogue",
  "Institutional Accreditation",
  "Advisory Services",
];

export default function Hero() {
  return (
    <div
      className="relative h-150 container mx-auto rounded-3xl flex items-center justify-center px-12 md:p-20 my-4 md:my-10 overflow-hidden bg-[#0F2F26]"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 blur-3xl opacity-85"
        style={{
          background: `radial-gradient(140% 140% at 72% 50%, rgba(212, 170, 58, 0.22) 0%, rgba(212, 170, 58, 0.12) 24%, rgba(212, 170, 58, 0.06) 48%, rgba(15, 47, 38, 0) 80%)`,
        }}
      />
        
        {/* LEFT COLUMN */}
        <div className="relative z-10 space-y-8">
          {/* Top Badge */}
          <Badge 
            variant="outline" 
            className="rounded-full border-[#D4AA3A]/60 text-[#D4AA3A] bg-transparent px-4 py-1.5 text-xs font-semibold tracking-wider uppercase"
          >
            GIHQS Professional Pathways
          </Badge>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Begin Your Pathway to
            </h1>
            <h1 className="text-4xl md:text-5xl font-serif italic text-[#D4AA3A] leading-tight">
              High-Reliability Healthcare Leadership
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#B8C5C0] text-base md:text-lg leading-relaxed max-w-lg">
            Answer three short questions to navigate to the most relevant GIHQS 
            certification, professional development catalogue, accreditation 
            pathway, or advisory service.
          </p>

          {/* Step Indicator */}
          <div className="space-y-2">
            <div className="flex gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-1.5 rounded-full transition-all ${
                    step === 1 ? "w-8 bg-[#D4AA3A]" : "w-8 bg-[#1A3C32]"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-[#8FA89F] font-medium tracking-wide">
              Step 1 of 3
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-[#1A3C32] text-[#8FA89F] text-xs md:text-sm font-medium hover:border-[#D4AA3A]/40 hover:text-[#D4AA3A] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Card 
          className="relative z-10 border-0 shadow-2xl overflow-hidden max-w-xl bg-[#F4F8F7]!"
          style={{
            borderRadius: "24px",
            background: "rgba(9, 30, 24, 0.92)",
          }}
        >
          <CardContent className="p-8 md:p-10 space-y-6 relative z-10">
            {/* Card Header */}
            <div className="space-y-3">
              <p className="text-primary text-xs font-bold tracking-[0.15em] uppercase">
                Begin Your Pathway
              </p>
              <h2 className="text-2xl md:text-3xl text-primary font-semibold leading-snug">
                Which best reflects your role or organisation?
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {options.map((option, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="w-full justify-between h-auto py-4 px-5 rounded-xl border-[#1A3C32] bg-white text-primary transition-all group text-left font-normal text-sm md:text-base"
                >
                  <span>{option}</span>
                  <ChevronRight className="h-4 w-4 text-[#4A6B5F] group-hover:text-[#D4AA3A] transition-colors shrink-0 ml-4" />
                </Button>
              ))}
            </div>
          </CardContent>

          {/* Subtle inner glow overlay for depth */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 60%)"
            }}
          />
        </Card>

      </div>
  );
}
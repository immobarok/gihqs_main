import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const tags = [
  "Professional Certifications",
  "Learning Catalogue",
  "Institutional Accreditation",
  "Advisory Services",
];

const carouselSlides = [
  {
    title: "Which best reflects your role or organisation?",
    options: [
      "Individual professional",
      "Training provider, university, or institution",
      "Organisation seeking advisory or capability-building support",
    ],
  },
  {
    title: "What are you primarily looking for?",
    options: [
      "Accreditation",
      "Learning & Development offerings",
    ],
  },
  {
    title: "How would you like to proceed?",
    options: [
      "View accreditation overview",
      "Go directly to apply for accreditation",
    ],
  },
  {
    isResult: true,
    label: "RECOMMENDED ROUTE",
    title: "Apply for GIHQS Accreditation",
    description:
      "Proceed directly to the GIHQS accreditation application route for recognised education, training, or certification offerings.",
    tags: ["Apply", "Accreditation", "Institutional"],
    info:
      "This route is appropriate when your need is clear and you are ready to move from exploration to formal application.",
    primaryAction: "Apply for Accreditation",
    secondaryAction: "View Accreditation",
  },
];

export default function Hero() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = carouselSlides.length;
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false }),
    []
  );

  return (
    <div
      className="relative h-auto md:h-150 py-12 md:py-0 container mx-auto rounded-3xl flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 md:p-20 my-4 md:my-10 overflow-hidden bg-[#0F2F26]"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 blur-3xl opacity-85"
        style={{
          background: `radial-gradient(140% 140% at 72% 50%, rgba(212, 170, 58, 0.22) 0%, rgba(212, 170, 58, 0.12) 24%, rgba(212, 170, 58, 0.06) 48%, rgba(15, 47, 38, 0) 80%)`,
        }}
      />
        
        {/* LEFT COLUMN */}
        <div className="relative z-10 space-y-8 w-full md:w-1/2">
          {/* Top Badge */}
          <div 
            className="rounded-full border border-[rgba(240,208,112,0.72)] bg-[rgba(240,208,112,0.10)] inline-flex items-center px-3.5 py-1.75 text-[#D4AA3A] text-xs font-semibold tracking-wider uppercase leading-none"
          >
            GIHQS Professional Pathways
          </div>

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
              {Array.from({ length: totalSteps }, (_, index) => {
                const step = index + 1;
                return (
                  <div
                    key={step}
                    className={`h-1.5 rounded-full transition-all ${
                      step === currentStep
                        ? "w-8 bg-[#D4AA3A]"
                        : "w-8 bg-[#1A3C32]"
                    }`}
                  />
                );
              })}
            </div>
            <p className="text-xs text-[#8FA89F] font-medium tracking-wide">
              Step {currentStep} of {totalSteps}
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

        <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay]}
            setApi={(api) => {
              if (!api) return;
              const onSelect = () => setCurrentStep(api.selectedScrollSnap() + 1);
              onSelect();
              api.on("select", onSelect);
              api.on("reInit", onSelect);
            }}
            className="w-full max-w-xl"
          >
            <CarouselContent className="items-center">
              {carouselSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <Card
                    className="relative border-0 shadow-2xl overflow-hidden w-full bg-[#F4F8F7]!"
                    style={{
                      borderRadius: "24px",
                      background: slide.isResult ? "#F8FBFA" : "rgba(9, 30, 24, 0.92)",
                    }}
                  >
                    <CardContent className="p-6 md:p-8 space-y-5 relative z-10">
                      {slide.isResult ? (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <p className="text-[#6B7F78] text-xs font-bold tracking-[0.15em] uppercase">
                              {slide.label}
                            </p>
                            <h2 className="text-2xl md:text-3xl text-[#0F2F26] font-serif italic leading-tight">
                              {slide.title}
                            </h2>
                            <p className="text-[#4A5F57] text-sm leading-relaxed">
                              {slide.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {slide.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-[rgba(212,170,58,0.48)] text-[#B08A24] text-[11px] font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="p-3 rounded-xl border border-[#E5EDE9] bg-white/50 text-[#4A5F57] text-xs md:text-sm leading-relaxed">
                            {slide.info}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 pt-1">
                            <Button className="bg-[#0F4A3B] hover:bg-[#0A3328] text-white rounded-full px-6 py-4 h-auto text-sm font-semibold flex-1">
                              {slide.primaryAction}
                            </Button>
                            <Button
                              variant="outline"
                              className="border-[#E5EDE9] text-[#0F4A3B] hover:bg-[#F4F8F7] rounded-full px-6 py-4 h-auto text-sm font-semibold flex-1"
                            >
                              {slide.secondaryAction}
                            </Button>
                          </div>

                          <button className="text-[#0D3B31] text-xs font-bold hover:underline block">
                            Start Over
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="space-y-3">
                            <p className="text-primary text-xs font-bold tracking-[0.15em] uppercase">
                              Begin Your Pathway
                            </p>
                            <h2 className="text-2xl md:text-3xl text-primary font-semibold leading-snug">
                              {slide.title}
                            </h2>
                          </div>

                          <div className="space-y-3 pt-2">
                            {slide.options?.map((option) => (
                              <Button
                                key={option}
                                variant="outline"
                                className="w-full justify-between h-auto py-4 px-5 rounded-xl border-[#1A3C32] bg-white text-primary transition-all group text-left font-normal text-sm md:text-base"
                              >
                                <span>{option}</span>
                                <ChevronRight className="h-4 w-4 text-[#4A6B5F] group-hover:text-[#D4AA3A] transition-colors shrink-0 ml-4" />
                              </Button>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>

                    {!slide.isResult && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 60%)",
                        }}
                      />
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
  );
}
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { ROUTES } from "@/routes/routes.constants";

const tags = [
  "Professional Certifications",
  "Learning Catalogue",
  "Institutional Accreditation",
  "Advisory Services",
];

const audienceOptions = [
  "Individual professional",
  "Training provider, university, or institution",
  "Organisation seeking advisory or capability-building support",
];

const interestOptions = [
  "Accreditation",
  "Learning & Development offerings",
];

const proceedOptions = [
  "View accreditation overview",
  "Go directly to apply for accreditation",
];

const pathwayOptions = [
  {
    label: "Apply for Accreditation",
    href: ROUTES.ACCREDITATION,
  },
  {
    label: "View Accreditation",
    href: ROUTES.ACCREDITATION,
  },
];

export default function Hero() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [selectedAudience, setSelectedAudience] = React.useState("");
  const [selectedInterest, setSelectedInterest] = React.useState("");
  const [selectedProceed, setSelectedProceed] = React.useState("");
  const totalSteps = 4;

  const restartPathway = () => {
    setCurrentStep(1);
    setSelectedAudience("");
    setSelectedInterest("");
    setSelectedProceed("");
  };

  return (
    <div className="container relative mx-auto my-4 flex h-auto flex-col items-center justify-center gap-10 overflow-hidden rounded-3xl bg-[#0F2F26] px-6 py-12 md:my-10 md:h-150 md:flex-row md:p-20 md:px-12">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-85 blur-3xl"
        style={{
          background:
            "radial-gradient(140% 140% at 72% 50%, rgba(212, 170, 58, 0.22) 0%, rgba(212, 170, 58, 0.12) 24%, rgba(212, 170, 58, 0.06) 48%, rgba(15, 47, 38, 0) 80%)",
        }}
      />

      <div className="relative z-10 w-full space-y-8 md:w-1/2">
        <div className="inline-flex items-center rounded-full border border-[rgba(240,208,112,0.72)] bg-[rgba(240,208,112,0.10)] px-3.5 py-1.75 text-xs font-semibold uppercase leading-none tracking-wider text-[#D4AA3A]">
          GIHQS Professional Pathways
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-medium leading-tight text-white md:text-5xl">
            Begin Your Pathway to
          </h1>
          <h1 className="font-serif text-4xl italic leading-tight text-[#D4AA3A] md:text-5xl">
            High-Reliability Healthcare Leadership
          </h1>
        </div>

        <p className="max-w-lg text-base leading-relaxed text-[#B8C5C0] md:text-lg">
          Answer three short questions to navigate to the most relevant GIHQS
          certification, professional development catalogue, accreditation
          pathway, or advisory service.
        </p>

        <div className="space-y-2">
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }, (_, index) => index + 1).map((step) => (
              <div
                key={step}
                className={`h-1.5 w-8 rounded-full transition-all ${
                  step === currentStep ? "bg-[#D4AA3A]" : "bg-[#1A3C32]"
                }`}
              />
            ))}
          </div>
          <p className="text-xs font-medium tracking-wide text-[#8FA89F]">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="cursor-default rounded-full border border-[#1A3C32] px-4 py-2 text-xs font-medium text-[#8FA89F] transition-colors hover:border-[#D4AA3A]/40 hover:text-[#D4AA3A] md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex w-full items-center justify-center md:w-1/2">
        <div className="w-full max-w-xl overflow-hidden rounded-[24px] bg-[#F4F8F7] p-6 shadow-2xl md:p-8">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6B7F78]">
              Begin Your Pathway
            </p>
            <h2 className="text-2xl font-semibold leading-snug text-[#0F2F26] md:text-3xl">
              {currentStep === 1 &&
                "Which best reflects your role or organisation?"}
              {currentStep === 2 && "What are you primarily looking for?"}
              {currentStep === 3 && "How would you like to proceed?"}
              {currentStep === 4 && "Apply for GIHQS Accreditation"}
            </h2>
            {currentStep > 1 && currentStep < 4 && (
              <div className="space-y-1 text-sm leading-relaxed text-[#4A5F57]">
                <p>
                  Role:{" "}
                  <span className="font-semibold text-[#0F2F26]">
                    {selectedAudience}
                  </span>
                </p>
                {selectedInterest && (
                  <p>
                    Interest:{" "}
                    <span className="font-semibold text-[#0F2F26]">
                      {selectedInterest}
                    </span>
                  </p>
                )}
              </div>
            )}
            {currentStep === 4 && (
              <div className="space-y-2 text-sm leading-relaxed text-[#4A5F57]">
                <p>
                  Proceed directly to the GIHQS accreditation application route
                  for recognised education, training, or certification
                  offerings.
                </p>
                <p>
                  Selected route:{" "}
                  <span className="font-semibold text-[#0F2F26]">
                    {selectedProceed}
                  </span>
                </p>
              </div>
            )}
          </div>

          <div className="mt-7 space-y-3">
            {currentStep === 1 &&
              audienceOptions.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="group h-auto w-full justify-between rounded-xl border-[#DDE8E4] bg-white px-5 py-4 text-left text-sm font-semibold text-[#0F2F26] transition-all hover:border-[#D4AA3A]/50 hover:bg-white md:text-base"
                  onClick={() => {
                    setSelectedAudience(option);
                    setCurrentStep(2);
                  }}
                  type="button"
                >
                  <span>{option}</span>
                  <ChevronRight className="ml-4 h-4 w-4 shrink-0 text-[#4A6B5F] transition-colors group-hover:text-[#D4AA3A]" />
                </Button>
              ))}

            {currentStep === 2 &&
              interestOptions.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="group h-auto w-full justify-between rounded-xl border-[#DDE8E4] bg-white px-5 py-4 text-left text-sm font-semibold text-[#0F2F26] transition-all hover:border-[#D4AA3A]/50 hover:bg-white md:text-base"
                  onClick={() => {
                    setSelectedInterest(option);
                    setCurrentStep(3);
                  }}
                  type="button"
                >
                  <span>{option}</span>
                  <ChevronRight className="ml-4 h-4 w-4 shrink-0 text-[#4A6B5F] transition-colors group-hover:text-[#D4AA3A]" />
                </Button>
              ))}

            {currentStep === 3 &&
              proceedOptions.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="group h-auto w-full justify-between rounded-xl border-[#DDE8E4] bg-white px-5 py-4 text-left text-sm font-semibold text-[#0F2F26] transition-all hover:border-[#D4AA3A]/50 hover:bg-white md:text-base"
                  onClick={() => {
                    setSelectedProceed(option);
                    setCurrentStep(4);
                  }}
                  type="button"
                >
                  <span>{option}</span>
                  <ChevronRight className="ml-4 h-4 w-4 shrink-0 text-[#4A6B5F] transition-colors group-hover:text-[#D4AA3A]" />
                </Button>
              ))}

            {currentStep === 4 && (
              <>
                <div className="flex flex-wrap gap-2">
                  {["Apply", "Accreditation", "Institutional"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(212,170,58,0.48)] px-3 py-1 text-[11px] font-medium text-[#B08A24]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="rounded-xl border border-[#E5EDE9] bg-white/50 p-3 text-xs leading-relaxed text-[#4A5F57] md:text-sm">
                  This route is appropriate when your need is clear and you are
                  ready to move from exploration to formal application.
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                  {pathwayOptions.map((option) => (
                    <Button
                      asChild
                      key={option.label}
                      variant={
                        option.label === "Apply for Accreditation"
                          ? "default"
                          : "outline"
                      }
                      className={
                        option.label === "Apply for Accreditation"
                          ? "h-auto flex-1 rounded-full bg-[#0F4A3B] px-6 py-4 text-sm font-semibold text-white hover:bg-[#0A3328]"
                          : "h-auto flex-1 rounded-full border-[#E5EDE9] px-6 py-4 text-sm font-semibold text-[#0F4A3B] hover:bg-[#F4F8F7]"
                      }
                    >
                      <Link to={option.href}>
                        <span>{option.label}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </>
            )}
          </div>

          {currentStep > 1 && (
            <button
              className="mt-6 text-xs font-bold text-[#0D3B31] hover:underline"
              onClick={restartPathway}
              type="button"
            >
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

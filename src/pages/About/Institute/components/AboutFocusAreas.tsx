import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

const focusAreas = [
  {
    title: "Healthcare Quality & Performance Improvement",
    description:
      "Focuses on equipping professionals with the knowledge and practical methods needed to improve care processes, reduce unwanted variation, strengthen outcomes, and build healthcare systems that continuously learn and improve.",
  },
  {
    title: "Patient Safety Science & Systems Thinking",
    description:
      "Emphasizes the prevention of avoidable harm through safety culture, human factors awareness, systems thinking, root cause analysis, and the design of safer healthcare environments for patients and care teams.",
  },
  {
    title: "Clinical Governance & Accreditation Leadership",
    description:
      "Supports learning in governance, standards interpretation, compliance readiness, accreditation preparation, and organizational accountability to promote trustworthy, high-performing healthcare systems.",
  },
  {
    title: "Advisory Services for Healthcare Transformation",
    description:
      "Provides strategic advisory support to healthcare organizations seeking to strengthen quality, patient safety, healthcare standards, accreditation readiness, operational performance, and leadership capability in complex healthcare environments.",
  },
  {
    title: "Responsible Artificial Intelligence (AI) in Healthcare",
    description:
      "Prepares professionals to guide the safe, ethical, and effective adoption of Artificial Intelligence (AI) in healthcare, with attention to governance, bias, transparency, human oversight, workflow integration, and patient safety.",
  },
  {
    title: "High-Reliability Healthcare Systems & Leadership",
    description:
      "Promotes the principles and leadership practices required to build resilient healthcare organizations that anticipate risk, learn from failure, respond effectively, and advance toward zero preventable harm.",
  },
];

export default function AboutFocusAreas() {
  return (
    <section className="container mx-auto px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <Accordion
        type="multiple"
        className="gap-5"
      >
        {focusAreas.map((area) => (
          <AccordionItem
            key={area.title}
            value={area.title}
            className="rounded-lg border border-[#D9E5E1] bg-white px-6 shadow-[0_8px_24px_rgba(15,47,38,0.04)]"
          >
            <AccordionTrigger className="min-h-16 items-center py-5 text-base font-bold text-[#10372D] hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
              <span>{area.title}</span>
              <span className="ml-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F4A3B] text-white shadow-[0_8px_18px_rgba(15,74,59,0.24)]">
                <Plus className="h-4 w-4 stroke-[3] group-aria-expanded/accordion-trigger:hidden" />
                <Minus className="hidden h-4 w-4 stroke-[3] group-aria-expanded/accordion-trigger:block" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-relaxed text-[#263F38]">
              {area.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

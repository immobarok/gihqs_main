import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router";

const standards = [
  {
    title: "10 Standards Domains",
    description: "Consistent, structured evaluation",
  },
  {
    title: "Evidence-Based Review",
    description: "Documented proof and validation",
  },
  {
    title: "Independent Expert Panel",
    description: "Objective assessment process",
  },
  {
    title: "Decision + Final Report",
    description: "Clear outcomes and recommendations",
  },
];

const tags = [
  "Transparent Standards",
  "Credential Integrity",
  "Patient Safety Alignment",
  "Global Recognition Focus",
];

export default function AccreditationHero() {
  return (
    <section className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div className="relative my-2 flex min-h-[36rem] flex-col gap-10 overflow-hidden rounded-3xl bg-[#0F2F26] px-6 py-12 md:my-6 md:min-h-[35rem] md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-2/3 blur-3xl opacity-85"
          style={{
            background:
              "radial-gradient(140% 140% at 72% 50%, rgba(212, 170, 58, 0.22) 0%, rgba(212, 170, 58, 0.12) 24%, rgba(212, 170, 58, 0.06) 48%, rgba(15, 47, 38, 0) 80%)",
          }}
        />

        <div className="relative z-10 w-full space-y-7 md:max-w-2xl">
          <div className="inline-flex rounded-full border border-[rgba(240,208,112,0.72)] bg-[rgba(240,208,112,0.10)] px-3.5 py-2 text-[0.68rem] font-semibold uppercase leading-none tracking-wider text-[#D4AA3A]">
            Accreditation
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-medium leading-tight text-white md:text-5xl">
              GIHQS{" "}
              <span className="font-serif italic text-[#D4AA3A]">
                Accreditation
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#B8C5C0] md:text-lg">
              Accrediting educational programs and professional certifications
              in healthcare quality and patient safety through transparent,
              evidence-based standards.
            </p>
          </div>

          <div className="max-w-2xl rounded-lg border border-white/10 bg-white/7 px-5 py-4 shadow-[inset_2px_0_0_#D4AA3A]">
            <p className="text-sm leading-relaxed text-[#B8C5C0]">
              Start with a short registration. After payment, you'll receive an{" "}
              <span className="text-[#D4AA3A]">Application ID</span> and the
              full submission package.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-[#F4C84E] px-7 text-sm font-bold text-[#102D25] hover:bg-[#EABF45]"
            >
              <Link to="/accreditation/apply">Apply for Accreditation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/25 bg-transparent px-7 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/accreditation/standard-manual">
                Download Standard Manual (PDF)
              </Link>
            </Button>
          </div>

          <div className="flex max-w-xl flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-[#9FB3AD]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="relative z-10 w-full rounded-xl border border-white/12 bg-white/10 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur md:max-w-md">
          <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#9FB3AD]">
            Key Facts
          </p>

          <div className="space-y-3">
            {standards.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-lg border border-white/8 bg-white/8 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AA3A] text-[#12352B]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-[#A9B8B3]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-[#9FB3AD]">
            Designed for programs and credentials in healthcare quality and
            patient safety.
          </p>
        </aside>
      </div>
    </section>
  );
}

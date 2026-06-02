import SectionTitle from "./SectionTitle";

const domains = [
  {
    number: "1",
    label: "Domain 1",
    title: "Governance, Independence & Ethical Integrity",
    description:
      "Establishes institutional structures, oversight practices, and ethical safeguards to support impartiality, accountability, and public trust in the program's integrity.",
  },
  {
    number: "2",
    label: "Domain 2",
    title: "Program Purpose, Scope & Population Alignment",
    description:
      "Reviews whether the program and certification fulfill a clearly defined public purpose, appropriate scope, and relevance to workforce or professional practice contexts.",
  },
  {
    number: "3",
    label: "Domain 3",
    title: "Curriculum Design & Competency Mapping",
    description:
      "Defines curriculum structure, learning pathways, sequencing, learning objectives, and coherence between content and intended outcomes.",
  },
  {
    number: "4",
    label: "Domain 4",
    title: "Faculty, Instructional Capability & Learning Support",
    description:
      "Reviews the qualifications, training, and ongoing capacity of instructors, support systems, and adequacy of learner resources.",
  },
  {
    number: "5",
    label: "Domain 5",
    title: "Assessment, Measurement & Credential Reliability",
    description:
      "Reviews whether assessment methods are valid, reliable, defensible, and fair, and whether credentials meaningfully reflect demonstrated competence.",
  },
  {
    number: "6",
    label: "Domain 6",
    title: "Quality Improvement, Outcomes & Impact",
    description:
      "Considers evidence of performance monitoring, quality improvement cycles, stakeholder feedback, learner outcomes, and employer relevance.",
  },
  {
    number: "7",
    label: "Domain 7",
    title: "Physical Safety & Human Factors Integration",
    description:
      "Evaluates how the program integrates personal safety principles, systems thinking, risk awareness, and factors that can reduce human error in workplace settings.",
  },
  {
    number: "8",
    label: "Domain 8",
    title: "Data Accessibility & Learner-Centered Design",
    description:
      "Reviews accessibility, fairness, usability, and accommodations to diverse learner needs, and innovation and learner participation.",
  },
  {
    number: "9",
    label: "Domain 9",
    title: "Digital Delivery, Security & Academic Integrity",
    description:
      "Examines digital platform technology, privacy safeguards, learner verification, secure authentication, and technical standards for remote participation.",
  },
  {
    number: "10",
    label: "Domain 10",
    title: "Transparency, Public Information & Credential Portability",
    description:
      "Considers transparency, public transparency around outcomes, credential representation, and portability or interoperability for employers and other institutions.",
  },
];

export default function AccreditationDomains() {
  return (
    <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <SectionTitle label="Standards Domains" />

        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="text-3xl font-medium leading-tight text-[#0F2F26] md:text-4xl">
            Accreditation{" "}
            <span className="font-serif italic text-[#D4AA3A]">
              Standards Domains
            </span>
          </h2>

          <p className="text-sm leading-relaxed text-[#4F6A61]">
            These expandable summaries introduce the structure of the framework
            while reserving full standards detail for the official manual.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {domains.map((domain) => (
            <article
              key={domain.number}
              className="rounded-xl border border-[#D8E5E1] bg-white p-6 shadow-[0_8px_24px_rgba(15,47,38,0.06)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#315F52] text-xs font-bold text-white">
                  {domain.number}
                </span>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#C39A31]">
                  {domain.label}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-snug text-[#152E29]">
                {domain.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4F6A61]">
                {domain.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

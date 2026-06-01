const processSteps = [
  {
    number: "01",
    title: "Register",
    subtitle: "Formal entry point into the process",
    description:
      "Build practical knowledge through education in healthcare quality, patient safety, leadership, and system improvement.",
  },
  {
    number: "02",
    title: "Pay & Receive ID",
    subtitle: "Activation and reference tracking",
    description:
      "After payment, the applicant receives an official GIHQS Accreditation Application ID, submission instructions, and the next procedural requirements.",
  },
  {
    number: "03",
    title: "Self-Assessment",
    subtitle: "Internal review against standards",
    description:
      "The applicant completes a structured self-assessment covering governance, curriculum, instruction, assessment, quality systems, and supporting evidence.",
  },
  {
    number: "04",
    title: "Upload Submission",
    subtitle: "Evidence package and documentation",
    description:
      "The full application and documentation package are submitted for review, including evidence aligned to the standards framework.",
  },
  {
    number: "05",
    title: "Expert Review",
    subtitle: "Independent evaluation",
    description:
      "Qualified reviewers assess the submission for completeness, quality, credibility, transparency, and standards alignment.",
  },
  {
    number: "06",
    title: "Decision",
    subtitle: "Outcome and feedback",
    description:
      "A final accreditation determination is issued and may include feedback, conditions, commendations, or recommendations for future improvement.",
  },
];

export default function AccreditationProcess() {
  return (
    <section className="container mx-auto px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className=" space-y-10">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-24 bg-[#C8DAD4]" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#4B9A84]">
              Process
            </p>
            <span className="h-px w-24 bg-[#C8DAD4]" />
          </div>

          <h2 className="text-3xl font-medium leading-tight text-[#0F2F26] md:text-4xl">
            GIHQS Accreditation{" "}
            <span className="font-serif italic text-[#D4AA3A]">Process</span>
          </h2>

          <p className="text-sm leading-relaxed text-[#4F6A61]">
            The process below gives applicants a clear, structured path from
            registration through final determination.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-[#BCD2CB] bg-[#F7FAF9] md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className={`min-h-64 p-6 md:p-7 ${
                index > 0 ? "border-t border-[#BCD2CB]" : ""
              } ${
                index % 2 !== 0 ? "md:border-l md:border-t-0" : ""
              } ${
                index >= 2 ? "md:border-t" : ""
              } ${
                index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"
              } ${
                index >= 3 ? "lg:border-t" : "lg:border-t-0"
              }`}
            >
              <p className="text-4xl font-light leading-none text-[#82AFA4]">
                {step.number}
              </p>
              <div className="mt-6 space-y-1">
                <h3 className="font-serif text-xl font-medium leading-tight text-[#0F2F26]">
                  {step.title}
                </h3>
                <p className="text-xs font-bold leading-relaxed text-[#254C41]">
                  {step.subtitle}
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#4F6A61]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

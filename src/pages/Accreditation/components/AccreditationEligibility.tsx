const eligibilityItems = [
  {
    title: "Universities & Academic Institutions",
    description:
      "Degree-linked programs, certificates, and academic training pathways.",
  },
  {
    title: "Training Providers & Healthcare Organizations",
    description:
      "Workforce programs, patient safety training, and quality improvement education.",
  },
  {
    title: "Certification & Professional Bodies",
    description:
      "Externally issued certifications with defined assessments and governance.",
  },
];

export default function AccreditationEligibility() {
  return (
    <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
      <div className=" space-y-10">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-24 bg-[#C8DAD4]" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#4B9A84]">
              Eligibility
            </p>
            <span className="h-px w-24 bg-[#C8DAD4]" />
          </div>

          <h2 className="text-3xl font-medium leading-tight text-[#0F2F26] md:text-4xl">
            Who Should{" "}
            <span className="font-serif italic text-[#D4AA3A]">Apply</span>
          </h2>

          <p className="text-sm leading-relaxed text-[#4F6A61]">
            Organizations delivering education or credentials in healthcare
            quality and patient safety.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-[#BCD2CB] bg-[#F7FAF9] md:grid-cols-3">
          {eligibilityItems.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-36 p-6 ${
                index > 0 ? "border-t border-[#BCD2CB] md:border-l md:border-t-0" : ""
              }`}
            >
              <h3 className="text-base font-bold leading-snug text-[#10372D]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4F6A61]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

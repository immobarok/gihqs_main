const insightCards = [
  {
    title: "High-level summaries only",
    description:
      "This page provides a framework overview. Full standards interpretation and scoring remain in the official manual.",
  },
  {
    title: "Designed for credibility",
    description:
      "The structure supports transparent review of programs and certifications in healthcare quality and patient safety.",
  },
  {
    title: "Built for modern delivery",
    description:
      "Digital integrity, learner support, accessibility, and public transparency are directly reflected in the framework.",
  },
];

export default function AccreditationInsights() {
  return (
    <section className="container mx-auto px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-24 bg-[#C8DAD4]" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#4B9A84]">
              Insights
            </p>
            <span className="h-px w-24 bg-[#C8DAD4]" />
          </div>

          <h2 className="text-3xl font-medium leading-tight text-[#0F2F26] md:text-4xl">
            GIHQS Accreditation{" "}
            <span className="font-serif italic text-[#D4AA3A]">Insights</span>
          </h2>

          <p className="text-sm leading-relaxed text-[#4F6A61]">
            A deeper explanation of what the accreditation framework is designed
            to achieve.
          </p>
        </div>

        <div className="rounded-3xl bg-[linear-gradient(180deg,rgba(199,164,77,0.14)_0%,rgba(24,71,58,0.14)_94.42%,rgba(232,215,165,0.14)_188.85%)] p-6 md:p-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-white/8 bg-[linear-gradient(123deg,#0C2A1F_0%,#0F3828_40%,#1A5C4A_100%)] p-7 text-white shadow-[0_16px_36px_rgba(15,47,38,0.14)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#D4AA3A]">
                Insight
              </p>
              <h3 className="mt-4 text-lg font-bold">
                What does GIHQS accreditation signal?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#D8E6E1]">
                It signals that a program or certification has been reviewed
                against a structured standards framework focused on quality,
                rigor, transparency, and patient safety relevance. It does not
                simply indicate participation. It indicates demonstrated
                alignment with defined expectations related to governance,
                curriculum, assessment, integrity, and public-facing credibility.
              </p>
            </article>

            <article className="rounded-lg border border-[#D4AA3A] bg-white p-7 shadow-[0_16px_36px_rgba(15,47,38,0.08)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#C39A31]">
                Insight
              </p>
              <h3 className="mt-4 text-lg font-bold text-[#102D25]">
                Why are standards domains important?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#4F6A61]">
                Domains organize review across governance, delivery, outcomes,
                safety, ethics, accessibility, and public accountability in a
                consistent structure. A domain-based structure helps ensure that
                accreditation review is transparent, comparable, and defensible
                rather than arbitrary, fragmented, or overly subjective.
                Structured review strengthens credibility.
              </p>
            </article>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {insightCards.map((card) => (
              <article
                key={card.title}
                className="rounded-md border border-[#D4AA3A] bg-[#F7FAF9] p-5"
              >
                <h4 className="text-sm font-bold text-[#102D25]">
                  {card.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#4F6A61]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

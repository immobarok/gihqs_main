const reviewResponsibilities = [
  "Review accreditation submissions against published standards.",
  "Evaluate evidence for completeness, credibility, and alignment.",
  "Support fair, transparent, and defensible accreditation decisions.",
  "Identify conditions, recommendations, or commendations where appropriate.",
];

export default function AccreditationReviewPanel() {
  return (
    <main className="bg-[#F7FAF9]">
      <section className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl px-6 py-14 md:px-16"
          style={{
            background:
              "radial-gradient(82.99% 75.78% at 82.22% 52.37%, rgba(212, 170, 58, 0.20) 0%, rgba(12, 42, 31, 0.20) 100%), linear-gradient(115deg, #0F2F26 0%, #133A2F 56%, #0B241D 100%)",
          }}
        >
          <div className="max-w-5xl">
            <div className="w-fit rounded-full border border-[#D4AA3A]/70 bg-[#D4AA3A]/10 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#D4AA3A]">
              GIHQS Governance
            </div>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-tight text-white md:text-5xl">
              Accreditation{" "}
              <span className="italic text-[#D4AA3A]">Review Panel</span>
            </h1>
            <p className="mt-6 max-w-5xl text-sm leading-relaxed text-[#D8E6E1]">
              The Accreditation Review Panel supports the integrity of GIHQS
              accreditation decisions by bringing independent, standards-based
              judgment to program evaluation, evidence review, and final
              recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-[#DDE8E4] bg-white p-7">
            <div className="w-fit rounded-full bg-[#FBF4E2] px-3 py-1.5 text-xs font-semibold uppercase text-[#C39A31]">
              Function
            </div>
            <h2 className="mt-5 text-3xl font-bold text-black">
              Role of the Panel
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4F6A61]">
              The panel reviews applications from organizations seeking GIHQS
              accreditation and evaluates whether submitted evidence demonstrates
              alignment with the Institute's accreditation standards.
            </p>
            <div className="mt-6 grid gap-3">
              {reviewResponsibilities.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-[#EEF6F3] px-5 py-4 text-sm font-semibold text-[#10372D]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#DDE8E4] bg-white p-7">
            <h2 className="text-2xl font-bold text-[#D4AA3A]">
              Independence & Impartiality
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4F6A61]">
              Reviewers are expected to maintain impartiality, protect
              confidentiality, and disclose conflicts of interest before
              participating in any evaluation activity.
            </p>
            <h2 className="mt-8 text-2xl font-bold text-[#D4AA3A]">
              Formation in Progress
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4F6A61]">
              The GIHQS Accreditation Review Panel is being established with
              qualified professionals experienced in quality, safety,
              accreditation, education, and evaluation.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

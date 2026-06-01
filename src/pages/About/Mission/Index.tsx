const values = [
  {
    title: "Mission",
    description:
      "To strengthen healthcare quality, patient safety, accreditation readiness, and responsible innovation through education, certification, standards, and advisory support.",
  },
  {
    title: "Vision",
    description:
      "A global healthcare environment where every organization can build safer, more reliable systems and every professional is equipped to improve care.",
  },
  {
    title: "Values",
    description:
      "Integrity, transparency, evidence-based practice, patient-centered improvement, responsible innovation, and continuous learning.",
  },
];

const commitments = [
  "Advance healthcare quality and patient safety capability.",
  "Support high-reliability healthcare systems and leadership.",
  "Promote ethical, transparent, and credible credentialing.",
  "Encourage responsible use of Artificial Intelligence in healthcare.",
];

export default function MissionVisionValues() {
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
          <div className="max-w-4xl">
            <div className="w-fit rounded-full border border-[#D4AA3A]/70 bg-[#D4AA3A]/10 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#D4AA3A]">
              GIHQS Foundation
            </div>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-tight text-white md:text-5xl">
              Mission, Vision &{" "}
              <span className="italic text-[#D4AA3A]">Values</span>
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#D8E6E1]">
              GIHQS exists to help healthcare professionals and organizations
              build safer, smarter, and more trustworthy systems of care through
              structured learning, standards, and responsible innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#DDE8E4] bg-white p-7 shadow-[0_12px_32px_rgba(15,47,38,0.06)]"
            >
              <h2 className="font-serif text-3xl font-medium text-[#0F2F26]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#4F6A61]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-[#DDE8E4] bg-white p-8">
          <h2 className="text-2xl font-bold text-[#0F2F26]">
            Strategic Commitments
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {commitments.map((commitment) => (
              <div
                key={commitment}
                className="rounded-xl bg-[#EEF6F3] px-5 py-4 text-sm font-semibold text-[#10372D]"
              >
                {commitment}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

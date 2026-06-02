const overviewCards = [
  {
    eyebrow: "Vision",
    title:
      "Healthcare systems that are consistently safe, high-reliability, and trusted by the patients and communities they serve.",
    description:
      "This vision reflects the future GIHQS seeks to help advance: healthcare systems that do not depend on luck, silence, or heroic recovery, but are designed for safety, trust, and reliability.",
  },
  {
    eyebrow: "Mission",
    title: "Advancing professionals. Strengthening systems.",
    description:
      "To advance healthcare quality and patient safety by developing professionals through certification, education, and accreditation programs that strengthen high-reliability healthcare systems and the responsible use of Artificial Intelligence (AI) in healthcare.",
  },
];

const coreValues = [
  {
    letter: "G",
    title: "Global Perspective",
    description:
      "Promoting shared learning, collaboration, and exchange across healthcare systems, disciplines, and professional communities to strengthen healthcare quality and patient safety.",
  },
  {
    letter: "I",
    title: "Integrity",
    description:
      "Upholding ethical, transparent, and fair practices in certification, education, accreditation, leadership, and professional conduct.",
  },
  {
    letter: "H",
    title: "Human-Centered Care",
    description:
      "Ensuring that patients, families, and healthcare professionals remain at the heart of safer systems, trusted care, and meaningful improvement.",
  },
  {
    letter: "Q",
    title: "Quality Excellence",
    description:
      "Advancing evidence-based improvement, professional excellence, and high-reliability healthcare practices that strengthen outcomes and reduce preventable harm.",
  },
  {
    letter: "S",
    title: "Safety Leadership",
    description:
      "Championing cultures of safety, accountability, learning, and responsible innovation that help organizations prevent harm and build more reliable healthcare systems.",
  },
];

export default function MissionVisionValues() {
  return (
    <main className="bg-[#F7FAF9] py-6 px-4 md:px-8  mx-auto container space-y-10">
      <section className="">
        <div
          className="rounded-[22px] px-6 py-10 sm:px-10 lg:px-14"
          style={{
            background:
              "radial-gradient(82.99% 75.78% at 82.22% 52.37%, rgba(212, 170, 58, 0.20) 0%, rgba(12, 42, 31, 0.20) 100%), linear-gradient(115deg, #0B3027 0%, #173C2B 58%, #0D251C 100%)",
          }}
        >
          <div className="max-w-5xl">
            <div className="w-fit rounded-full border border-[#CDAA47]/70 px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#D7B853]">
              GIHQS Foundation
            </div>
            <h1 className="mt-7 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">
              Vision, Mission &{" "}
              <span className="italic text-[#D7B853]">Core Values</span>
            </h1>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[#DDEAE5]">
              The Global Institute for Healthcare Quality & Safety (GIHQS)
              advances safer healthcare systems by supporting professionals,
              organizations, and leaders committed to healthcare quality,
              patient safety, high-reliability healthcare, and the responsible
              use of Artificial Intelligence (AI) in healthcare.
            </p>
          </div>
        </div>
      </section>
        <div className="grid gap-6 lg:grid-cols-2">
          {overviewCards.map((item) => (
            <article
              key={item.eyebrow}
              className="rounded-[20px] border border-[#DFE8E4] bg-white px-6 py-7 shadow-[0_16px_36px_rgba(15,47,38,0.04)] sm:px-8"
            >
              <div className="w-fit rounded-full border border-[#D6B767]/70 bg-[#FFF9E8] px-3 py-1.5 text-[0.63rem] font-semibold uppercase tracking-[0.12em] text-[#C49B2E]">
                {item.eyebrow}
              </div>
              <h2 className="mt-5 max-w-2xl font-serif text-xl font-semibold leading-snug text-[#112C24] sm:text-2xl lg:text-[1.55rem]">
                {item.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#61756D]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="rounded-[22px] bg-[#0F2F26] px-5 py-8 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <div className="w-fit rounded-full border border-[#CDAA47]/70 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[#D7B853]">
              Core Values
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
              The GIHQS{" "}
              <span className="italic text-[#D7B853]">Values Framework</span>
            </h2>
            <p className="mt-3 max-w-5xl text-sm leading-6 text-[#DDEAE5]">
              GIHQS expresses its values through five foundational commitments
              that reinforce the institute name itself. Together, these values
              support ethical leadership, safer care, continuous improvement,
              and trusted innovation.
            </p>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-6">
            {coreValues.map((value, index) => (
              <article
                key={value.title}
                className={`rounded-[16px] bg-white p-6 shadow-[0_12px_30px_rgba(2,16,12,0.12)] ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F1EAD5] text-xl font-bold text-[#1A3A31]">
                  {value.letter}
                </div>
                <h3 className="mt-5 text-base font-bold text-[#112C24]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#62766E]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
    </main>
  );
}

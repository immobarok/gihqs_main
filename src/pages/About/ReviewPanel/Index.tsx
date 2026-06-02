const reviewResponsibilities = [
  "Review accreditation applications and supporting documentation",
  "Evaluate compliance with GIHQS accreditation standards",
  "Assess program governance, curriculum, and quality systems",
  "Review evidence of learning outcomes and program impact",
  "Provide technical review recommendations",
  "Support accreditation decision-making processes",
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

      <section className="container mx-auto space-y-6 px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <article className="rounded-[18px] border border-[#DDE8E4] bg-white px-6 py-7 shadow-[0_10px_28px_rgba(15,47,38,0.03)] sm:px-7">
          <div className="w-fit rounded-full bg-[#FBF4E2] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[#C39A31]">
            Purpose
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#102B24] sm:text-[2.15rem]">
            Role of the Review Panel
          </h2>
          <p className="mt-4 max-w-6xl text-sm leading-6 text-[#48655D]">
            The Accreditation Review Panel supports the integrity and
            credibility of GIHQS accreditation activities through independent
            technical evaluation of submitted applications, supporting evidence,
            and program documentation.
          </p>

          <h3 className="mt-7 text-lg font-bold uppercase tracking-[0.02em] text-[#D0A13A]">
            Evaluation Responsibilities
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-5 text-[#48655D]">
            {reviewResponsibilities.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D0A13A]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[18px] border border-[#DDE8E4] bg-white px-6 py-6 shadow-[0_10px_28px_rgba(15,47,38,0.03)] sm:px-7">
          <h2 className="text-2xl font-bold leading-tight text-[#D0A13A]">
            Panel Formation in Progress
          </h2>
          <p className="mt-4 max-w-6xl text-sm leading-6 text-[#48655D]">
            The GIHQS Accreditation Review Panel is currently being established.
            Appointments are underway with several experienced professionals in
            healthcare quality, patient safety, accreditation, and healthcare
            leadership. Additional panel members will be announced as
            appointments are finalized.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[18px] border border-[#DDE8E4] bg-white px-6 py-7 shadow-[0_10px_28px_rgba(15,47,38,0.03)] sm:px-7">
            <h2 className="text-2xl font-bold leading-tight text-[#D0A13A]">
              Appointment Terms
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#48655D]">
              <p>
                Members of the Accreditation Review Panel are appointed by GIHQS
                based on demonstrated expertise in accreditation, healthcare
                quality, regulation, education, or evaluation.
              </p>
              <p>
                Appointments are typically for a renewable{" "}
                <span className="font-bold text-[#102B24]">two-year term</span>.
              </p>
              <p>
                Panel members may participate in application review,
                documentation evaluation, peer consultation, and accreditation
                recommendation activities.
              </p>
            </div>
          </article>

          <article className="rounded-[18px] border border-[#DDE8E4] bg-white px-6 py-7 shadow-[0_10px_28px_rgba(15,47,38,0.03)] sm:px-7">
            <h2 className="text-2xl font-bold leading-tight text-[#D0A13A]">
              Conflict of Interest
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#48655D]">
              <p>
                GIHQS is committed to maintaining impartiality and integrity in
                its accreditation processes.
              </p>
              <p>
                Panel members are expected to disclose any actual, potential, or
                perceived conflicts of interest that may influence or appear to
                influence their independent judgment.
              </p>
              <p>
                Where appropriate, GIHQS may request formal declarations of
                interest and may restrict participation in specific reviews to
                protect the integrity of accreditation decisions.
              </p>
            </div>
          </article>
        </div>

        <article className="rounded-[18px] border border-[#DDE8E4] bg-white px-6 py-7 shadow-[0_10px_28px_rgba(15,47,38,0.03)] sm:px-7">
          <h2 className="text-2xl font-bold leading-tight text-[#D0A13A]">
            Expressions of Interest
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-6 text-[#48655D]">
            <p>
              Experienced professionals with expertise in healthcare
              accreditation, standards development, quality improvement, clinical
              governance, regulatory oversight, or program evaluation who are
              interested in contributing to the Accreditation Review Panel may
              contact GIHQS.
            </p>
            <p>
              To express interest, please send a{" "}
              <span className="font-bold text-[#102B24]">current CV</span> and
              a{" "}
              <span className="font-bold text-[#102B24]">
                short professional biography
              </span>{" "}
              to{" "}
              <a
                className="font-bold text-[#102B24]"
                href="mailto:info@gihqs.com"
              >
                info@gihqs.com
              </a>
            </p>
            <p>
              Additional appointments will be announced as the panel is
              finalized.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

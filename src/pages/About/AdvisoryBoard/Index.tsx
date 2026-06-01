const advisoryFocus = [
  "Healthcare quality and patient safety leadership",
  "High-reliability healthcare systems",
  "Artificial intelligence governance in healthcare",
  "Global healthcare policy and regulatory developments",
  "Professional certification and education strategy",
  "Institutional strategy and international collaboration",
];

export default function StrategicAdvisoryBoard() {
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
              Strategic{" "}
              <span className="italic text-[#D4AA3A]">Advisory Panel</span>
            </h1>
            <p className="mt-6 max-w-5xl text-sm leading-relaxed text-[#D8E6E1]">
              The Strategic Advisory Panel provides independent guidance to
              support the long-term vision, strategic direction, and
              institutional development of the Global Institute for Healthcare
              Quality and Safety (GIHQS). GIHQS advisory panels bring together
              experienced leaders from healthcare systems, accreditation bodies,
              academia, and healthcare quality organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <article className="rounded-2xl border border-[#DDE8E4] bg-white p-7">
            <div className="w-fit rounded-full bg-[#FBF4E2] px-3 py-1.5 text-xs font-semibold uppercase text-[#C39A31]">
              Purpose
            </div>
            <h2 className="mt-5 text-3xl font-bold text-black">
              Purpose of the Panel
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4F6A61]">
              The Strategic Advisory Panel contributes high-level perspectives
              on healthcare quality, patient safety, high-reliability healthcare
              systems, digital health governance, and professional education.
              The panel supports GIHQS in strengthening its global positioning,
              institutional strategy, and alignment with international best
              practices.
            </p>
            <h3 className="mt-6 text-xl font-bold uppercase text-[#D4AA3A]">
              Advisory Focus
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#4F6A61]">
              {advisoryFocus.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#D4AA3A]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#DDE8E4] bg-white p-7">
            <h2 className="text-2xl font-bold text-[#D4AA3A]">
              Panel Formation in Progress
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4F6A61]">
              The GIHQS Strategic Advisory Panel is currently being established.
              Appointments are underway with several experienced professionals
              in healthcare quality, patient safety, accreditation, and
              healthcare leadership. Additional panel members will be announced
              as appointments are finalized.
            </p>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#DDE8E4] bg-white p-7">
              <h2 className="text-2xl font-bold text-[#D4AA3A]">
                Appointment Terms
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#4F6A61]">
                <p>
                  Members of the Strategic Advisory Panel are appointed by GIHQS
                  based on demonstrated expertise in healthcare quality,
                  regulation, education, or evaluation.
                </p>
                <p>
                  Appointments are typically for a renewable two-year term.
                </p>
                <p>
                  Panel members may participate in strategic consultation,
                  standards development, and institutional guidance activities.
                </p>
              </div>
            </article>
            <article className="rounded-2xl border border-[#DDE8E4] bg-white p-7">
              <h2 className="text-2xl font-bold text-[#D4AA3A]">
                Conflict of Interest
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#4F6A61]">
                <p>
                  GIHQS is committed to maintaining impartiality and integrity
                  in its governance processes.
                </p>
                <p>
                  Panel members are expected to disclose any actual, potential,
                  or perceived conflicts of interest that may influence or appear
                  to influence their advisory responsibilities.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

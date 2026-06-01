const policyGroups = [
  {
    code: "I",
    title: "Institutional Policies",
    description:
      "Core policies governing the operation, public-facing practices, and digital presence of the Institute.",
    documents: [
      "Privacy Policy",
      "Terms of Use",
      "Terms & Conditions of Purchase",
      "Refund Policy",
      "Disclaimer",
    ],
    actions: true,
  },
  {
    code: "C",
    title: "Certification Policies",
    description:
      "Policies governing eligibility, examination, candidate responsibilities, and ongoing certification requirements.",
    documents: [
      "Candidate Handbook",
      "Eligibility Requirements",
      "Examination Policies",
      "Retake Policy",
      "Certification Renewal Policy",
    ],
  },
  {
    code: "A",
    title: "Accreditation Policies",
    description:
      "Policies governing standards, evaluation methodology, review processes, and accreditation decision pathways.",
    documents: [
      "Accreditation Standards",
      "Accreditation Process",
      "Accreditation Decision Policy",
      "Appeals & Complaints Policy",
    ],
  },
];

export default function PoliciesGovernance() {
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
              GIHQS Governance Framework
            </div>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-tight text-white md:text-5xl">
              Policies &{" "}
              <span className="italic text-[#D4AA3A]">Governance</span>
            </h1>
            <div className="mt-6 max-w-5xl space-y-5 text-sm leading-relaxed text-[#D8E6E1]">
              <p>
                GIHQS maintains a structured framework of policies and
                governance documents that support the integrity, transparency,
                and credibility of its certification, education, and
                accreditation activities.
              </p>
              <p>
                This page serves as the institutional gateway for core policies
                that guide candidates, accredited organizations, partners, and
                stakeholders in understanding the standards and expectations
                that govern the Institute's operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {policyGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[#DDE8E4] bg-white p-7 shadow-[0_12px_32px_rgba(15,47,38,0.05)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8D9AF] bg-[#FBF4E2] text-sm font-bold text-[#C39A31]">
                {group.code}
              </div>
              <h2 className="mt-7 text-2xl font-bold text-[#10372D]">
                {group.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4F6A61]">
                {group.description}
              </p>
              <div className="mt-6 space-y-3">
                {group.documents.map((document) => (
                  <div
                    key={document}
                    className="flex min-h-12 items-center justify-between gap-4 rounded-lg border border-[#DDE8E4] bg-[#EEF6F3] px-4 text-sm font-bold text-[#10372D]"
                  >
                    <span>{document}</span>
                    {group.actions && (
                      <span className="flex gap-5 text-[0.68rem] font-semibold text-[#B08A24]">
                        <span>View</span>
                        <span>Download</span>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 pt-2 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl px-6 py-12 md:px-16"
          style={{
            background:
              "radial-gradient(82.99% 75.78% at 82.22% 52.37%, rgba(212, 170, 58, 0.20) 0%, rgba(12, 42, 31, 0.20) 100%), linear-gradient(115deg, #0F2F26 0%, #133A2F 56%, #0B241D 100%)",
          }}
        >
          <h2 className="font-serif text-4xl font-medium text-white">
            Governance{" "}
            <span className="italic text-[#D4AA3A]">Commitment</span>
          </h2>
          <p className="mt-6 max-w-5xl text-sm leading-relaxed text-[#D8E6E1]">
            GIHQS reviews and updates its policies periodically to maintain
            alignment with evolving healthcare quality, patient safety, ethical
            governance, and international best practices in certification and
            accreditation.
          </p>
        </div>
      </section>
    </main>
  );
}

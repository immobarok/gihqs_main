const fees = [
  {
    title: "Pre-Application Registration",
    price: "$150",
    description:
      "Required to initiate the accreditation process and obtain a GIHQS Application ID.",
    items: [
      "Application ID generation",
      "Access to submission package",
      "Eligibility verification",
    ],
  },
  {
    title: "Accreditation Review Fee",
    price: "$1250",
    description:
      "Covers the formal evaluation conducted by the independent GIHQS expert review panel.",
    items: [
      "Standards-based review",
      "Expert evaluation panel",
      "Accreditation decision report",
    ],
    featured: true,
  },
  {
    title: "Renewal / Re-Accreditation",
    price: "$750",
    description:
      "Applies to accredited programs undergoing periodic review to maintain accreditation status.",
    items: [
      "Evidence update review",
      "Outcome assessment",
      "Renewed accreditation decision",
    ],
  },
];

export default function AccreditationFees() {
  return (
    <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-3xl font-medium leading-tight text-[#0F2F26] md:text-4xl">
            GIHQS{" "}
            <span className="font-serif italic text-[#D4AA3A]">
              Accreditation Fees
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#4F6A61]">
            GIHQS accreditation fees support a rigorous, independent review
            process designed to ensure transparency, integrity, and alignment
            with recognized healthcare quality and patient safety standards.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {fees.map((fee) => (
            <article
              key={fee.title}
              className={
                fee.featured
                  ? "rounded-xl border border-[#D4AA3A]/40 p-7 text-white shadow-[0_18px_44px_rgba(15,47,38,0.18)]"
                  : "rounded-xl border border-[#E1E9E6] bg-white p-7 shadow-[0_16px_40px_rgba(15,47,38,0.08)]"
              }
              style={
                fee.featured
                  ? {
                      background:
                        "radial-gradient(82.99% 75.78% at 82.22% 52.37%, rgba(212, 170, 58, 0.20) 0%, rgba(12, 42, 31, 0.20) 100%), linear-gradient(115deg, #0F2F26 0%, #133A2F 56%, #0B241D 100%)",
                    }
                  : undefined
              }
            >
              <h3
                className={`text-xl font-bold leading-snug ${
                  fee.featured ? "text-white" : "text-[#10372D]"
                }`}
              >
                {fee.title}
              </h3>

              <p className="mt-3 text-4xl font-bold leading-none text-[#D4AA3A]">
                {fee.price}
              </p>

              <p
                className={`mt-5 text-sm leading-relaxed ${
                  fee.featured ? "text-[#D8E6E1]" : "text-[#4F6A61]"
                }`}
              >
                {fee.description}
              </p>

              <ul
                className={`mt-6 space-y-4 text-sm ${
                  fee.featured ? "text-[#D8E6E1]" : "text-[#4F6A61]"
                }`}
              >
                {fee.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

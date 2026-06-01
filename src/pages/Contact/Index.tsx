import { Mail, MessageSquare, Send } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "General Inquiries",
    description:
      "Questions about GIHQS, programs, accreditation, policies, or institutional partnerships.",
    value: "info@gihqs.com",
  },
  {
    icon: MessageSquare,
    title: "Accreditation Support",
    description:
      "Support for accreditation eligibility, application steps, evidence submission, and review timelines.",
    value: "accreditation@gihqs.com",
  },
  {
    icon: Send,
    title: "Advisory Requests",
    description:
      "Requests for advisory consultation, healthcare transformation support, and organizational capability building.",
    value: "advisory@gihqs.com",
  },
];

export default function ContactPage() {
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
              Connect
            </div>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-tight text-white md:text-5xl">
              Contact{" "}
              <span className="italic text-[#D4AA3A]">GIHQS</span>
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#D8E6E1]">
              Reach out to the Global Institute for Healthcare Quality & Safety
              for questions about membership, accreditation, certification,
              advisory services, or institutional collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="rounded-2xl border border-[#DDE8E4] bg-white p-7 shadow-[0_12px_32px_rgba(15,47,38,0.05)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF6F3] text-[#0F4A3B]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-[#10372D]">
                  {option.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4F6A61]">
                  {option.description}
                </p>
                <p className="mt-6 text-sm font-bold text-[#C39A31]">
                  {option.value}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

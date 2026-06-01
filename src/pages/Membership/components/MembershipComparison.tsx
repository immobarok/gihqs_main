import { Button } from "@/components/ui/button";
import { Check, Minus } from "lucide-react";
import { Link } from "react-router";

const standardFeatures = [
  { title: "Open Enrollment", note: "No certification required to join", included: true },
  { title: "Member Dashboard Access", included: true },
  { title: "Sample Exam Questions", note: "Limited access", included: true },
  { title: "Exclusive Resource Library", note: "Selected resources", included: true },
  { title: "Board / Advisory Opportunities", note: "General eligibility", included: true },
  { title: "Premium Member Badge", included: false },
  { title: "Member-Only Courses", included: false },
  { title: "Certification Exam Discount", included: false },
  { title: "Renewal / Recertification Discount", included: false },
  { title: "CE Course Discount", included: false },
  { title: "Downloadable Templates / Toolkits / Checklists", included: false },
  { title: "Priority Support", included: false },
  { title: "Bonus CE Opportunities", included: false },
  { title: "Premium Reports / Insights", included: false },
];

const premiumFeatures = [
  { title: "Open Enrollment", note: "No certification required to join" },
  { title: "Member Dashboard Access" },
  { title: "Sample Exam Questions", badge: "Expanded Access" },
  { title: "Exclusive Resource Library", badge: "Full Access" },
  { title: "Board / Advisory Opportunities", note: "Preferred Consideration" },
  { title: "Premium Member Badge" },
  { title: "Member-Only Courses" },
  { title: "Certification Exam Discount", badge: "15% Off" },
  { title: "Renewal / Recertification Discount", badge: "15% Off" },
  { title: "CE Course Discount", badge: "25% Off" },
  { title: "Downloadable Templates / Toolkits / Checklists" },
  { title: "Priority Support" },
  { title: "Bonus CE Opportunities" },
  { title: "Premium Reports / Insights" },
];

export default function MembershipComparison() {
  return (
    <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <div className="inline-flex rounded-full border border-[#D4AA3A]/60 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase leading-none tracking-[0.16em] text-[#C39A31]">
            Membership Comparison
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-medium leading-tight text-[#0F2F26] md:text-5xl">
              Standard vs{" "}
              <span className="font-serif italic text-[#D4AA3A]">
                Premium
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#3A5A50]">
              Choose the membership level that best supports your professional
              growth in healthcare quality, patient safety, accreditation, and
              responsible AI.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-[#0F4A3B]/35 bg-white px-6 text-sm font-bold text-[#0F2F26] hover:bg-[#EDF5F2]"
            >
              <Link to="/signup">Join as a Standard Member</Link>
            </Button>
            <Button
              asChild
              className="h-11 rounded-full bg-[#0F4A3B] px-6 text-sm font-bold text-white shadow-[0_14px_28px_rgba(15,74,59,0.20)] hover:bg-[#0A3328]"
            >
              <Link to="/signup">Become a Premium Member</Link>
            </Button>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-[#E1E9E6] bg-white shadow-[0_18px_48px_rgba(15,47,38,0.10)] lg:grid-cols-2">
          <article className="p-7 md:p-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#4F8B7A]">
              Standard
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#10372D]">
              Standard Member
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-6xl font-bold leading-none text-[#10372D]">
                $0
              </span>
              <span className="pb-2 text-sm text-[#4F6A61]">/ year</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4F6A61]">
              Open to all. Join the GIHQS community and begin your professional
              journey.
            </p>

            <div className="mt-8 divide-y divide-[#DDE8E4] border-t border-[#DDE8E4]">
              {standardFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-3 py-4">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      feature.included
                        ? "bg-[#DDEFEA] text-[#0F6B55]"
                        : "text-[#9AB3AA]"
                    }`}
                  >
                    {feature.included ? (
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    ) : (
                      <Minus className="h-3.5 w-3.5" />
                    )}
                  </span>
                  <div>
                    <h3
                      className={`text-sm font-bold ${
                        feature.included ? "text-[#10372D]" : "text-[#6F8580]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    {feature.note && (
                      <p className="mt-1 text-xs text-[#6F8580]">
                        {feature.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-10 h-12 w-full rounded-full border-[#BCD2CB] bg-white text-sm font-bold text-[#0F2F26] hover:bg-[#EDF5F2]"
            >
              <Link to="/signup">Start Free</Link>
            </Button>
          </article>

          <article
            className="relative overflow-hidden p-7 text-white md:p-10"
            style={{
              borderRadius: "0 24px 24px 0",
              background:
                "radial-gradient(106.46% 66.57% at 67.39% 25.38%, rgba(212, 170, 58, 0.11) 0%, rgba(12, 42, 31, 0.11) 100%), linear-gradient(115deg, #0F2F26 0%, #133A2F 56%, #0B241D 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-20 top-11 w-80 rotate-45 bg-[#F0D070] py-4 text-center text-sm font-black uppercase leading-tight tracking-[0.12em] text-[#0F2F26] shadow-[0_18px_36px_rgba(244,211,109,0.18)]">
              Certification
              <br />
              Candidates
            </div>

            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8FB3A6]">
              Premium
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#D4AA3A]">
              Premium Member
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-6xl font-bold leading-none text-[#D4AA3A]">
                $95
              </span>
              <span className="pb-2 text-sm text-[#C7D8D2]">/ year</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#C7D8D2]">
              Premium members save on certification exams, renewal fees, and CE
              courses while gaining access to exclusive learning resources and
              member-only tools.
            </p>

            <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
              {premiumFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-3 py-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AA3A]/15 text-[#D4AA3A]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-white">
                        {feature.title}
                      </h3>
                      {feature.badge && (
                        <span className="rounded-full bg-[#F4D36D] px-2 py-0.5 text-[0.65rem] font-bold text-[#0F2F26]">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    {feature.note && (
                      <p className="mt-1 text-xs text-[#9FB7AF]">
                        {feature.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="mt-10 h-12 w-full rounded-full bg-[#F4D36D] text-sm font-bold text-[#0F2F26] hover:bg-[#EBCB62]"
            >
              <Link to="/signup">Become a Premium Member</Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}

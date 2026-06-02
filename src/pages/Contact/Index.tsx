import { Send } from "lucide-react";

const inputClasses =
  "h-10 rounded-md border border-[#D8E5E1] bg-white px-3 text-sm text-[#102B24] outline-none transition focus:border-[#C39A31] focus:ring-2 focus:ring-[#C39A31]/20";

const labelClasses = "text-sm font-medium text-[#102B24]";

export default function ContactPage() {
  return (
    <main className="bg-[#F7FAF9] container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid items-stretch gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="h-full py-3">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#102B24] sm:text-[2.7rem]">
            Contact GIHQS
          </h1>
          <p className="mt-6 max-w-xl text-xl font-bold leading-snug text-[#1E2825]">
            Have questions about GIHQS certifications, education programs, or
            the accreditation of education and training programs?
          </p>
          <p className="mt-7 max-w-2xl text-sm leading-6 text-[#48655D]">
            We welcome inquiries from healthcare professionals, educators, and
            organizations committed to advancing healthcare quality, patient
            safety, and high-reliability healthcare systems.
          </p>

          <form className="mt-8 max-w-2xl space-y-5">
            <div className="grid gap-2">
              <label className={labelClasses} htmlFor="full-name">
                Full Name *
              </label>
              <input id="full-name" name="fullName" className={inputClasses} />
            </div>

            <div className="grid gap-2">
              <label className={labelClasses} htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={inputClasses}
              />
            </div>

            <div className="grid gap-2">
              <label className={labelClasses} htmlFor="phone-number">
                Phone Number
              </label>
              <div className="grid gap-3 sm:grid-cols-[0.8fr_1.6fr]">
                <input
                  aria-label="Country Code"
                  className={inputClasses}
                  name="countryCode"
                  placeholder="Country Code"
                />
                <input
                  id="phone-number"
                  className={inputClasses}
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="tel"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className={labelClasses} htmlFor="organization">
                Organization (Optional)
              </label>
              <input
                id="organization"
                name="organization"
                className={inputClasses}
              />
            </div>

            <div className="grid gap-2">
              <label className={labelClasses} htmlFor="service-interest">
                Service of Interest
              </label>
              <select
                id="service-interest"
                name="serviceInterest"
                className={`${inputClasses} appearance-none`}
                defaultValue="Professional Certification Programs"
              >
                <option>Professional Certification Programs</option>
                <option>Education Programs</option>
                <option>Accreditation of Education and Training Programs</option>
                <option>Institutional Collaboration</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className={labelClasses} htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                className="min-h-32 rounded-md border border-[#D8E5E1] bg-white px-3 py-3 text-sm text-[#102B24] outline-none transition placeholder:text-[#80938D] focus:border-[#C39A31] focus:ring-2 focus:ring-[#C39A31]/20"
                placeholder="Please provide details about your inquiry."
              />
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-[#61756D]">
                Our team typically responds within 1-2 business days.
              </p>
              <button
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#176B56] px-7 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(23,107,86,0.22)] transition hover:bg-[#125844]"
                type="submit"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </div>
          </form>
        </div>

        <aside
          className="h-full rounded-[24px] px-8 py-10 text-white shadow-[0_18px_42px_rgba(15,47,38,0.14)] sm:px-12 lg:min-h-[690px]"
          style={{
            background:
              "radial-gradient(79.7% 88.45% at 47.59% -5.47%, rgba(212, 170, 58, 0.20) 0%, rgba(12, 42, 31, 0.20) 100%), linear-gradient(115deg, #0F2F26 0%, #133A2F 56%, #0B241D 100%), #0F2F26",
          }}
        >
          <h2 className="text-3xl font-bold leading-tight">
            Contact Information
          </h2>

          <div className="mt-9 space-y-7 text-sm leading-6 text-[#E2EEE9]">
            <div>
              <h3 className="font-bold text-[#D4AA3A]">Phone</h3>
              <p>+1 (347) 763-9554</p>
            </div>

            <div>
              <h3 className="font-bold text-[#D4AA3A]">Email</h3>
              <p>info@gihqs.com</p>
            </div>

            <div>
              <h3 className="font-bold text-[#D4AA3A]">Headquarters</h3>
              <p>1209 Mountain Road PL NE, STE R</p>
              <p>Albuquerque, NM 87110</p>
              <p>United States</p>
            </div>

            <div>
              <h3 className="font-bold text-[#D4AA3A]">Working Hours</h3>
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:00 PM (EST)</p>
            </div>
          </div>

          <div className="mt-9 border-t border-white/16 pt-9">
            <h3 className="font-bold text-[#D4AA3A]">GIHQS Mission</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#E2EEE9]">
              To advance healthcare quality and patient safety by developing
              professionals through certification, education, and accreditation
              programs that strengthen high-reliability healthcare systems and
              the responsible use of Artificial Intelligence (AI) in healthcare.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

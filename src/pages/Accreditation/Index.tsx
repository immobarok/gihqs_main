
import AccreditationDomains from "./components/AccreditationDomains";
import AccreditationEligibility from "./components/AccreditationEligibility";
import AccreditationHero from "./components/AccreditationHero";
import AccreditationInsights from "./components/AccreditationInsights";
import AccreditationProcess from "./components/AccreditationProcess";

const Accreditation = () => {
  return (
    <main className="bg-[#F7FAF9]">
      <AccreditationHero />
      <AccreditationEligibility />
      <AccreditationProcess />
      <AccreditationDomains />
      <AccreditationInsights />
    </main>
  );
};

export default Accreditation;

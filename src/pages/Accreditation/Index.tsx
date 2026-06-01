
import AccreditationEligibility from "./components/AccreditationEligibility";
import AccreditationHero from "./components/AccreditationHero";
import AccreditationProcess from "./components/AccreditationProcess";

const Accreditation = () => {
  return (
    <main className="bg-[#F7FAF9]">
      <AccreditationHero />
      <AccreditationEligibility />
      <AccreditationProcess />
    </main>
  );
};

export default Accreditation;

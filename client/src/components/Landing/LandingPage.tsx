import LandingBanner from "./LandingBanner";
import LandingBenefits from "./LandingBenefits";
import LandingHeader from "./LandingHeader";


const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <LandingBanner />
      <LandingBenefits/>
    </div>
  );
};

export default LandingPage;

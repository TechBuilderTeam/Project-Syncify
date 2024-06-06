import Sponsors from "./Sponsors";
import TopCompanySlider from "../Pages/Home/TopCampanySliderSection/TopCompanySlider";
import DifferentTypeOfTabSection from "../Pages/Home/DifferentTypeOfTabSection/DifferentTypeOfTabSection";
import HomeEmailSection from "../Pages/Home/HomeEmailSection/HomeEmailSection";
import CustomerSection from "../Pages/Home/CustomerSection/CustomerSection";
import Banner from "./Banner";
import FeaturesHome from "../Pages/Home/Features/FeaturesHome";

const Home = () => {
  return (
    <div>
      <Banner />
      <DifferentTypeOfTabSection />
      <Sponsors />
      <CustomerSection />
      <FeaturesHome />
      <TopCompanySlider />
      <HomeEmailSection />
    </div>
  );
};

export default Home;

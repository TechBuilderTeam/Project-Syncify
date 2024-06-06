import Sponsors from "./Sponsors";
import TopCompanySlider from "../Pages/Home/TopCampanySliderSection/TopCompanySlider";
import DifferentTypeOfTabSection from "../Pages/Home/DifferentTypeOfTabSection/DifferentTypeOfTabSection";

import HomeEmailSection from "../Pages/Home/HomeEmailSection/HomeEmailSection";

import CustomerSection from "../Pages/Home/CustomerSection/CustomerSection";
// import Login from "../Pages/Login/login";
import Banner from "./Banner";

import Features from "../Pages/Home/Features/Features";
import Footer from "../../pages/shared/Footer";
const Home = () => {
  return (
    <div>
      <Banner />

      <DifferentTypeOfTabSection />
      <Sponsors />
      <CustomerSection />
      <Features />
      <TopCompanySlider />

      <HomeEmailSection />
      <Footer />
    </div>
  );
};

export default Home;

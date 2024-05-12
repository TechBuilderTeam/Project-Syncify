import Sponsors from "./Sponsors";
import TopCompanySlider from "../Pages/Home/TopCampanySliderSection/TopCompanySlider";
import DifferentTypeOfTabSection from "../Pages/Home/DifferentTypeOfTabSection/DifferentTypeOfTabSection";
import Banner from "./Banner";
import HomeEmailSection from "../Pages/Home/HomeEmailSection/HomeEmailSection";


import CustomerSection from "../Pages/Home/CustomerSection/CustomerSection";
// import Login from "../Pages/Login/login";

const Home = () => {
  return (
    <div>
    <Banner />
      <Sponsors />
      <DifferentTypeOfTabSection/>
      <CustomerSection/>
      <TopCompanySlider/>
      <HomeEmailSection/>
    </div>
  );
};

export default Home;

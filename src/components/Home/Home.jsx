import Sponsors from "./Sponsors";
import Banner from "./banner";
import TopCompanySlider from "../Pages/Home/TopCampanySliderSection/TopCompanySlider";
import DifferentTypeOfTabSection from "../Pages/Home/DifferentTypeOfTabSection/DifferentTypeOfTabSection";

import Login from "../Pages/Login/login";
import CustomerSection from "../Pages/Home/CustomerSection/CustomerSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsors />
      <DifferentTypeOfTabSection/>
      <CustomerSection/>
      <TopCompanySlider/>
      
      <Login />
    </div>
  );
};

export default Home;

import Sponsors from "./Sponsors";
import TopCompanySlider from "../Pages/Home/TopCampanySliderSection/TopCompanySlider";
import DifferentTypeOfTabSection from "../Pages/Home/DifferentTypeOfTabSection/DifferentTypeOfTabSection";
import Banner from "./Banner";

// import Login from "../Pages/Login/login";

const Home = () => {
  return (
    <div>
    <Banner />
      <Sponsors />
      <DifferentTypeOfTabSection/>
      <TopCompanySlider/>
    </div>
  );
};

export default Home;

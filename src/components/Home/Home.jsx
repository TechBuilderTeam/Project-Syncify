import Sponsors from "./Sponsors";
import Banner from "./banner";
import TopCompanySlider from "../Pages/Home/TopCampanySliderSection/TopCompanySlider";
import DifferentTypeOfTabSection from "../Pages/Home/DifferentTypeOfTabSection/DifferentTypeOfTabSection";
import Login from "../Pages/Login";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsors />
      <DifferentTypeOfTabSection />
      <TopCompanySlider />
      <Login />
    </div>
  );
};

export default Home;

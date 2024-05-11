import Sponsors from "./Sponsors";
import Banner from "./banner";
import TopCompanySlider from "../Pages/Home/TopCampanySliderSection/TopCompanySlider";
import Login from "../Pages/Login/login";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsors />
      <TopCompanySlider />
      <Login />
    </div>
  );
};

export default Home;

import BottomBanner from "../../Shared/BottomBanner/BottomBanner";
import Banner from "../Banner/Banner";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryCarousel />
      <BottomBanner />
    </div>
  );
};

export default Home;

import BottomBanner from "../../Shared/BottomBanner/BottomBanner";
import Banner from "../Banner/Banner";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";
import DailyBestSells from "../DailyBestSells/DailyBestSells";
import DealsOfTheDay from "../DealsOfTheDay/DealsOfTheDay";
import PopularProducts from "../PopularProducts/PopularProducts";
import ProductSpotlight from "../ProductSpotlight/ProductSpotlight";
import PromoCards from "../PromoCards/PromoCards";
import PromotionBanner from "../PromotionBanner/PromotionBanner";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <CategoryCarousel />
      <PromotionBanner />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfTheDay />
      <ProductSpotlight />
      <BottomBanner />
      <PromoCards />
    </div>
  );
};

export default Home;

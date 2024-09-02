import Banner2 from "../../../Components/Banner2/Banner2";
import bannerImg from "../../../assets/Banner-1.png";

const BottomBanner = () => {
  const handleSubmit = (email) => {
    console.log("Email submitted on Home Page: ", email);
  };
  return (
    <div>
      <Banner2
        imageSrc={bannerImg}
        title="Stay home & get your daily needs from our shop"
        description="Start You'r Daily Shopping with Nest Mart"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default BottomBanner;

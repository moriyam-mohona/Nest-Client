import Banner2 from "../../../Components/Banner2/Banner2";
import img from "../../../assets/Banner-1.png";
import Achievements from "../Achievements/Achievements";
import OurPerformance from "../OurPerformance/OurPerformance";
import OurStory from "../OurStory/OurStory";
import OurTeam from "../OurTeam/OurTeam";
import WelcomeText from "../WelcomeText/WelcomeText";
import WhatWeProvide from "../WhatWeProvide/WhatWeProvide";
const About = () => {
  return (
    <div>
      <WelcomeText />
      <WhatWeProvide />
      <OurPerformance />
      <OurStory />
      <Achievements />
      <OurTeam />
      <Banner2
        imageSrc={img}
        title="Stay home & get your daily needs from our shop"
        description="Start You'r Daily Shopping with Nest Mart"
      />
    </div>
  );
};

export default About;

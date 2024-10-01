import img from "../../../assets/about.png";
const WelcomeText = () => {
  const images = [
    { imgSrc: "https://i.ibb.co.com/mqRdsxB/about-4-png.png" },
    { imgSrc: "https://i.ibb.co.com/5Gsn3Jb/about-3-png.png" },
    { imgSrc: "https://i.ibb.co.com/qp5pv6h/about-2-png.png" },
    { imgSrc: "https://i.ibb.co.com/5Gsn3Jb/about-3-png.png" },
  ];

  return (
    <div className="flex flex-col-reverse gap-5 lg:gap-8 items-center md:flex-row my-4 md:mx-10 lg:mx-20">
      <div className="flex-1 hidden md:flex">
        <img src={img} alt="" className="max-h-92 p-2 lg:p-10" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-start">
          Welcome to Nest
        </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.. <br /> <br /> Ius ferri
          velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut
          placerat legendos interpre.Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio
          aenean sed adipiscing. Turpis massa tincidunt.
        </p>
        <div className="flex gap-1 lg:gap-3 my-5 md:hidden lg:flex  ">
          {images.map((image, index) => (
            <img
              src={image.imgSrc}
              alt=""
              key={index}
              className="h-28 lg:h-40 mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeText;

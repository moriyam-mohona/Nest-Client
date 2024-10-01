import banner from "../../../assets/Banner-1.png";

const Achievements = () => {
  const achievements = [
    {
      title: "Glorious Years",
      value: 5,
    },
    {
      title: "Happy Clients",
      value: 50,
    },
    {
      title: "Projects Completed",
      value: 120,
    },
    {
      title: "Team Advisors",
      value: 15,
    },
    {
      title: "Products Sold",
      value: 300,
    },
  ];
  return (
    <div className="relative mb-20">
      <img
        src={banner}
        alt="Achievements Banner"
        className="rounded-2xl w-full h-80 md:h-60 object-cover"
      />
      {/* Greenish background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-green-800 opacity-60 rounded-2xl"></div>

      {/* Dynamic text content over the image */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-between lg:justify-around items-center text-white text-center p-5 md:p-10 lg:px-24">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex md:flex-col items-baseline md:items-center gap-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {achievement.value}+
            </h2>
            <p className="">{achievement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

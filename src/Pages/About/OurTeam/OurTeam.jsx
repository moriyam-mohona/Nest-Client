import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      designation: "CEO & Co-Founder",
      image: "https://i.ibb.co.com/pJnzMp2/Main-1.png",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com/in",
      },
    },
    {
      name: "Jane Smith",
      designation: "Head Engineer",
      image: "https://i.ibb.co.com/5GD6Ygf/Main.png",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com/in",
      },
    },
    {
      name: "Alice Johnson",
      designation: "Project Manager",
      image: "https://via.placeholder.com/150",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com/in",
      },
    },
    {
      name: "Bob Brown",
      designation: "UX/UI Designer",
      image: "https://via.placeholder.com/150",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com/in",
      },
    },
  ];

  return (
    <div className="my-4 md:mx-10 lg:mx-20 mb-10">
      {/* Header  */}
      <div className="flex flex-col items-center lg:mb-6">
        <h2 className="text-2xl font-bold">Our Team</h2>
        {/* SVG curl */}
        <svg width="100%" height="22px" viewBox="0 0 100 20">
          <path
            d="M0 14 Q 10 0 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
            fill="none"
            stroke="#22543D"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="gap-5 md:gap-8 lg:gap-3 grid grid-cols-1 lg:grid-cols-3 ">
        {/* Team Description  */}
        <div className="flex flex-col items-center lg:items-start  space-y-3 col-span-1">
          <h2 className="hidden lg:flex text-base font-semibold text-green-800 text-center lg:text-start">
            Our Team
          </h2>
          <h2 className="text-3xl lg:text-5xl font-extrabold pb-5 text-center lg:text-start">
            Meet Our Expert Team
          </h2>
          <p className="text-sm text-center lg:text-start">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
            <br />
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <button className="bg-green-800 text-white px-4 py-2 rounded-md">
            View All Members
          </button>
        </div>
        {/* Detail card  */}
        <div className="flex justify-center gap-3 col-span-2 lg:ml-10">
          {teamMembers
            .filter(
              (member) =>
                member.designation === "CEO & Co-Founder" ||
                member.designation === "Head Engineer"
            )
            .map((member, index) => (
              <div
                key={index}
                className="min-w-[150px] lg:min-w-0 relative rounded-lg"
              >
                <img
                  className="w-full h-56 md:h-60 lg:h-80 object-contain rounded-lg"
                  src={member.image}
                  alt={member.name}
                />
                <div className="flex flex-col items-center text-center absolute inset-x-4 top-28 md:top-36 lg:top-48 z-50 bg-white shadow-md p-2 md:p-2 lg:p-4 rounded-lg mx-2 lg:mx-3 mb-4">
                  <h2 className="font-bold">{member.name}</h2>
                  <p className="text-xs md:text-sm">{member.designation}</p>
                  <div className="flex gap-3 mt-2">
                    {member.social.facebook && (
                      <a href={member.social.facebook}>
                        <FaFacebookF className="text-green-800" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter}>
                        <FaTwitter className="text-green-800" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin}>
                        <FaLinkedin className="text-green-800" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

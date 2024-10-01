const OurStory = () => {
  const story = [
    {
      title: "Who we are",
      details:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nuncmattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
    },
    {
      title: "Our history",
      details:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nuncmattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
    },
    {
      title: "Our mission",
      details:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nuncmattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
    },
  ];
  return (
    <div className="my-4 md:mx-10 lg:mx-20 mb-10 overflow-x-auto flex flex-col md:flex-row gap-3 lg:gap-5 justify-between lg:overflow-x-visible">
      {story.map((story, index) => (
        <div
          key={index}
          className="shadow-md shadow-green-800/10 rounded-lg flex flex-col  gap-3 items-center py-6 p-5"
        >
          <h2 className="text-lg font-bold">{story.title}</h2>
          <h2 className="text-sm text-center">{story.details}</h2>
        </div>
      ))}
    </div>
  );
};

export default OurStory;

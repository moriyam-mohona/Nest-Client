import { FiSend } from "react-icons/fi";

const Banner2 = ({ imageSrc, title, description, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log("Email from Banner: ", email);

    if (onSubmit) {
      onSubmit(email);
    }

    form.reset();
  };

  return (
    <div className="relative w-full">
      <img src={imageSrc} className="w-full rounded-3xl" alt="Banner" />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 text-left pl-24">
        <h2 className="text-5xl font-bold w-1/2">{title}</h2>
        <p className="text-lg">{description}</p>
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <FiSend className="text-sm" />
            </span>
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              className="p-2 pl-10 rounded-full w-80"
            />
          </div>
          <button
            type="submit"
            className="absolute right-0 bg-blue-800 text-white text-xs px-5 py-3 rounded-full"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner2;

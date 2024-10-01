import banner from "../../../assets/perfomanceBanner.png";
const OurPerformance = () => {
  return (
    <div className="flex flex-col-reverse  md:gap-5 lg:gap-8 items-center md:flex-row my-4 md:mx-10 lg:mx-20">
      <img
        src={banner}
        alt=""
        className="flex-1 w-full md:w-1/2 lg:w-3/5 py-10 "
      />
      <div className="flex-1 space-y-3 w-full md:w-1/2 lg:w-2/5 lg:p-5">
        <h6 className="text-lg text-center md:text-start">Our performance</h6>
        <h2 className="text-2xl text-center md:text-start md:text-2xl lg:text-3xl font-bold ">
          Your Partner for e- commerce grocery solution
        </h2>
        <p className="text-sm py-5 text-center md:text-start">
          Ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto <br />
          <br />
          Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia
        </p>
      </div>
    </div>
  );
};

export default OurPerformance;

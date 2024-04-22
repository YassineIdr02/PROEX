import ensat from "/ENSAT.jpeg";
import uni from "/univ.png";
import handshaking from "/hand-shaking.jpg";
import { Link } from "react-router-dom";
const LandingBanner = () => {
  return (
    <>
      <section className="-my-4">
        <div className="relative flex flex-col gap-6 mx-auto items-center h-screen">
          <h1 className="text-center text-6xl max-w-4xl font-bold  mt-[10%]">
            <span className="text-secondary ">ProEx</span> Connect, Collaborate,
            Exchange, Progress{" "}
          </h1>
          <h1 className="text-center mt-4 max-w-3xl text-3xl  sm:text-xl/relaxed text-secondary">
            Connect to ProEx, a dynamic platform connecting you with a community
            of passionate developers. Explore new collaboration opportunities
            and expand your professional horizons. Join us today and give your
            development projects a fresh boost!
          </h1>
          <Link to={"login"} className="btn btn-neutral w-[10%] flex justify-center h-[5%] text-white">
            
              Begin Thriving <span className="text-xl font-thin ">&#8594;</span>{" "}

          </Link>
          <div className="divider w-[90%] mx-auto opacity-50 mt-[5%] "></div>

          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="text-[#2c7a7b] ">OUR SPONSORS</h1>
            <div className="flex flex-row gap-4">
              <div className="avatar">
                <div className="size-24 mask mask-squircle">
                  <img src={ensat} />
                </div>
              </div>
              <div className="avatar">
                <div className="size-24 mask mask-squircle">
                  <img src={uni} />
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section>

      <section className="flex flex-col items-center overflow-hidden bg-gradient-to-t from-gray-50 via-gray-50 to-transparent from-0% to-30%">
        <h1 className="text-center text-6xl max-w-4xl font-bold w-full">
          Your <span className="text-secondary ">work</span> is currency
        </h1>
        <p className="text-secondary mt-3 text-xl">Trade skills for value.</p>
        <div className="grid grid-cols-2 px-[10%] items-center ">
          <img
            alt=""
            src={handshaking}
            className="sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[80%] md:rounded-tl-[60px] md:rounded-br-[70px]"
          />
          <div>
            <h2 className="text-2xl text-center font-bold text-gray-900 md:text-3xl">
              No money? No Problem
            </h2>
            <p className=" text-secondary max-w-screen-sm  mx-auto text-center my-8 text-xl font-light leading-snug">
              At ProEx, we value skills and teamwork. Here, your work speaks
              volumes—exchange your expertise with fellow developers and see the
              value you create. Join ProEx to redefine your business experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingBanner;

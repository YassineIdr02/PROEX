import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import coins1 from "/coins1.png";
import coins2 from "/coins 2.png";
import coins3 from "/30.jpeg";

const Payment = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-center font-bold my-[5%] text-[#222831]">
        Get more Coins!
      </h1>
      <motion.div
        initial={{ opacity: 0.5, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 gap-8 mt-6 px-5 items-center"
      >
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl  shadow-md"
        >
          <img
            src={coins1}
            alt=""
            className="h-fit  w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative border border-gray-100 bg-white p-6">
            <h3 className=" text-lg font-medium text-gray-900">
              10 <FontAwesomeIcon icon={faCoins} />
            </h3>

            <p className="mt-1 text-sm text-gray-700">$9.99</p>
            <button className="block w-full rounded-xl mt-4 bg-black text-white p-4 text-sm font-medium transition hover:scale-105">
              Buy now
            </button>
          </div>
        </a>

        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl shadow-xl"
        >
          <img
            src={coins2}
            alt=""
            className="w-full object-center    transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative border  border-gray-100 bg-white p-6">
            <span className="whitespace-nowrap rounded-lg bg-green-400   px-3 py-1.5 text-xs font-medium">
              {" "}
              Recomended{" "}
            </span>
            <br />
            <br />

            <h3 className="text-lg font-medium text-gray-900">
              50 <FontAwesomeIcon icon={faCoins} />
            </h3>
            <p className="mt-1 text-sm text-gray-700">$19.99</p>
            <button className="block w-full mt-4 rounded-xl  bg-black text-white p-4 text-sm font-medium transition hover:scale-105">
              Buy now
            </button>
          </div>
        </a>
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl  shadow-md"
        >
          <img
            src={coins3}
            alt=""
            className="h-64  w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative border border-gray-100 bg-white p-6">
            <h3 className=" text-lg font-medium text-gray-900">
              100 <FontAwesomeIcon icon={faCoins} />
            </h3>
            <p className="mt-1 text-sm text-gray-700">$49.99</p>
            <button className="block w-full rounded-xl mt-4 bg-black text-white p-4 text-sm font-medium transition hover:scale-105">
              Buy now
            </button>
          </div>
        </a>
      </motion.div>
      
    </div>
  );
};

export default Payment;

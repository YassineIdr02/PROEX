import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHandHoldingHand, faShop } from "@fortawesome/free-solid-svg-icons";
import logo from "/Logo 1.ico";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between border-e shadow-md bg-white w-full">
        <div className="px-4 py-6">
          <div className="flex items-center">
            <div className="h-7 rounded-full mx-4">
              <img src={logo} alt="" className="object-contain w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold ">ProEx</h2>
          </div>
          <ul className="mt-6 space-y-1">
            <li>
              <Link to={"/projects"}>
                <a
                  href="#"
                  className="rounded-lg px-4 py-2 text-sm font-bold hover:bg-gray-100 hover:text-gray-700 text-gray-500 flex flex-row items-center gap-2 "
                >
                 <FontAwesomeIcon icon={faHandHoldingHand} /> Projects 
                </a>
              </Link>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link to={"/payment"}>
                <a
                  href="#"
                  className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                 <FontAwesomeIcon icon={faShop} /> Store
                </a>
              </Link>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <form action="#">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 flex justify-between items-center p-5">
          <div>
            <a
              href="#"
              className="flex items-center gap-2 bg-white hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="size-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">Eric Frusciante</strong>
                  <span> eric@frusciante.com </span>
                </p>
              </div>
            </a>
          </div>
          <Link to={"/payment"}>
            <div className="badge badge-outline px-2 flex flex-row gap-3 hover:text-white cursor-pointer hover:bg-black  ">
              {" "}
              10 <FontAwesomeIcon icon={faCoins} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

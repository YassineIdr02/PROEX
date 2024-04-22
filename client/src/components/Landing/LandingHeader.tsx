import logo from '/logo1.png'
import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <div className="md:flex md:items-center md:gap-12 hover:cursor-pointer">
              <div className="h-7 rounded-full mx-4">
                <img src={logo} alt="" className="object-contain w-full h-full" />
              </div>
          </div>

          <div className="hidden md:block z-50">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm  font-medium">
                <li><a className="text-[#222831] transition hover:text-gray-500/75 " href="#">{" "}About{" "}</a></li>
                <li><a className="text-[#222831] transition hover:text-gray-500/75" href="#">{" "}Careers{" "}</a></li>
                <li><a className="text-[#222831] transition hover:text-gray-500/75" href="#">{" "}History{" "}</a></li>
                <li><a className="text-[#222831] transition hover:text-gray-500/75"href="#">{" "}Services{" "}</a></li>
                <li><a className="text-[#222831] transition hover:text-gray-500/75"href="#">{" "}Projects{" "}</a></li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 flex items-center">
              <Link to={"login"}>
              <a className="rounded-md bg-[#31363F] px-5 py-2.5 text-sm font-medium text-white shadow"href="#">Login</a>
              </Link>
              <div className="hidden sm:flex">
                <a  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#222831]"href="#">Register</a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;

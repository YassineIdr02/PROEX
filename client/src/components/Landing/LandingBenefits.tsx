import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faHandshake,
  faKey,
  faPalette,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const LandingBenefits = () => {
  return (
    <section className="flex flex-col gap-0 items-center bg-gray-50 py-[5%]">
        <h1 className="text-center text-6xl max-w-5xl font-bold w-full py-3">
          Elevate Your Projects with ProEx Perfection
        </h1>{" "}
        <p className=" text-secondary mt-3 text-xl">
          Tailored for Seamless Success.
        </p>
        <br />
        <div className=" grid grid-cols-3 gap-10 px-[5%] py-[2%]">
          <div className="flex flex-col gap-2 text-center px-3 py-[15%] rounded-lg  max-w-md hover:-translate-y-2 hover:duration-75 transition hover:shadow-lg      ">
            <FontAwesomeIcon icon={faKey} className="text-4xl text-secondary" />
            <h3 className="mt-0.5 text-2xl font-medium text-gray-900">
              Unlock Limitless Potential
            </h3>
            <p className="mt-2 line-clamp-3 text-lg text-gray-500">
              Embrace endless possibilities with ProEx's diverse skills hub. Let
              your projects thrive!
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center px-3 py-[15%]  rounded-lg max-w-md hover:-translate-y-2 hover:duration-75 transition hover:shadow-lg      ">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-4xl text-secondary"
            />
            <h3 className="mt-0.5 text-2xl font-medium text-gray-900">
              Forge Deeper Connections
            </h3>
            <p className="mt-2 line-clamp-3 text-lg text-gray-500">
              Build meaningful bonds sans financial barriers. Collaborate
              freely, soar together!
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center px-3 py-[15%]  rounded-lg max-w-md hover:-translate-y-2 hover:duration-75 transition hover:shadow-lg      ">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-4xl text-secondary"
            />
            <h3 className="mt-0.5 text-2xl font-medium text-gray-900">
              Elevate Your Craft
            </h3>
            <p className="mt-2 line-clamp-3 text-lg text-gray-500">
              Rise to new heights of excellence in our supportive community.
              Your craft, empowered!
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-10 px-[5%] py-[2%]">
          <div className="flex flex-col gap-2 text-center px-3 py-[15%]  rounded-lg max-w-md hover:-translate-y-2 hover:duration-75 transition hover:shadow-lg      ">
            <FontAwesomeIcon
              icon={faPalette}
              className="text-4xl text-secondary"
            />

            <h3 className="mt-0.5 text-2xl font-medium text-gray-900">
              Inspire Creative Breakthroughs
            </h3>
            <p className="mt-2 line-clamp-3 text-lg text-gray-500">
              Discover inspiration within our vibrant community. Unleash
              creative breakthroughs with ProEx!
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center px-3 py-[15%]  rounded-lg max-w-md hover:-translate-y-2 hover:duration-75 transition hover:shadow-lg      ">
            <FontAwesomeIcon icon={faGem} className="text-4xl text-secondary" />
            <h3 className="mt-0.5 text-2xl font-medium text-gray-900">
              Cultivate Professional Synergy
            </h3>
            <p className="mt-2 line-clamp-3 text-lg text-gray-500">
              Experience the power of collaborative synergy. Cultivate
              professional connections that drive success!
            </p>
          </div>
        </div>
      </section>
  )
}

export default LandingBenefits

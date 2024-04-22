import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const ProjectCards = () => {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div className="grid grid-rows-1 gap-4 lg:grid-rows-3 lg:gap-8 p-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex flex-row gap-4 justify-center bottom-0 text-gray-500 py-5 ">
        <p className="text-center hover:cursor-pointer">View more</p>
        <label className=" swap swap-rotate items-center">
          <input type="checkbox" className="hidden" />
          <FontAwesomeIcon className="swap-off" icon={faCaretDown} />
          <FontAwesomeIcon className="swap-on" icon={faCaretUp} />
        </label>
      </div>
    </div>
  );
};

export default ProjectCards;

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CardVariant = {
  initial:{
    opacity: .5, 
    y:  -5
  },
  final: {
    opacity:1, 
    y:0,
    transition:{
      duration: .5
    }
  }
}

const ProjectCard = () => {
  return (
    <motion.div
    variants={CardVariant}
      initial="initial"
      animate="final"
    >
      <Link to={"1"}>
        <article className="rounded-xl border-2 border-gray-100 bg-white shadow transition hover:shadow-lg  hover:cursor-pointer">
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <a href="#" className="block shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="size-14 rounded-lg object-cover"
              />
            </a>

            <div>
              <h3 className="font-medium sm:text-lg">
                <a href="#" className="hover:underline">
                  Question about Livewire Rendering and Alpine JS
                </a>
              </h3>

              <p className="line-clamp-2 text-sm text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus, accusantium temporibus iure delectus ut totam natus
                nesciunt ex? Ducimus, enim.
              </p>

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <p className="text-xs">18 March 2024</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <div className="flex items-center gap-1 text-gray-500">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="text-xs">10 Coins</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                  Posted by
                  <a
                    href="#"
                    className="font-medium underline hover:text-gray-700"
                  >
                    John
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-amber-500 px-3 py-1.5 text-white">
              <FontAwesomeIcon icon={faClock} />
              <span className="text-[10px] font-medium sm:text-xs">
                Pending...
              </span>
            </strong>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

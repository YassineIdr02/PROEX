import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ProjectInfo = () => {
  return (
    <motion.div className="mx-auto px-4 py-8 h-screen flex flex-col justify-between"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0}}
    transition={{ duration: 0.5 }}
    >
      <article className="prose">
        <h1 className="text-3xl font-bold mb-[1%]">
          Project Title{" "}
          <span className="text-gray-600 mb-[1%] text-sm font-light underline hover:cursor-pointer hover:text-gray-500 ">
            by Yassine
          </span>
        </h1>
        <p className="text-gray-600 mb-[1%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          voluptatem consequuntur dicta nihil reiciendis ipsa magnam itaque.
          Consectetur tempora, error eligendi unde odio, dolor ut inventore
          sapiente modi est corporis. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quam similique veniam molestias sapiente fuga, qui
          architecto voluptates quos soluta eligendi rerum voluptatem eius
          nesciunt veritatis ratione. Blanditiis temporibus neque ut. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Illo nihil quam
          omnis accusantium corporis quod consequatur reiciendis facilis est
          repellendus odit, libero ex autem magnam perferendis mollitia dolore
          praesentium nobis? ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, voluptatem consequuntur dicta nihil reiciendis ipsa magnam
          itaque. Consectetur tempora, error eligendi unde odio, dolor ut
          inventore sapiente modi est corporis. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quam similique veniam molestias
          sapiente fuga, qui architecto voluptates quos soluta eligendi rerum
          voluptatem eius nesciunt veritatis ratione. Blanditiis temporibus
          neque ut. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illo nihil quam omnis accusantium corporis quod consequatur reiciendis
          facilis est repellendus odit, libero ex autem magnam perferendis
          mollitia dolore praesentium nobis? ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit, voluptatem consequuntur dicta nihil
          reiciendis ipsa magnam itaque. Consectetur tempora, error eligendi
          unde odio, dolor ut inventore sapiente modi est corporis. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Quam similique veniam
          molestias sapiente fuga, qui architecto voluptates quos soluta
          eligendi rerum voluptatem eius nesciunt veritatis ratione. Blanditiis
          temporibus neque ut. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illo nihil quam omnis accusantium corporis quod
          consequatur reiciendis facilis est repellendus odit, libero ex autem
          magnam perferendis mollitia dolore praesentium nobis?
        </p>

        <p className="text-gray-800 font-semibold  my-[1%]">Time till deliver: <span className=" text-gray-500 font-extralight">2 weeks (by the end of February)</span></p>
        <p className="text-gray-800 font-semibold my-[1%]">Reward: <span className=" text-gray-500 font-extralight">20 Coins</span></p>
        
        <p className="text-gray-800 font-semibold  my-[1%]">Requirements</p>
        <div className="flex flex-row gap-3">
          <div className="badge badge-outline">React js</div>
          <div className="badge badge-outline">Html 5</div>
          <div className="badge badge-outline">PostgreSQL</div>
        </div>
        
      </article>    

      <div className="flex flex-row gap-3 justify-end">
         <button className="btn btn-outline w-[10%]"><Link to={'/projects'}>Back to projects</Link></button> 
        
        <button className="btn btn-info w-[10%]">Apply</button>
      </div>
    </motion.div>
  );
};

export default ProjectInfo;

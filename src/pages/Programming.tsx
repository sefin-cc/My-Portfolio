import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiCode, FiGithub, FiSmartphone  } from "react-icons/fi"; 
import bg from "../assets/images/spikes.jpg";
import { MdWeb } from "react-icons/md";
import { useRef } from "react";
import projects from "../data/programming.json";
import bari from "../assets/images/programming/baribari.gif";
import dugong from "../assets/images/programming/dugong.gif";
import spell from "../assets/images/programming/spellwell.gif";
import bigbites from "../assets/images/programming/mergebigbites.gif";
import artworked from "../assets/images/programming/artworked.gif";
import connect from "../assets/images/programming/connect.gif";
import postly from "../assets/images/programming/postly.gif";
import whochat from "../assets/images/programming/whochat.gif";

const images: Record<string, string> = {
  bari,
  dugong,
  spell,
  bigbites,
  artworked,
  connect,
  postly,
  whochat
};

export default function ProgrammingProjects() {

  return (
    <div className="relative min-h-screen  overflow-hidden bg-(--color-white) w-full ">
      {/* Background Image Layer with low opacity */}
      <div
        className="absolute inset-0 bg-repeat opacity-50 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "auto",
        }}
      />


      <div className="flex flex-col flex-wrap justify-center items-center gap-8 pr-6 pl-6 pt-28 pb-28 text-[--color-dark] relative">
        <motion.div
          initial={{ rotate: -50, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-4 border-4 border-[color:var(--color-dark)] rounded-full bg-[color:var(--color-lightpink)] shadow"
          >
          <FiCode size={50} className="text-(--color-dark)"/>
        </motion.div>

        <TypeAnimation
          sequence={["PROGRAMMING PROJECTS ", 3000]}
          wrapper="span"
          cursor={true}
          speed={1}
          style={{ display: "inline-block", textDecoration: "underline" }}
          className="text-2xl md:text-4xl"
        />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-lg md:text-lg pb-20 text-center"
      >
        Here is a collection of some of my programming projects that showcase my skills and creativity.
      </motion.p>

        <div className="flex flex-wrap gap-6 justify-center ">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={project.id}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-[color:var(--color-lightpink)] p-6 border-4 border-[color:var(--color-dark)] rounded-2xl flex flex-col items-center"
              >
                <img
                  src={images[project.imageKey]}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-60 object-contain rounded-lg mb-4 bg-(--color-white) border-4 border-(--color-dark)"
                />

                <p className="text-xl md:text-2xl font-semibold text-center uppercase">{project.title}</p>
                <p className="text-base md:text-lg text-center uppercase">{project.tech}</p>
                {project.description.split('\n').map((line, i) => (
                  <p key={i} className="text-sm font-normal text-justify mt-3">
                      {line}
                  </p>
                ))}

                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                  {
                    project.github &&
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="transition-all duration-300 text-[color:var(--color-dark)] bg-[color:var(--color-white)] p-3 rounded-full border-2 border-[color:var(--color-dark)] shadow-md hover:shadow-xl"
                    >
                      <FiGithub className="w-6 h-6" />
                    </motion.a>
                  }

                  {
                    project.apk &&
                    <motion.a
                      href={project.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="transition-all duration-300 text-[color:var(--color-dark)] bg-[color:var(--color-white)] p-3 rounded-full border-2 border-[color:var(--color-dark)] shadow-md hover:shadow-xl"
                    >
                      <FiSmartphone className="w-6 h-6" />
                    </motion.a>
                  }
                  
                  {
                    project.website &&
                  <motion.a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all duration-300 text-[color:var(--color-dark)] bg-[color:var(--color-white)] p-3 rounded-full border-2 border-[color:var(--color-dark)] shadow-md hover:shadow-xl"
                  >
                    <MdWeb className="w-6 h-6" />
                  </motion.a>

                  }

                  
                </div>
              </motion.div>
            );
          })}
        </div>

       </div>

  
      
    </div>
  );
}

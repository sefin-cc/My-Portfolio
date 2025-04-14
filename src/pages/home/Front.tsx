import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiCode, FiPenTool } from "react-icons/fi"; 
import workspaceGif from "../../assets/images/workspace.gif";
import { Link } from "react-router-dom";

export default function Front() {
    const fadeInVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.3,
            duration: 0.6,
            ease: "easeOut",
          },
        }),
      };

  return (
    
      <div className="relative z-10 px-6 py-8 pt-20 md:px-20 md:py-20 flex flex-col md:flex-row items-center w-full">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl [color:var(--color-dark)]">
              Hello!{" "}
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="inline-block origin-[70%_70%]"
              >
                👋
              </motion.span>
            </h1>
            <h2 className="text-3xl md:text-4xl mt-4 [color:var(--color-dark)]">
              I'm Rogena Sefin Tibegar
            </h2>

            <TypeAnimation
              sequence={[
                "FULL STACK DEVELOPER", 2000,
                "FRONTEND DEVELOPER", 2000,
                "UI/UX DESIGNER", 2000,
                "GAME DEVELOPER", 2000,
                "GRAPHIC DESIGNER", 2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="block text-2xl md:text-3xl mt-4 [color:var(--color-dark)]"
            />

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-6 flex-wrap">
                {/* GitHub */}
                <motion.a
                    href="https://github.com/sefin-cc"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all duration-300 text-[color:var(--color-dark)] bg-[color:var(--color-lightpink)] p-3 rounded-full border-2 border-[color:var(--color-dark)] shadow-md hover:shadow-xl"
                >
                    <FiGithub className="w-6 h-6" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                    href="https://www.linkedin.com/in/rogena-tibegar"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all duration-300 text-[color:var(--color-dark)] bg-[color:var(--color-lightpink)] p-3 rounded-full border-2 border-[color:var(--color-dark)] shadow-md hover:shadow-xl"
                >
                    <FiLinkedin className="w-6 h-6" />
                </motion.a>
            </div>
          </motion.div>


           <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
                {/* Programming Projects */}
                <motion.div
                    custom={0}
                    variants={fadeInVariant}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                    scale: 1.07,
                    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.4)",
                    backgroundColor: "var(--color-accent)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full md:w-[260px]"
                >
                    <Link
                    to="/programming"
                    className="w-full px-6 py-3 bg-[color:var(--color-dark)] text-white rounded-full shadow transition duration-300 flex items-center justify-center gap-3"
                    >
                    <FiCode className="w-6 h-6" />
                    <span>PROGRAMMING PROJECTS</span>
                    </Link>
                </motion.div>

                {/* Creative Projects */}
                <motion.div
                    custom={1}
                    variants={fadeInVariant}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                    scale: 1.07,
                    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.4)",
                    backgroundColor: "var(--color-accent)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full md:w-[260px]"
                >
                    <Link
                    to="/creative"
                    className="w-full px-6 py-3 bg-[color:var(--color-dark)] text-white rounded-full shadow transition duration-300 flex items-center justify-center gap-3"
                    >
                    <FiPenTool className="w-6 h-6" />
                    <span>CREATIVE PROJECTS</span>
                    </Link>
                </motion.div>
                </div>


        </div>


        {/* Right Image Section */}
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.4, // soft delay for layered reveal
            }}
            className="md:w-1/2 flex justify-center items-center"
        >
        <motion.img
            src={workspaceGif}
            alt="workspace"
            initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
            animate={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-[250px] md:h-[450px] w-[250px] md:w-[450px] object-cover rounded-full border-[18px] border-[var(--color-white)]"
        />
        </motion.div>

      </div>

 

  );
}

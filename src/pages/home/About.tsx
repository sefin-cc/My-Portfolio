import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import about from "../../assets/images/about.jpg";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="flex flex-col justify-center relative mx-4 md:mx-20 my-10 md:my-20 pb-20">

        <TypeAnimation
        sequence={["ABOUT ME ", 3000]}
        wrapper="span"
        cursor={true}
        speed={1}
        style={{ display: "inline-block", textDecoration: "underline" }}
        className="relative text-2xl md:text-4xl text-(--color-dark) text-center"
        />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-base md:text-lg pb-10 text-center"
      >
       Hey there! Here’s a little about me...
      </motion.p>

        <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="relative border-(--color-dark) border-4 rounded-3xl  p-4 md:p-7 text-(--color-dark) flex flex-col md:flex-row justify-center items-center gap-6"
        style={{ backgroundColor: "var(--color-lightpink)" }}
      >
        <div className="flex-shrink-0">
          <img
            src={about}
            className="w-[200px] md:w-[400px] object-cover rounded-full border-4 md:border-8 border-(--color-gray)"
            alt="About me"
          />
        </div>

        <div className="pl-0 md:pl-7 px-2 md:px-0">
          {isInView && (
            <TypeAnimation
              sequence={["WHO AM I? ", 3000]}
              wrapper="span"
              cursor={true}
              speed={1}
              style={{ display: "inline-block", textDecoration: "underline" }}
              className="text-2xl md:text-4xl"
            />
          )}

          {[
            "My Name is Rogena Sefin G. Tibegar, I am a tech-savvy and creative with a Bachelor of Science in Information Technology (with honors), majoring in System Development. With firsthand experience in using tools such as Figma, Photoshop, and Illustrator, I straddle the divide between development and design.",
            "I know how to develop HTML, CSS, JavaScript, PHP, React, React Native, Laravel, and Unity. I'm a quick learner with a strong discipline, always on the lookout to learn something new and help deliver meaningful, innovative projects.",
            "Driven by curiosity and a passion for continuous growth, I stay ahead of trends by constantly exploring new technologies and creative approaches. Whether it's coding a complex app or designing intuitive user experiences, I thrive in dynamic, forward-thinking environments where creativity and technology meet.",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.4,
                ease: "easeOut",
              }}
              className="mt-4 text-sm sm:text-base max-w-xl leading-relaxed text-justify"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

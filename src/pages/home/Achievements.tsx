import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import achievementsData from "../../data/achievements.json";
import about from "../../assets/images/about.jpg"; // add other image imports if needed
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const images: Record<string, string> = {
  about,
};

export default function Achievements() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0); 
    const sectionRef = useRef(null);
  
    // Switch achievements (previous and next)
    const prevSlide = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? achievementsData.length - 1 : prev - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) =>
        prev === achievementsData.length - 1 ? 0 : prev + 1
      );
    };
  

    // Auto-slide for images (change only the image)
    useEffect(() => {
      const imageKeys = achievementsData[currentIndex].imageKey;
  
      if (imageKeys.length <= 1) return; // If there's only one image, skip the auto-slide
  
      const interval = setInterval(() => {
        setImageIndex((prev) =>
          prev === imageKeys.length - 1 ? 0 : prev + 1
        );
      }, 2000);
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const slide = achievementsData[currentIndex];
    const currentImageKey = slide.imageKey[imageIndex];

  return (
    <div className="flex flex-col justify-center relative mx-4 md:mx-20 my-10 md:my-20 pb-20">
      {/* Header Animation */}
      <TypeAnimation
        sequence={["ACHIEVEMENTS ", 3000]}
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
        Here are some of my achievements.
      </motion.p>

      {/* Slideshow Container */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="relative border-(--color-dark) border-4 rounded-3xl p-4 md:p-7 text-(--color-dark) flex flex-wrap md:flex-nowrap items-center justify-center gap-6 bg-(--color-lightpink) "
      >
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="text-(--color-dark) order-1 md:order-none"
        >
          <FaAngleLeft size={40} />
        </button>

        {/* Slide Content */}
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left"
        >
      
          <div className="w-full md:w-1/2 md:pr-5">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{slide.title}</h2>
            {slide.content.split('\n').map((line, i) => (
            <p key={i} className="text-sm sm:text-base text-justify mb-2">
                {line}
            </p>
            ))}
          </div>
          <div className="w-full md:w-1/2 relative">
            {/* Image */}
            <motion.img
                key={currentImageKey}
                src={images[currentImageKey]}
                alt={slide.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: slide.imageKey.length > 1 ? 0.8 : 0 }}
                className="h-52 sm:h-60 md:h-[600px] object-cover rounded-xl w-full"
                />


            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slide.imageKey.map((key, index) => (
                <button
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                    imageIndex === index
                        ? "bg-(--color-white) scale-125"
                        : "bg-(--color-lightpink) opacity-80"
                    }`}
                />
                ))}
            </div>
        </div>

        </motion.div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="text-(--color-dark) order-3 md:order-none"
        >
          <FaAngleRight size={40} />
        </button>
      </motion.div>
    </div>
  );
}

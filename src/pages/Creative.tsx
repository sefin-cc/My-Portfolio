import { motion, AnimatePresence  } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import about from "../assets/images/about.jpg";
import bg from "../assets/images/spikes.jpg";
import { useState } from "react";
import uiux from "../data/creative-uiux.json";

const images: Record<string, string> = {
  about,
 
};

export default function CreativeProjects() {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

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
        <TypeAnimation
          sequence={["CREATIVE PROJECTS ", 3000]}
          wrapper="span"
          cursor={true}
          speed={1}
          style={{ display: "inline-block", textDecoration: "underline" }}
          className="text-2xl md:text-4xl"
        />

    <div className="relative">
        {/* Fullscreen Preview */}
        <AnimatePresence>
        {previewImage && (
            <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setPreviewImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            <motion.img
                src={previewImage}
                alt="Preview"
                className="max-w-full max-h-full object-contain rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
            />
            </motion.div>
        )}
        </AnimatePresence>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6">
            {uiux.map((item, index) => (
            <motion.div
                key={item.id}
                className="relative group rounded-xl shadow-md cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                onClick={() => setPreviewImage(images[item.image])}
            >
                <img
                    src={images[item.image]}
                    alt={item.title}
                    className="w-full h-60 sm:h-64 md:h-72 aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white px-3 text-center">
                <h2 className="text-lg sm:text-xl font-bold">{item.title}</h2>
                <p className="text-xs sm:xs mt-1">{item.caption}</p>
                </div>
            </motion.div>
            ))}
        </div>
        </div>

       </div>

  
      
    </div>
  );
}

import { motion, AnimatePresence  } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import about from "../assets/images/about.jpg";
import bg from "../assets/images/spikes.jpg";
import { useState } from "react";
import uiux from "../data/creative-uiux.json";
import vector from "../data/creative-vector.json";
import digital from "../data/creative-digital.json";
import post from "../data/creative-post.json";
import GalleryGrid from "../component/GalleryGrid";
import { FiPenTool } from "react-icons/fi"; 

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
      <motion.div
        initial={{ rotate: -50, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-4 border-4 border-[color:var(--color-dark)] rounded-full bg-[color:var(--color-lightpink)] shadow"
        >
        <FiPenTool size={50} />
      </motion.div>

        <TypeAnimation
          sequence={["CREATIVE PROJECTS ", 3000]}
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
            Here’s a glimpse into some of the creative projects I’ve been working on.
        </motion.p>

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




        <GalleryGrid
            title={"UI UX PROJECTS"}
            items={uiux}
            images={images}
            onClick={(image) => setPreviewImage(image)}
        />

        <GalleryGrid
            title={"VECTOR ARTS"}
            items={vector}
            images={images}
            onClick={(image) => setPreviewImage(image)}
        />

        <GalleryGrid
            title={"DIGITAL ILLUSTRATION"}
            items={digital}
            images={images}
            onClick={(image) => setPreviewImage(image)}
        />

        <GalleryGrid
            title={"SOCIAL MEDIA POST"}
            items={post}
            images={images}
            onClick={(image) => setPreviewImage(image)}
        />


        </div>

       </div>

  
      
    </div>
  );
}

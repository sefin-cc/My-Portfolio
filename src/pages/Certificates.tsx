import { motion, AnimatePresence  } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import bg from "../assets/images/spikes.jpg";
import { useState } from "react";
import certificate from "../data/certificate.json";

import GalleryGrid from "../component/GalleryGrid";
import { PiCertificateBold } from "react-icons/pi";

import coromar9 from "../assets/images/certificates/9.jpg";
import aia8 from "../assets/images/certificates/8.jpg";
import green12 from "../assets/images/certificates/4.jpg";
import cert4 from "../assets/images/certificates/12.jpg";
import accenture1 from "../assets/images/certificates/1.png";
import dsc4 from "../assets/images/certificates/4.jpg";
import flutter2 from "../assets/images/certificates/2.png";
import firebase5 from "../assets/images/certificates/5.jpg";
import android7 from "../assets/images/certificates/7.png";
import poster10 from "../assets/images/certificates/10.jpg";
import active11 from "../assets/images/certificates/11.jpg";
import nstp6 from "../assets/images/certificates/6.png";

const images: Record<string, string> = {
  coromar9,
  aia8,
  green12,
  cert4,
  accenture1,
  dsc4,
  flutter2,
  firebase5,
  android7,
  poster10,
  active11,
  nstp6,
 
};

export default function Certificates() {
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
        <PiCertificateBold size={50}  className="text-(--color-dark)"/>
      </motion.div>

        <TypeAnimation
          sequence={["CERTIFICATES & CREDENTIALS", 3000]}
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
            I am proud to share the various certificates that I have successfully earned throughout my journey.
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
          title={""}
          items={certificate}
          images={images}
          onClick={(image) => setPreviewImage(image)}
        />

       
    

        </div>

       </div>

  
      
    </div>
  );
}

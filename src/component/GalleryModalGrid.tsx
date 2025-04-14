import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandGoogleDrive } from "react-icons/tb";

type GalleryItem = {
  id: string | number;
  title: string;
  caption: string;
  image: string;
  description: string;
  link: string | null;
};

type GalleryModalGridProps = {
  title: string;
  items: GalleryItem[];
  images: Record<string, string>;
};

const GalleryModalGrid = ({ title, items, images }: GalleryModalGridProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Disable scroll on modal open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);


  return (
    <div className="pb-20">
      <motion.p
        className="px-4 text-2xl font-semibold tracking-wide uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 120,
          damping: 12,
          delay: 0.2,
        }}
      >
        {title}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6 uppercase justify-center max-w-[1300px] mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group rounded-xl shadow-md cursor-pointer overflow-hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={images[item.image]}
              alt={item.title}
              className="w-full h-60 sm:h-64 md:h-72 aspect-square object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white px-3 text-center">
              <h2 className="text-lg sm:text-xl font-bold">{item.title}</h2>
              <p className="text-xs sm:text-sm mt-1">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto p-10 rounded-xl relative z-60 shadow-lg"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
              >
                ×
              </button>

              {/* Content */}
              <img
                src={images[selectedItem.image]}
                alt={selectedItem.title}
                className="w-full h-64 object-contain rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
              <p className="text-lg uppercase">{selectedItem.caption}</p>

              <div className="text-base sm:text-md">
                {selectedItem.description.split("\n").map((line, i) => (
                  <p key={i} className="text-gray-700 mt-2 text-justify">
                    {line}
                  </p>
                ))}
              </div>

              {selectedItem.link && (
                <div className="w-full flex justify-center p-3">
                  <motion.a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 20 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all duration-300 text-[color:var(--color-dark)] bg-[color:var(--color-lightpink)] p-3 rounded-full border-2 border-[color:var(--color-dark)] shadow-md hover:shadow-xl flex items-center justify-center w-12 h-12"
                  >
                    <TbBrandGoogleDrive className="w-6 h-6" />
                  </motion.a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryModalGrid;

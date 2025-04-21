import { motion } from "framer-motion";

type GalleryItem = {
  id: string | number;
  title: string;
  caption: string;
  image: string;
};

type GalleryGridProps = {
    title: string;
    items: GalleryItem[];
    images: Record<string, string>;
    onClick: (image: string) => void;
};

const GalleryGrid = ({ title, items, images, onClick }: GalleryGridProps) => {
  return (
    <div className="pb-20">
        <motion.p
            className="px-4 text-2xl font-semibold tracking-wide uppercase "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.2
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
            onClick={() => onClick(images[item.image])}
            >
            <img
                src={images[item.image]}
                loading="lazy"
                alt={item.title}
                className="w-full h-60 sm:h-64 md:h-72 aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white px-3 text-center">
                <h2 className="text-lg sm:text-xl font-bold">{item.title}</h2>
                <p className="text-xs sm:text-sm mt-1">{item.caption}</p>
            </div>
            </motion.div>
        ))}
        </div>

    </div>
   
  );
};

export default GalleryGrid;

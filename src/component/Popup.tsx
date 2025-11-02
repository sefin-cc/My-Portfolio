import { motion } from "framer-motion";

type PopupProps = {
  message: string;
  onClose: () => void;
};

const Popup = ({ message, onClose }: PopupProps) => {

  const handleBoxClick = (e: React.MouseEvent) => e.stopPropagation();
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
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer"
      onClick={onClose} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        onClick={handleBoxClick}
        className="bg-white rounded-2xl shadow-2xl p-6 text-center max-w-sm w-[90%] cursor-default"
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <h2 className="text-2xl font-semibold mb-3">Welcome!</h2>
        <p className="text-gray-600 mb-6">{message}<br/>-Rogena</p>

        <motion.div
            custom={0}
            onClick={onClose}
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
            className="w-full"
        >
            <button
                className="w-full px-6 py-3 bg-[color:var(--color-dark)] text-white rounded-full shadow transition duration-300 flex items-center justify-center gap-3"
            >
                <span>GOT IT!</span>
            </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20"
      style={{height: 10000}}
    >
      <h1 className="text-5xl font-bold">Hey, I'm Rogena 👋</h1>
      <p className="mt-4 text-xl text-gray-600">Frontend Developer & UI/UX Enthusiast</p>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 0}}
        whileTap={{ scale: 0.95 }}
        className="w-80 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white shadow-2xl cursor-pointer "
      >
        <h1 className="text-2xl font-bold">My First Flow Card</h1>
        <p className="mt-2 text-indigo-100">Hover over me. Watch me respond instantly.</p>
      </motion.div>
    </div>
  );
}
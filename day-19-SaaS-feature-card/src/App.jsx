import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <motion.div
      whileHover={{scale:1.02}}
      transition={{duration:0.2}}
      className="max-w-md w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between">
        
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            01 / core
          </div>
          <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
            Lightning fast UI
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Built with Vite and Tailwind v4 for instant feedback loops.
          </p>
        
      </motion.div>
    </div>
  );
}

export default App;

import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6 selection:bg-indigo-500 selection:text-white">
      {/* bento grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-8 flex flex-col justify-between relative overflow-hidden cursor-pointer"
        >
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              01 / Speed
            </span>
            <h2 className="text-2xl font-bold tracking-tight mt-2 text-white">
              Lightning fast UI
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Built with vite and tailwind v4 for instant feedback loops
            </p>
          </div>

          <div className="mt-8 flex items-center text-xs font-medium text-indigo-400">
            Explore components →
          </div>
        </motion.div>

        {/* Motion card */}
        <motion.div
        
          whileHover={{scale:1.02}}
          transition={{duration:0.2}}
          className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-8 flex flex-col justify-between relative overflow-hidden cursor-pointer">


        </motion.div>
      </div>
    </div>
  );
}

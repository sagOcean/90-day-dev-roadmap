import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 selection:bg-indigo-500 selection:text-white">
      {/* hero content wrapper */}
      <motion.div
        initial={{ opacity: 0, y: -130 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="max-w-3xl text-center space-y-6"
      >
        {/* tiny pill badge */}

        <div className="flex justify-center ">
          <span className="inline-flex items-center gap-2  bg-indigo-500/10 px-4 rounded-full py-1.5 text-xs font-semibold text-indigo-400 border border-indigo-600/20">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            Day 2: High-Value Hero Section
          </span>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight"> We build digital experiences that <span className="text-red-400">convert</span></h1>

          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">A high performance frontend blueprint designed to ship buttery-smooth animated websites at lightspeed. No bloat, pure polish.</p>


          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{scale:1.01}}
              whileTap={{scale:0.95}}
              className="rounded-full bg-red-600 px-8 py-4 font-medium text-white shadow-lg shadow-indigo-500/25 cursor-pointer transition-colors hover:bg-green-500"
            >
              Start Project →

            </motion.button>

            <motion.button
            whileHover={{scale:1.05, backgroundColor:"rgba(27, 151, 134, 0.45)"}}
            whileTap={{scale:0.95}}
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-4 font-medium text-zinc-300 cursor-pointer">
              View work
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

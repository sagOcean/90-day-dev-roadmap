import { useState } from "react";
import { motion } from "motion/react";
import random_image from "./assets/random.jpg"

function App() {
  return (
    <>
      <motion.div 
      drag
      dragConstraints={{
        left:-100,
        right:192,
        top:-200,
        bottom:120,
      }}
      
      className="w-[340px] h-[220px] bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Test Card
            </span>
            <span className="text-xs text-zinc-500 font-mono">#8492</span>
          </div>
          <img src={random_image} alt="img" className="h-40 w-40" />
        </div>

        {/* <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
          <span>340px × 220px</span>
          <span className="text-indigo-400 font-medium">Plain HTML Div</span>
        </div> */}
      </motion.div>
    </>
  );
}

export default App;

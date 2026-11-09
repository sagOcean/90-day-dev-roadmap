import {motion} from 'framer-motion';
import { useState } from 'react';

function App() {

  const [activeTab, setActiveTab]=useState("analytics");
  

  return (
    // main screen
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      {/* main grid-container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* 1st div */}

          
        
          <motion.div
            onClick={()=>setActiveTab("core")}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between"
          >
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

          {/* activates only when core tab is clicked */}

          {activeTab==="core"&&
          (<motion.div
          className="md:col-span-1 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between"

          initial={{opacity:0, y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:.2}}
          
          
          >


            <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
              Welcome to the core tab
            </h1>

            <p className="text-sm text-zinc-400 mt-2">
              You will get a random description about the core tab like this:
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum ad eius aspernatur, quam possimus ipsam assumenda corrupti, rerum quos sint. Nobis optio doloremque temporibus earum placeat facere cupiditate unde.
            </p>
            
            
            
          </motion.div>)}
        
        {/* second div */}
        
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className=" md:col-span-1 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
              99.9% Uptime
            </h1>
            <p className="text-sm text-zinc-400 mt-2">Sub-ms latency ready</p>
          </motion.div>
        
        {/* third div */}
       
          <motion.div
            onClick={()=>setActiveTab("analytics")}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className=" w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between md:col-span-3"
          >
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              02 / analytics
            </div>
            <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
              Real-time Performance insights
            </h1>
            <p className="text-sm text-zinc-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsam aspernatur soluta impedit accusantium tempora et rerum optio fugit quas distinctio, error quis omnis iste necessitatibus numquam dignissimos asperiores atque.
            </p>
          </motion.div>

          
        
        
      </div>
    </div>
  )
}

export default App

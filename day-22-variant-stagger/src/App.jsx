import { useState } from "react";
import { motion } from "motion/react";

function App() {
  const [activeTab, setActiveTab] = useState("analytics");

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, //wait 0.2s before previous card
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
      
    },
    hover: {
        scale: 1.02,
        transition: { duration: 0.2 },
      }
  };

  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
        {/* main grid-container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
        >
          {/* 1st div */}

          <motion.div
            variants={cardVariants}
            onClick={() => setActiveTab("core")}
            whileHover="hover"
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

          {activeTab === "core" && (
            <motion.div
              variants={cardVariants}
              className="md:col-span-1 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between"
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
                Welcome to the core tab
              </h1>

              <p className="text-sm text-zinc-400 mt-2">
                You will get a random description about the core tab like this:
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                earum ad eius aspernatur, quam possimus ipsam assumenda
                corrupti, rerum quos sint. Nobis optio doloremque temporibus
                earum placeat facere cupiditate unde.
              </p>
            </motion.div>
          )}

          {/* second div */}

          <motion.div
            variants={cardVariants}
            whileHover="hover"
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
            onClick={() => setActiveTab("analytics")}
            variants={cardVariants}
            whileHover="hover"
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              ipsam aspernatur soluta impedit accusantium tempora et rerum optio
              fugit quas distinctio, error quis omnis iste necessitatibus
              numquam dignissimos asperiores atque.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default App;

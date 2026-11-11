import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const [isClicked, setisClicked] = useState(0);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
        delayChildren: 2,
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
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
        <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
          <motion.div 
          className="md:col-span-1 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          >
            <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
              Basic
            </h1>
            <div className="price flex items-baseline gap-1.5 my-6">
              <div className="dollar text-4xl font-extrabold tracking-tight text-white">
                $29
              </div>
              <div className="month text-sm text-zinc-400 font-medium">
                / month
              </div>
            </div>

            <button
              class="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors shadow-sm"
              onClick={() => setisClicked(!isClicked)}
            >
              Join for free
            </button>
          </motion.div>

          <motion.div 
          className="md:col-span-1 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between"
          variants={cardVariants}
          
          >
            <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
              Pro
            </h1>
            <div className="price flex items-baseline gap-1.5 my-6">
              <div className="dollar text-4xl font-extrabold tracking-tight text-white">
                $49
              </div>
              <div className="month text-sm text-zinc-400 font-medium">
                / month
              </div>
            </div>

            <button class="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors shadow-sm">
              Join for free
            </button>
          </motion.div>

          <motion.div 
          className="md:col-span-1 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between"
          variants={cardVariants}
          
          >
            <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
              Premium
            </h1>
            <div className="price flex items-baseline gap-1.5 my-6">
              <div className="dollar text-4xl font-extrabold tracking-tight text-white">
                $79
              </div>
              <div className="month text-sm text-zinc-400 font-medium">
                / month
              </div>
            </div>

            <button class="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors shadow-sm">
              Join for free
            </button>
          </motion.div>

          <AnimatePresence>
            {isClicked == 1 && (
              <motion.div 
              className="md:col-span-1 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between"
              variants={cardVariants}
              
              exit="exit">
                <h1 className="text-2xl font-bold tracking-tight mt-2 text-white">
                  aonther Basic
                </h1>
                <p className="text-sm text-zinc-400 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis ipsam aspernatur soluta impedit accusantium tempora
                  et rerum optio fugit quas distinctio, error quis omnis iste
                  necessitatibus numquam dignissimos asperiores atque.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;

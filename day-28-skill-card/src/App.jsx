import {motion,AnimatePresence} from 'motion/react';
import { useState } from 'react';


function App() {
  const [see, setSee] = useState(false);
  const containerVariants = {
    hidden:{
      opacity:0,
      y:20,

    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:2,
        delayChildren:2,
      }

    }
  }

  const cardVariants = {
    hidden:{
      opacity:0,
      y:20,
    },
    visible:{
      opacity:1,
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
  }
  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
        <motion.div 
        className="grid md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
          <motion.div 
          className="h-50 w-80 bg-zinc-600 text-zinc-900 flex flex-col justify-left items-center p-5 gap-7 rounded-[10px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{scale:1.02}}
          
          onClick={()=>{
            setSee(!see)
          }}>
            <p className="text-3xl text-zinc-300 font-bold">Sprint progress</p>
            <p className="text-3xl text-green-400 font-bold">3%</p>
            <AnimatePresence>

            {see && (
              <motion.p
              className='text-zinc-100'
              variants={cardVariants}
              initial="hidden"
              animate="visible"
               exit='exit'>this is extended description</motion.p>
            )}
            </AnimatePresence>

          </motion.div>
          <motion.div 
          className="h-50 w-80 bg-zinc-600 text-zinc-900 flex flex-col justify-left items-center p-5 gap-7 rounded-[10px]"
          whileHover={{scale:1.02}}
          
          variants={cardVariants}
          initial="hidden"
          animate="visible">
            <p className="text-3xl text-zinc-300 font-bold">Hours invested</p>
            <p className="text-3xl text-green-400 font-bold">36h</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { motion } from "motion/react";

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [activeTab, setActiveTab] = useState(1);

  const shuffle = () => {
    setList([...list].reverse());
  };

  return (
    <>
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 gap-6">




        <button
          onClick={shuffle}
          className="mb-4 px-4 py-2 bg-indigo-600 rounded-xl text-white font-semibold cursor-pointer"
        >
          Shuffle list
        </button>
      <div className="flex space-x-1 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 w-fit">
        {list.map((list_item) =>{
          const isActive = activeTab===list_item;

          return(
          

          <motion.button
            key={list_item}
            layout
            onClick={()=>{setActiveTab(list_item)}}
            
            className="relative inline-flex items-center gap-2  bg-indigo-500/10 px-4 rounded-full py-1.5 text-xs font-semibold text-indigo-400 border border-indigo-600/20"
          >
            {
                  isActive &&(
                    <motion.div
                    layoutId="thisIsActive"
                    className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}/>
                  )
                }
            {list_item}
          </motion.button>
        );})}
      </div>
    </div>
    </>
  );
}

export default App;

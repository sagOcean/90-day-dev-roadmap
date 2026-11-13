import { useState } from "react";
import { motion } from "motion/react";

const navBar = ["home","about us","sign up","contact us"]

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <div className="flex space-x-1 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 w-fit">

        {
          navBar.map((elem)=>{
            const isActive = activeTab===elem;

            return(
              <button
              key={elem}
              onClick={()=>{setActiveTab(elem)}}
              className={`relative px-5 py-2.5 text-sm font-medium transition-colors z-10 cursor-pointer ${
                isActive ? "text-white":"text-zn-400 hover:text-zinc-200"
              }`}
              
              >
                {
                  isActive &&(
                    <motion.div
                    layoutId="thisIsActive"
                    className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}/>
                  )
                }


                {elem}
              </button>

            );

          })
        }
        
      </div>
    </div>
  );
}

export default App;

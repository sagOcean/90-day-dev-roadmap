import { useRef } from "react";
import { motion} from "motion/react";

function App() {
  const constraintsRef = useRef(null);
  return (
    <>
      <div
        ref={constraintsRef}
        className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6"
      >
        <motion.div
          
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          dragSnapToOrigin
          className="flex flex-col items-center justify-left p-2 bg-zinc-800 h-70 w-90 rounded-lg border border-zinc-600 tracking-tight gap-4"
          whileDrag={{scale:1.05}}
        >
          <h1
            
            className="text-4xl font-bold "
          >
            this is a div
          </h1>
          <p className="text-zinc-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur autem possimus harum repellat odio soluta a eos minima
            iusto nobis expedita eum asperiores sequi, tempore adipisci
            doloribus dolorum voluptate dolores nulla maiores nostrum corporis
            natus!
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default App;

2nd November, 2026

Today I used useState on day-16 hero section. I used it to change the color and text of two buttons: Start project and View work. I used it like this:
#for "Start Project" button:

    const [isUnlocked,setIsUnlocked]=useState(false)
    <motion.button
              onClick={()=>setIsUnlocked(!isUnlocked)}
              whileHover={{scale:1.03}}
              whileTap={{scale:0.95}}
              className="rounded-full bg-red-600 px-8 py-4 font-medium text-white shadow-lg shadow-indigo-500/25 cursor-pointer transition-colors hover:bg-indigo-500"

            >
              {isUnlocked?"Unlocked! 🚀":"Start project →"} // this changes based on the current value of isUnlocked.
 
    </motion.button>


#for "view work" button:

    const[isViewed,setIsViewed] = useState(false);
    <motion.button
            onClick={()=>setIsViewed(!isViewed)}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-4 font-medium text-zinc-300 cursor-pointer"
            style={{backgroundColor: isViewed?"#00ff00":"#ff0000", color:isViewed?"#000000":"#ffffff"}} // this will change the bgcolor
            
            >
             {isViewed?"Viewed successfully":"View work"} // this will change the text
    </motion.button>

You can see the full code on App.jsx. What I felt easy about this is that we can use useState to change the properties of respective element and in framer motion, it can be done inline without writing custom CSS(cuz tailwind,duhh)!
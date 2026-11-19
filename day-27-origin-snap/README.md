18th November, 2026

I learned how to use useRef and dragConstraints together. You know that I had used dragConstraints yesterday too but the problem was that manual typing of coordinates in order to control drag movements. But when useRef is used along with dragConstraints, it automatically handles the drag problem(the infinity case).

In order to use useRef, we need to write this on the top:
            import { useRef } from "react";

then, on App() function, add this line: 
        const constraintsRef = useRef(null); // you can name it anything you like

On the parent div/container, add this in order to use it:
        ref={constraintsRef} 

then, on child div/elements, you can add these:
        drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}//set whatever you like
          dragSnapToOrigin // this will put that element in the original place once you leave cursor


19th November, 2026

I didnt feel like doing anything but I checked and reviewed my yesterday's code, the bare minimum.

import {  IconButton} from '@mui/material'
import { useRef, useState, useEffect } from "react";
function Scroll() {
 
    const ref = useRef();
  
    const [pos, setPos] = useState(false);
  
    const handleTop = () => {
      ref.current.scrollTop = 0;
      setPos(false);
    };
  
    const handleScroll = () => {
      if (ref.current.scrollTop > 50) {
        if (!pos) setPos(true);
      } else {
        if (pos) setPos(false);
      }
    };
  
    useEffect(() => {
      const temp = ref.current;
      temp.addEventListener("scroll", handleScroll);
      return () => temp.removeEventListener("scroll", handleScroll);
    });
  return (
    <div className="App">
   
    
    <IconButton
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        display: pos ? "block" : "none"
      }}
      onClick={handleTop}
    >
      Up
    </IconButton>
  </div>
    
    
  )
}

export default Scroll
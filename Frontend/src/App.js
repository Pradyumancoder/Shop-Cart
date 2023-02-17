
import { useState } from "react";
import intro from './assert/introGif/intro.gif'
import { AllRoute } from "./Routers/AllRoute";


function App() {
  const [loading,setLoading]=useState(false)

  setTimeout(()=>{
    setLoading(true)
  },3000)
  return (
    <div>
    {loading? <AllRoute/>:<div className="flex justify-center ">
     
    <img src={intro} alt="intro" />
      
      </div>}
    </div>
  );
}

export default App;

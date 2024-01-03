import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pools from "./pages/Pools"



function App() {
  

  return (
    <div>

      <Routes>
        
   <Route path="/" element={<Home />} />

   <Route path="pool" element={<Pools />} />

   
     {/* <Home />
     <Pools /> */}

    </Routes>
    </div>
  )
}

export default App

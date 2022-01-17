import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Changes from "./Pages/Change/Change";
import Home from "./Pages/Home/Home";
// import Changes from "./Pages/Change/Change";



function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Details/:id/" element={<Changes/>}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;

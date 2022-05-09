import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Vintage from "./Vintage";
import Modern from "./Modern";
import Novelty from "./Novelty";
import All from "./All";


function Pages() {
    const location = useLocation();
    return(
    <> 
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname} >
          <Route path="/" element={<Home />} />
          <Route path="/src/pages/Vintage.jsx" element={<Vintage />} />
          <Route path="/src/pages/Modern.jsx" element={<Modern /> } />
          <Route path="/src/pages/Novelty.jsx" element={<Novelty /> } />
          <Route path="/src/pages/All.jsx" element={<All /> } />
        </Routes>
      </AnimatePresence>
      </>
    )



}

export default Pages;
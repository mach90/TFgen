import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import TravelFormGenerator from "./pages/TravelFormGenerator";
import PageNotFound from "./pages/PageNotFound";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/travelformgenerator" element={<TravelFormGenerator />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
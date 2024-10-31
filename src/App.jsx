/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
// import PageAbout from "./pages/PageAbout";
// import PagePrivacy from "./pages/PagePrivacy";
import PageForm from "./pages/PageForm";
import Page404 from "./pages/Page404";
import './index.css';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
APP COMPONENT with Routes
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        {/* <Route path="/about" element={<PageAbout />} />
        <Route path="/privacy" element={<PagePrivacy />} /> */}
        <Route path="/form" element={<PageForm />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
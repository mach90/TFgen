//////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////////
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./ui/PublicRoute";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";
import "./index.css";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// APP / ROUTES
//////////////////////////////////////////////////////////////////////////////////////////////////////
export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute><AppLayout/></PublicRoute>}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
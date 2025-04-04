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
import { Toaster } from "react-hot-toast";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// APP / ROUTES
//////////////////////////////////////////////////////////////////////////////////////////////////////
export default function App(){
  return (
    <>
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

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#fff',
            color: '#3d3d3d',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
  )
}
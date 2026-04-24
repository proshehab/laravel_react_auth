import { Route, Routes, } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./components/backend/Login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/backend/Dashboard";

function App() {
  
  return (
    <>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    
     <ToastContainer
      position="top-right"
     />
    </>
  )
}

export default App

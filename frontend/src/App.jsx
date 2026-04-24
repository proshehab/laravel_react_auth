import { Route, Routes, } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./components/backend/Login"
import { ToastContainer, toast } from 'react-toastify';



function App() {
  

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
      </Routes>
    
     <ToastContainer
      position="top-right"
     />
      
    </>
  )
}

export default App


import './App.css'
import Login from './Components/login'
import ResetPasswordForm from './Components/Password Reset/resetPassForm'
import Verify from './Components/Password Reset/verify'
import ResetPass from './Components/Password Reset/resetPass'
import { Routes, Route } from "react-router-dom"
import RegistrationForm from './Components/Register'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/passreset" element={<ResetPass/>}/>
        <Route path="/verifypass" element={<Verify/>}/>
        <Route path="/passResetForm" element={<ResetPasswordForm/>}/>
      </Routes>
    </>
  )
}

export default App

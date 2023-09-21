import axios from "axios";
import { useEffect, useState } from "react";
import { Url } from "../Url";
import { useNavigate, useSearchParams } from "react-router-dom";

const PasswordVerify = () => {
  
  const [params,]=useSearchParams()

  const [verificationStatus, setVerificationStatus] = useState('');

  const navigate = useNavigate()

  

  const verifyingApi = async () => {
    try {
      await axios.post(`${Url}api/tokenVerify`, { token:params.get("token") })
      localStorage.setItem("verifyToken",params.get("token"))
      navigate("/passResetForm")
    } catch (err) {
      console.log(err)
      setVerificationStatus('Token is invalid.');
    }


  }

useEffect(()=>{
  verifyingApi()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (


    <div className="container mt-5 pt-5">
      
            
              <p>{verificationStatus}</p>
         
    </div>
  );
}

export default PasswordVerify;
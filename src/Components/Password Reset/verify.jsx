import axios from "axios";
import { useEffect } from "react";
import { Url } from "../Url";
import { useNavigate, useSearchParams } from "react-router-dom";

const PasswordVerify = () => {
  
  const [params,]=useSearchParams()

 

  const navigate = useNavigate()

  

  const verifyingApi = async () => {
    try {
      await axios.post(`${Url}api/tokenVerify`, { token:params.get("token") })
      localStorage.setItem("verifyToken",params.get("token"))
      navigate("/passwordForm")
    } catch (err) {
      console.log(err)
     
    }


  }

useEffect(()=>{
  verifyingApi()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
<>
</>

  );
}

export default PasswordVerify;


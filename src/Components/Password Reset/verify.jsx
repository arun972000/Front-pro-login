import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Verify = () => {
  const [params] = useSearchParams();
  const [verified, setVerified] = useState(false);
  const navigate=useNavigate()



  useEffect(() => {
    const resetToken = localStorage.getItem("resetToken");
    const paramsToken = params.get('token');
    
    if (resetToken === paramsToken) {
      setVerified(true);
    }
  }, [params]);

  return (
    <div>
      {verified ? navigate("/passResetForm") : "not verified"}
    </div>
  );
}

export default Verify;

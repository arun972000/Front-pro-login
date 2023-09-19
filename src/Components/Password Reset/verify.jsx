import axios from "axios";
import { useState } from "react";
import { Url } from "../Url";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [token, setToken] = useState('');

  const [verificationStatus, setVerificationStatus] = useState('');

  const navigate = useNavigate()

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const verifyingApi = async () => {
    try {
      await axios.post(`${Url}api/tokenVerify`, { token })
      localStorage.setItem("verifyToken",token)
      navigate("/passResetForm")
    } catch (err) {
      console.log(err)
      setVerificationStatus('Token is invalid.');
    }


  }

  const handleVerifyToken = () => {
    verifyingApi()

  }
  return (


    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card"><div className="card-body">
            <h1>Token Verification</h1>
            <div className="mb-3">
              <label htmlFor="tokenInput" className="form-label">
                Enter Token:
              </label>
              <input
                type="text"
                className="form-control"
                id="tokenInput"
                value={token}
                onChange={handleTokenChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleVerifyToken}>
              Verify Token
            </button>
            <div className="mt-3">
              <p>{verificationStatus}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;

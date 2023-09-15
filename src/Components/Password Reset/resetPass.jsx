import axios from "axios"
import { Url } from "../Url"
import { useNavigate } from "react-router-dom"
// import Verify from "./verify"

import { useState } from "react"

const ResetPass = () => {
  const [email, setemail] = useState("")
  const navigate=useNavigate()

  const passreset = async () => {
    try{
      const res = await axios.post(`${Url}api/resetPass`, { email })
      const {token}=res.data;
      console.log(token)
      alert("please check your mail inbox to verify")
      navigate("/")
    }catch(err){
      alert("enter valid email")
    }

  }


  return (
    
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control mb-3" name="email" value={email} placeholder="Enter Registered Email" onChange={(e) => setemail(e.target.value)}
                    id="email" />
                    <div className="text-center">
                    <button className="btn btn-primary" onClick={passreset}>submit</button>
                    {/* {token && <Verify token={token}/>} */}
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
   
  )
}

export default ResetPass


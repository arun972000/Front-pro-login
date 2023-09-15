import { useEffect, useState } from "react";
import axios from "axios"
import { Url } from "../Url";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const requestData = {
    email,
    password,
    confirmPassword,
  };

  const updatePass = async () => {
    await axios.put(`${Url}api/updateUser`, requestData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password == confirmPassword) {
      updatePass()
      alert("Password changed successfully")
      navigate("/")
    } else {
      alert("both password field should be same")
    }
  };

  useEffect(() => {
    localStorage.removeItem("resetToken")
  })

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card">
            <div className="card-body">
              <h2>Reset Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter a new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ResetPasswordForm;

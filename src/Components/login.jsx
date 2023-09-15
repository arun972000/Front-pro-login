import { Link } from "react-router-dom";
import "./login.css"
import { Url } from "./Url";
import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const apilog = async () => {
        try {
            await axios.post(`${Url}api/login`, formData)
            alert("Login success");
        } catch (err) {
            alert("invalid password or email")
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        apilog()

    };
    return (
        <section className="form my-4 mx-5">
            <div className="container mt-5 pt-5">
                <div className="row">

                    <div className="col-12 col-sm-8 col-md-6 m-auto" >
                        <div className="card">
                            <div className="card-body">
                                <h2 className="font-weight-bold-py-3 text-center">Login</h2>
                                <form>

                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <Link to="/passreset">  < p>Forgot Password?</p></Link>
                                    </div>
                                    <div className="text-center">
                                        <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <div className="mt-3">
                                    <p>Dont have an account? <Link to="/register">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 px-5 pt-5">

                    </div>
                </div>
            </div>
        </section>

    );
}

export default Login;

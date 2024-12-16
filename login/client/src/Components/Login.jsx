import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import("./style/login.css");

function Login() {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({ email: "", password: "" });

  const handalChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handalSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.status === "OK") {
        localStorage.setItem("token", response.data.message)
        navigate("/dashbord")
      }
    } catch (error) {}
  };

  return (
    <div className="body-nev">
      <div className="wrapper">
        <h2>Log In</h2>
        <form onSubmit={handalSubmit}>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formdata.email}
              onChange={handalChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formdata.password}
              onChange={handalChange}
              required
            />
          </div>
          <div className="input-box button">
            <input type="Submit" />
          </div>
          <div className="text">
            <h3 className="flex">
              Don't have an account?{" "}
              <div
                onClick={() => navigate("/signup")}
                className="text-blue-700"
              >
                Sing Up..!!
              </div>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

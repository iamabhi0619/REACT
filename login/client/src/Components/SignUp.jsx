import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/login.css";

function SignUp() {
  const blankdata = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    agreement: false,
  };
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState(blankdata);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (countdown === 0) {
      navigate("/login");
    }
  }, [countdown, navigate]);

  const handleSubmit = async (e) => {
    setMessage("");
    e.preventDefault();
    if (formdata.password !== formdata.cpassword) {
      setMessage("Password is mismatched");
    } else if (!formdata.agreement) {
      setMessage("Not agreed to terms & condition");
    } else {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/signup",
          formdata,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setMessage("");
        setCountdown(3);
      } catch (error) {
        console.error(error);
        setMessage("Error during registration");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="body-nev">
      <div className="wrapper">
        <div className="flex flex-row">
          <h3 className="text-lg text-red-700">{message}</h3>
          {countdown !== null && countdown > 0 && (
            <h3 className="text-lg text-red-700">
              Redirect to login {countdown} seconds...
            </h3>
          )}
        </div>

        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formdata.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              value={formdata.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formdata.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm password"
              value={formdata.cpassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="policy">
            <input
              type="checkbox"
              name="agreement"
              checked={formdata.agreement}
              onChange={handleChange}
            />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="input-box button">
            <input
              type="submit"
              value={loading ? "Submitting..." : "Submit"}
              disabled={loading}
            />
          </div>
          <div className="text">
            <h3 className="flex">
              Already have an account?
              <div
                onClick={() => navigate("/login")}
                className="text-blue-700 cursor-pointer"
              >
                {" "}
                Login now
              </div>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

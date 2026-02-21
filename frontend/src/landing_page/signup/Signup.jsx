import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [inputVlaue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const { name, email, password, phone } = inputVlaue;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/signup", {
        ...inputVlaue,
      });
      toast.success(response.data.message);
      // console.log(response.data);
      // navigate("/")
      // dusre kahi aur folder pr redirect krne ka taricka koi bhhi folder ya another project bhi
      setTimeout(() => {
        window.location.href = "http://localhost:5173/";
      }, 1000);
      setInputValue({
        name: "",
        email: "",
        password: "",
        phone: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log("signup error", error.message);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputVlaue, [name]: value });
  };
  return (
    <div className="container">
      <div className="row p-4 border  form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="enter your name..."
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="enter your email..."
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="enter your password..."
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone number:</label>
            <input
              type="number"
              placeholder="enter your number..."
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary px-5 fs-5 mt-2 mb-3 py-2">
            Sign up
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;

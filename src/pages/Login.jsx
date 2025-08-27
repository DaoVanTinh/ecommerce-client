import { useState } from "react";
import React from "react";
import loginBanner from "../assets/loginbanner.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login thành công!");
        navigate("/");
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (err) {
      setMessage("Lỗi server!");
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center relative">
        <img
          src={loginBanner}
          alt="banner"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="w-1/2 flex items-start justify-end bg-white">
        <form onSubmit={handleSubmit} className="mt-[220px] mr-[160px]">
          <div className="mb-8">
            <h2 className="font-poppins font-medium text-[40px] leading-[44px] tracking-[-0.4px] text-black mb-6">
              Đăng Nhập
            </h2>
            <div className="flex">
              <p className="text-[#6C7275] mr-1">Bạn chưa có tài khoản?</p>
              <span
                className="text-[#38CB89] cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Đăng ký
              </span>
            </div>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#141718] text-white p-2 rounded hover:bg-[#232628] cursor-pointer"
          >
            Đăng Nhập
          </button>

          {message && (
            <p className="mt-3 text-center text-sm text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

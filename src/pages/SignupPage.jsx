import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email");
      return;
    }
    setEmailError("");
    navigate("/home");
  };

  return (
    <div className="auth-screen flex flex-col md:flex-row w-full h-screen overflow-hidden">
     
      <div className="w-full md:w-1/2 h-full">
        <img
          src="/rays.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white">
        <div
          style={{ width: "558.25px" }}
          className="p-10 h-full flex flex-col justify-center"
         
        >
         <h2 className="text-2xl font-bold text-center mb-6">SIGN UP NOW</h2>

      
          <button
            type="button"
            className="w-full border border-gray-300 py-2 rounded-full flex items-center justify-center gap-2 mb-4 hover:shadow-md"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

         
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-3 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-black"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-black"
              />
            </div>

      
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border ${
                  emailError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-purple-600"
                } rounded-full focus:outline-none focus:ring-2 placeholder-black`}
              />
              {emailError && (
                <p className="text-sm text-red-600 mt-1">{emailError}</p>
              )}
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of birth
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Month"
                  className="w-1/3 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-black"
                />
                <input
                  type="text"
                  placeholder="Date"
                  className="w-1/3 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-black"
                />
                <input
                  type="text"
                  placeholder="Year"
                  className="w-1/3 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-black"
                />
              </div>
            </div>

            
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-black"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use 8 or more characters with a mix of letters and symbols
              </p>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>
                  By creating an account, I agree to{" "}
                  <span className="text-purple-700 font-medium hover:underline cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-purple-700 font-medium hover:underline cursor-pointer">
                    T&C.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                I am legit 18+ years old as of today’s date.
              </label>
            </div>

          
            <button
              type="submit"
              className="w-full bg-purple-800 text-white py-2 rounded-full hover:bg-purple-900 transition"
            >
              SIGN UP
            </button>
          </form>

          
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-700 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
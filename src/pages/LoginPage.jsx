import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/atoms/header";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="auth-screen h-screen flex flex-col bg-white overflow-hidden">
      {/* Header stays fixed height */}
      <Header />

      {/* ✅ Fill remaining height without scroll */}
      <main className="flex flex-1 w-full flex-col lg:flex-row h-[calc(100vh-80px)]">
        
        {/* ✅ Hide image on mobile, show full height on laptop */}
        <div className="hidden lg:block lg:w-1/2 h-full">
          <img
            src="/rays.png"
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* ✅ Form column fills height */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 sm:p-6 lg:p-10 h-full">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center">
            <Header text="WELCOME AGAIN" className="text-center mb-6" />

            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-full flex items-center justify-center gap-2 mb-4 hover:shadow-md"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
                  placeholder="example@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-gray-600 hover:underline"
                >
                  Forgot Password
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-800 text-white py-3 rounded-full hover:bg-purple-900 transition text-base font-medium"
              >
                LOG IN
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-700 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

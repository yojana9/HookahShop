import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
    

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full text-center">
          <p className="text-sm font-semibold text-purple-800">404</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
            Page not found
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            The page you’re looking for doesn’t exist or was moved.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-purple-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-purple-800"
            >
              Go to Homepage
            </Link>
            
          </div>

          {/* Optional: small helper text */}
          <p className="mt-6 text-xs text-neutral-500">
            If you typed the URL, double-check the spelling.
          </p>
        </div>
      </main>

    
    </div>
  );
}

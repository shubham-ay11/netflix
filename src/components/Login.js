import React, { isValidElement, useState,useRef } from "react";
import Header from "./Header";
import { Formik } from "formik";
import { checkValidation } from "../utlis/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignUp = () => {
    // reverse of isSignIn means !isSignIn
    setIsSignIn(!isSignIn);
  };
const email= useRef(null);
const password= useRef(null);
  const handleButtonClick = () =>{
const message =checkValidation(email.current.value,password.current.value);
if(message) setErrorMessage(message);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-image"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-gray-700 "
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 "
        />
<p className="font-bold text-red-500">{errorMessage}</p>
        <button  className="p-4 my-6 bg-red-700 w-full rounded-xl" onClick={handleButtonClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 font-bold cursor-pointer" onClick={toggleSignUp}>
          {isSignIn
            ? "New to Netflix ? Sign Up Npw"
            : "Already Register ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

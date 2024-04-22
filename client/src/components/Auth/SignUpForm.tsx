import React, { useState, useEffect, ChangeEvent } from "react";
import { FloatingLabel } from "flowbite-react";

interface SignUpFormProps {
  toggleForm: () => void;
}
const SignUpForm = ({toggleForm}: SignUpFormProps) => {  
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFullName(e.target.value);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleConfirmPasswordInput = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubmit = () => {};
  return (
    <div className=" w-full mx-auto px-[17%] my-auto ">
      <div className="flex flex-col gap-3 mb-3">
        <h1 className="text-4xl text-center font-bold text-[#17252A]">
          Create a new account
        </h1>
        <h1 className=" opacity-40 text-center ">
          Join ProEx, Unlock Possibilities Together
        </h1>
      </div>
      <form className="flex flex-col">
        <div className="flex flex-col gap-5">
          <FloatingLabel
            type="text"
            variant="outlined"
            label="Full name"
            value={fullName}
            onChange={handleUserInput}
            required
          />
          <FloatingLabel
            type="text"
            variant="outlined"
            label="Email"
            value={email}
            onChange={handleEmailInput}
            required
          />
          <div className="grid grid-cols-2 gap-5">
            <FloatingLabel
              type="password"
              variant="outlined"
              label="Password"
              value={password}
              onChange={handlePasswordInput}
              required
            />
            <FloatingLabel
              type="password"
              variant="outlined"
              label="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordInput}
              required
            />
          </div>
        </div>
        <button
          className="btn btn-active mx-auto text-lg btn-neutral mt-5 md:w-[60%] px-1"
          onClick={handleSubmit}
        >
          Sign up
        </button>

        <div className="divider">OR</div>

        <h1 className="text-start">
          I already have an account,{" "}
          <span className="opacity-50 hover:cursor-pointer" onClick={toggleForm}>Sign in</span>
        </h1>
      </form>
    </div>
  );
}

export default SignUpForm

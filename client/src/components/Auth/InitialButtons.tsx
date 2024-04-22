import React from "react";

interface InitialButtonsProps {
  showLoginForm: () => void;
  showSignupForm: () => void;
}

const InitialButtons: React.FC<InitialButtonsProps> = ({ showLoginForm, showSignupForm }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-center">Join ProEx, Unlock Possibilities Together</p>
      <p className="text-center">Sign up or sign in to get started.</p>
      <br />
      <button className="btn bg-black w-full rounded-2xl text-white hover:bg-zinc-600 h-[10%]" onClick={showLoginForm}>Sign in</button>
      <div className="divider"></div>
      <button className="btn btn-active rounded-2xl" onClick={showSignupForm}>Create an Account</button>
    </div>
  );
};

export default InitialButtons;

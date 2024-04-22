import React from 'react';

interface NewSignupProps {
  showLoginForm: () => void;
}

const NewSignup: React.FC<NewSignupProps> = ({ showLoginForm }) => {
  return (
    <div className='flex flex-col gap-2 justify-center'>
      <p className="text-center">Join ProEx, Unlock Possibilities Together</p>
      <input type="text" placeholder="Email" className="input input-bordered rounded-2xl input-accent w-full" />
      <input type="text" placeholder="Password" className="input input-bordered rounded-2xl input-accent w-full" />
      <input type="text" placeholder="Confirm password" className="input input-bordered rounded-2xl input-accent w-full" />

      <button className="btn bg-white shadow-md w-full rounded-2xl hover:bg-slate-50" onClick={showLoginForm}>Sign up</button>
    </div>
  );
};

export default NewSignup;

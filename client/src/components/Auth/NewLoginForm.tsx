import React from 'react'

const NewLoginForm = () => {
  return (
    <div className='flex flex-col gap-2 justify-center'>
      <input type="text" placeholder="Email" className="input input-bordered rounded-2xl input-accent w-full" />
      <input type="text" placeholder="Password" className="input input-bordered rounded-2xl input-accent w-full" />

      <button className="btn bg-white shadow-md w-full rounded-2xl hover:bg-slate-50 ">Sign in</button>
    </div>
  )
}

export default NewLoginForm

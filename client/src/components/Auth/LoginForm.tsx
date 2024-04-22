import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import { FloatingLabel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
 
interface LoginFormProp{
  toggleForm: () => void
}

export default function LoginForm({toggleForm}: LoginFormProp) {
  // const dispatch = useDispatch()
  // const navigate = useNavigate();
  // const userRef = useRef(null);

  // useEffect(() => {
  //     userRef.current?.focus()
  // }, [])


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [login, { isLoading }] = useLoginMutation()

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) =>
    {
      console.log(e.target.value)
      setUsername(e.target.value);
    }
  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  //const handlePasswordInput = e => setPassword(e.target.value)

  const handleSubmit = () => {};
  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         const user = new FormData();
  //         user.append('username', username);
  //         user.append('password', password);
  //         const userData = await login(user).unwrap();

  //         dispatch(setCredentials(userData));
  //         console.log(userData)
  //         setUsername('');
  //         setPassword('');

  //         if ( userData.role.toString().toUpperCase() === "ADMINCLUB" ) {
  //             navigate(`/president/${userData.clubId}`);
  //         } else if (userData.role.toString().toUpperCase() === "ADMIN") {
  //             navigate('/admin');
  //         } else {
  //             navigate('/');
  //         }

  //     } catch (error) {
  //         console.error('Log in failed:', error);
  //         toast.error('Login failed. Please check your credentials.');
  //     }
  // };

  return (
    <div className=" w-full mx-auto px-[17%] my-auto ">
      <div className="flex flex-col gap-3 mb-3">
        <h1 className="text-4xl text-center font-bold text-[#17252A]">
          Log in to your account
        </h1>
        <h1 className=" opacity-40 text-center ">
          Please login to your Pro-Ex account
        </h1>
      </div>
      <form className="flex flex-col">
        <div className="flex flex-col gap-5">
          <FloatingLabel
            type="text"
            variant="outlined"
            label="Username"
            value={username}
            onChange={handleUserInput}
          />
          <FloatingLabel
            type="password"
            variant="outlined"
            label="Password"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
          <button
            className="btn btn-active mx-auto text-lg btn-neutral mt-5 md:w-[60%] px-1"
            onClick={handleSubmit}
          >
            Login
          </button>

        <div className="divider">OR</div>

        <div className="flex flex-row justify-between items-center px-[2%]">
          <h1 className=" opacity-40 text-center ">Don't have an account?</h1>
          <button className="btn btn-active" onClick={toggleForm}>SignUp</button>
        </div>
      </form>
    </div>
  );
}

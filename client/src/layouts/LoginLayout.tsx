import NewLogin from "../components/Auth/NewLogin.tsx";
import bg from "/bg.png";
const LoginLayout = () => {
  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent from-40% to-90%"></div>
      <div className="flex flex-col items-center justify-center w-full h-full z-10">
        <NewLogin />
      </div>
    </div>
  );
};

export default LoginLayout;
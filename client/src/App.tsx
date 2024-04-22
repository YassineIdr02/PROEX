import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import UserLayout from "./layouts/UserLayout";
import NotFound from "./layouts/NotFound";
import ProjectInfo from "./components/UserComponents/ProjectInfo";
import ProjectCards from "./components/UserComponents/ProjectCards";
import Profile from "./components/UserComponents/Profile";
import Payment from "./components/UserComponents/Payment";
import PaymentLayout from "./layouts/PaymentLayout";
import LandingPage from "./components/Landing/LandingPage";
import LoginLayout from "./layouts/LoginLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />}/>
      <Route path="login" element={<LoginLayout />} />

      <Route path="projects" element={<UserLayout />}>
        <Route index element={<ProjectCards />} />
        <Route path=":projectId" element={<ProjectInfo />} />
        <Route path="profile/:userId" element={<Profile />} />
      </Route>

      <Route path="/payment" element={<PaymentLayout />}>
        <Route index element={<Payment />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

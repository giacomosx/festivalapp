import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UserDashboard from "./pages/UserDashboard";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={'/'} element={<Homepage />} />
        <Route path={'/calendar'} element={<Calendar />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={'/dashboard/home'} element={<UserDashboard />} />
          <Route path={'/dashboard/settings'} element={<Settings />} />
          <Route path={'/dashboard/users'} element={<Users />} />
          <Route path={'/community/profile/:id'} element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

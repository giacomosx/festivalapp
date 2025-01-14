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
import Festivals from "./pages/Festivals";
import SingleFestival from "./pages/SingleFestival";
import Group from "./pages/Group";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={'/'} element={<Homepage />} />
        <Route path={'/calendar'} element={<Calendar />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/festivals'} element={<Festivals />} />
        <Route path={'/festivals/:slug'} element={<SingleFestival />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={'/dashboard/home'} element={<UserDashboard />} />
          <Route path={'/dashboard/users'} element={<Users />} />
          <Route path={'/dashboard/settings'} element={<Settings />} />
          <Route path={'/community/profile/:id'} element={<UserProfile />} />
          <Route path={'/groups/:id'} element={<Group />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

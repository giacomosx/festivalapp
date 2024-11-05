import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UserDashboard from "./pages/UserDashboard";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<Homepage />} />
          <Route path={'/me/home'} element={<UserDashboard />} />
          <Route path={'/calendar'} element={<Calendar />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

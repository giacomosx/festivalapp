import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UserDashboard from "./pages/UserDashboard";
import Calendar from "./pages/Calendar";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<Homepage />} />
          <Route path={'/me/home'} element={<UserDashboard />} />
          <Route path={'/calendar'} element={<Calendar />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

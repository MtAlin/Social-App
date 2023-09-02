import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  PublicdRoutes,
  ProtectedRoutes,
} from "./hooks/protectedRoutes/ProtectedRoutes";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutContext from "./context/layoutContext/LayoutContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PRIVATE ROUTES */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<LayoutContext />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Route>
        {/* PUBLIC ROUTES */}
        <Route element={<PublicdRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Box } from "@mui/material";
import RegisterUser from "./Pages/RegisterUser";
import NavBar from "./Components/NavBar";
import LoginUser from "./Pages/LoginUser";
import Profile from "./Pages/Profile";
import { useSoftJobsContext } from "./Context/softJobs.Context";

export default function App() {
  const { autenticated } = useSoftJobsContext();
  return (
    <Box sx={{ backgroundColor: "#284B63", color: "white", height: "100vh" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {autenticated ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/login" element={<LoginUser />} />
        )}
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </Box>
  );
}

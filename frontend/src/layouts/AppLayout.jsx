import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

const AppLayout = () => {
  const location = useLocation();
  const loginPage = location.pathname === "/login";

  if (loginPage) {
    return <Outlet />;
  }

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Sidebar />

      <Box
        sx={{
          ml: "250px",
          width: "calc(100% - 250px)",
          
        }}
      >
        <Header />
        <Box sx={{ p: 2,  mt: 5 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;

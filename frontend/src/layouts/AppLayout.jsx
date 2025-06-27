import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  const location = useLocation();
  const loginPage = location.pathname === "/login";
  return (
    <Grid container>
      {!loginPage && (
        <>
          <Grid
            size={{ xs: 12, sm: 3, md: 3 }}
            sx={{ border: "3px solid red" }}
          >
            <Sidebar />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 9, md: 8 }}
            sx={{ border: "3px solid red" }}
          >
            <Header />
          </Grid>
        </>
      )}
      <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ border: "0px solid red" }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AppLayout;

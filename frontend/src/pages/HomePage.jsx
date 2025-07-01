import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Container, Typography } from "@mui/material";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        navigate("/dashboard");
        break;
      case "/gallery-home":
        navigate("/gallery");
        break;
      case "/latest-news":
        navigate("/news");
        break;
      // Add more cases as needed
      default:
        // Do nothing or handle fallback
        break;
    }
  }, [location.pathname, navigate]);

  return (
    <Stack sx={{ border: "2px solid blue",ml:250, width:'cacl(100%-250)' }}>
      <Container sx={{ border: "2px solid blue", py: 10 }}>
        {/* You can show a loader or message while redirecting */}
        <Typography sx={{textAlign:'center',}} variant="h1">{location.pathname}</Typography>
      </Container>
    </Stack>
  );
};

export default HomePage;

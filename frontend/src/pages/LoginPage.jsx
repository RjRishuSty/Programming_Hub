import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import { flexCenter } from "../styles/customStyles";
import LoginInputs from "../components/loginInputs";
import { enqueueSnackbar } from "notistack";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log("InLoginPage", formData);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleInputValidate = () => {
    if (!formData.email || !formData.password) {
      enqueueSnackbar("All fields are required.", { variant: "error" });
      return false;
    }
    if (formData.password.length < 6) {
      enqueueSnackbar("Invalid password.", { variant: "error" });
      return false;
    }
    return true;
  };

  const handlerFormSubmit = async(e) => {
    e.preventDefault();
    if (!handleInputValidate()) return;
    
    try {
      
      enqueueSnackbar("Login Successfully", { variant: "success" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack sx={{ minHeight: "100vh", ...flexCenter }}>
      <Container maxWidth="sm" sx={{ py:5,boxShadow:'0px 0px 5px #ccc',borderRadius:2}}>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center',fontWeight:600}}>Login Admin Panel</Typography>
      <Typography variant="body2" sx={{textAlign:'center'}} gutterBottom>Access your admin dashboard by securely logging in. Manage content, users, and system settings with full control.</Typography>
        <Box component='form' onSubmit={handlerFormSubmit} sx={{ width: "100%", p:1,py:4,...flexCenter,flexDirection:'column' }}>
          <LoginInputs
            handleInputChange={handleInputChange}
            formData={formData}
          />
          <Button type="submit" variant="contained" size="large">
            Login Admin Panel
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default LoginPage;

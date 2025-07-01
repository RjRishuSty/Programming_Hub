import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { api } from "../lib/api";
import { flexCenter } from "../styles/customStyles";
import LoginInputs from "../components/loginInputs";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { checkAuthHandler } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleInputValidate = () => {
    if (!formData.email || !formData.password) {
      enqueueSnackbar("All fields are required.", { variant: "error" });
      return false;
    }
    if (formData.password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters long.", {
        variant: "error",
      });
      return false;
    }
    return true;
  };

  const handlerFormSubmit = async (e) => {
    e.preventDefault();
    if (!handleInputValidate()) return;

    try {
      setIsLoading(true);
      const submitDataResponse = await axios.post(
        `${api}/api/auth/login`,
        formData,
        { withCredentials: true }
      );
      enqueueSnackbar(submitDataResponse.data.message, { variant: "success" });
      //*
      await checkAuthHandler();
      navigate("/");
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack sx={{ minHeight: "100vh", ...flexCenter,backgroundColor:'background.paper' }}>
      <Container
        maxWidth="sm"
        sx={{ py: 5, boxShadow: "0px 0px 5px #ccc", borderRadius: 2 ,backgroundColor:'background.default'}}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: 600 }}
        >
          Login Admin Panel
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }} gutterBottom>
          Access your admin dashboard by securely logging in. Manage content,
          users, and system settings with full control.
        </Typography>
        <Box
          component="form"
          onSubmit={handlerFormSubmit}
          sx={{
            width: "100%",
            p: 1,
            py: 4,
            ...flexCenter,
            flexDirection: "column",
            
          }}
        >
          <LoginInputs
            handleInputChange={handleInputChange}
            formData={formData}
          />
          <Button type="submit" variant="contained" size="large">
            {isLoading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              "Login Admin Panel"
            )}
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default LoginPage;

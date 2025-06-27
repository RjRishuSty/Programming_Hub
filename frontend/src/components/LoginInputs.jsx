import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const LoginInputs = ({ formData, handleInputChange }) => {

  const [togglePassword, setTogglePassword] = useState(false);

  const loginInputs = [
    {
      type: "email",
      name: "email",
      id: "email",
      required: true,
      label: "Email Address",
      placeholder: "Enter your email",
      icon: <EmailIcon />,
    },
    {
      type: "password",
      name: "password",
      id: "password",
      required: true,
      label: "Password",
      placeholder: "Enter your password",
      icon: <LockIcon />,
    },
  ];
  return (
    <>
      {loginInputs.map((input) => (
        <TextField
          key={input.id}
          type={
            input.type === "password"
              ? togglePassword
                ? "text"
                : "password"
              : input.type
          }
          name={input.name}
          id={input.id}
          label={input.label}
          placeholder={input.placeholder}
          required={input.required}
          value={formData[input.name]}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{input.icon}</InputAdornment>
            ),
            endAdornment:
              input.type === "password" ? (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setTogglePassword((prev) => !prev)}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {togglePassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ) : null,
          }}
        />
      ))}
    </>
  );
};

export default LoginInputs;

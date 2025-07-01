import { createTheme } from "@mui/material/styles";

// === Color Palettes ===
const lightPalette = {
  mode: "light",
  background: {
    default: "#FFFBDE",
    paper: "#90D1CA",
  },
  primary: {
    main: "#129990",
  },
  secondary: {
    main: "#096B68",
  },
  text: {
    primary: "#021526",
    secondary: "#03346E",
    icon: "#FFFBDE",
    default: "#000",
  },
  highlight: {
    isActive: "#e8fcfb",
    onhover: "#bbf7f3",
  },
};

const darkPalette = {
  mode: "dark",
  background: {
    default: "#1a1a1a",
    paper: "#4d4d4d",
  },
  primary: {
    main: "#ccc",
  },
  secondary: {
    main: "#E2E2B6",
  },
  text: {
    primary: "#E2E2B6",
    secondary: "#E2E2B6",
    icon: "#FFFBDE",
    default: "#fff",
  },
  highlight: {
    isActive: "#808080",
    onhover: "#404040",
  },
};

// === Create Themes ===
export const lightTheme = createTheme({
  palette: lightPalette,
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            color: "#000", // Input text color
          },
          "& .MuiInputLabel-root": {
            color: "#000", // Label color (default)
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#000", // Label color when focused
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000", // Border color (default)
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#000", // Border color on focus (use primary/secondary)
            },
          "& .MuiOutlinedInput-input::placeholder": {
            color: "#999", // Placeholder text color
            opacity: 1,
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: darkPalette,
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            color: "#fff",
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#fff",
            },
        },
      },
    },
  },
});

import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
  Paper,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { handlerLogout } = useContext(AuthContext);
  const { mode, toggleTheme } = useContext(ThemeContext);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "background.default",
        boxShadow: `0px 0px 5px ${mode==='light'?"black":"white"}`,
        px: 2,
        py: 0.5,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* <Typography variant="h6" fontWeight="bold">
          Admin Panel
        </Typography> */}

        <Paper
          component="form"
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: 500,
            boxShadow: "none",
            border: "1px solid #ccc",
          }}
        >
          <SearchIcon />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title="Toggle Theme">
            <IconButton
              onClick={toggleTheme}
              sx={{
                backgroundColor: "background.paper",
                color: "text.secondary",
                "&:hover": { backgroundColor: "highlight.onhover" },
              }}
            >
              {mode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>

          {/* Fullscreen Toggle */}
          <Tooltip title="Toggle Fullscreen">
            <IconButton
              onClick={handleToggleFullscreen}
              sx={{
                backgroundColor: "background.paper",
                color: "text.secondary",
                "&:hover": { backgroundColor: "highlight.onhover" },
              }}
            >
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Tooltip>

          {/* Profile */}
          <Tooltip title="Account">
            <IconButton onClick={handleProfileMenu} sx={{backgroundColor:'background.paper'}} >
              <Avatar sx={{ bgcolor: "background.paper", color:'text.secondary', width: 30, height: 30 }}>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Tooltip>

          {/* Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu} sx={{color:'text.secondary'}}>Profile</MenuItem>
            <MenuItem sx={{color:'text.secondary'}}
              onClick={() => {
                handleCloseMenu();
                handlerLogout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

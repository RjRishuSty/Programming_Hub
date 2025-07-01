import React from "react";
import {
  Box,
  Collapse,
  ListItemIcon,
  ListItemText,
  Typography,
  ButtonBase,
} from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const DropDownMenu = ({ item, index, openIndex, setOpenIndex }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isOpen = openIndex === index;

  // Check if any subItem matches current location
  const isParentActive = item.menu.some(
    (subItem) => location.pathname === subItem.path
  );

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenIndex(null); // Close after selection (optional)
  };

  return (
    <Box>
      {/* Dropdown button */}
      <ButtonBase
        onClick={handleToggle}
        sx={{
          color: isParentActive ? "text.secondary" : "text.primary",
          fontWeight: isParentActive ? "bold" : "normal",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          px: 2,
          py: 1.5,
          backgroundColor: isParentActive ? "highlight.isActive" : "",
          "&:hover": {
            backgroundColor: "highlight.onhover",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon sx={{ color: isParentActive ? "text.secondary" : "text.primary" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </Box>
        {isOpen ? (
          <ArrowDropUp fontSize="small" />
        ) : (
          <ArrowDropDown fontSize="small" />
        )}
      </ButtonBase>

      {/* Dropdown content */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {item.menu?.map((subItem) => {
          const isChildActive = location.pathname === subItem.path;
          return (
            <ButtonBase
              key={subItem.path}
              onClick={() => handleNavigate(subItem.path)}
              sx={{
                backgroundColor: isChildActive ? "highlight.isActive" : "background.paper",
                display: "flex",
                alignItems: "center",
                width: "100%",
                px: 4,
                py: 1,
                textAlign: "left",
                "&:hover": {
                  backgroundColor: "highlight.onhover",
                },
              }}
            >
              {subItem.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: 32,
                    color: isChildActive ? "text.secondary" : "text.primary",
                  }}
                >
                  {subItem.icon}
                </ListItemIcon>
              )}
              <Typography
                sx={{
                  color: isChildActive ? "text.secondary" : "text.primary",
                }}
              >
                {subItem.label}
              </Typography>
            </ButtonBase>
          );
        })}
      </Collapse>
    </Box>
  );
};

export default DropDownMenu;

import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useLocation, NavLink } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import { menuItems } from '../lib/sidebarMenuItems';

const Sidebar = () => {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);

  //* Auto close open menu if the current path doesn't match any of its children
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedIndex = menuItems.findIndex((item) =>
      item.menu?.some((subItem) => subItem.path === currentPath)
    );

    setOpenIndex(matchedIndex !== -1 ? matchedIndex : null);
  }, [location.pathname]);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: 'background.paper',
        },
      }}
    >
    <Typography gutterBottom variant='h5' sx={{textAlign:'center',py:1}}>Admin Panel</Typography>
      <List>
        {menuItems.map((item, index) =>
          item.menu ? (
            <DropDownMenu
              key={item.label}
              item={item}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ) : (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? 'text.secondary' : 'text.primary',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                '&.active': {
                  backgroundColor: 'highlight.isActive',
                },
                '&:hover': {
                  backgroundColor: 'highlight.onhover',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: location.pathname === item.path ? 'text.secondary' : 'text.primary',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          )
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;

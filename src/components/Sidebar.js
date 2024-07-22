import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#003366',
          color: 'white',
          height: 'calc(100vh - 150px)', // Reduced height
          top: '64px', // Adjust top position to push sidebar down
          bottom: 'auto', // Ensure bottom does not interfere
          overflowY: 'auto', // Optional: Make sidebar scrollable if needed
        },
      }}
    >
      <List>
        {['Dashboard', 'Users', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

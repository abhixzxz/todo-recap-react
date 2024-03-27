import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "../sidebar/sidebar";

const HeaderSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const handleToggleSidebar = () => {
    if (isSidebarOpen) {
      toggleSidebar();
    } else {
      toggleSidebar();
    }
  };

  return (
    <React.Fragment>
      <AppBar position="static" className="">
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleToggleSidebar}
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" style={{ marginLeft: "10px" }}>
              BRIX
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      {isSidebarOpen && <Sidebar />}
    </React.Fragment>
  );
};

export default HeaderSidebar;

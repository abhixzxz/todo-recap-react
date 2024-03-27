// App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SidebarRoutes from "./sidebarRoutes";
import HeaderSidebar from "./components/header/Header";
import MiniDrawer from "./components/sidebar/sidebar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="main-content">
          <MiniDrawer />
          <SidebarRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;

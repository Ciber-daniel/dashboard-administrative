import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./header.css";
import Drawer from "@material-ui/core/Drawer";

import Divider from "@material-ui/core/Divider";

import AvatarUser from "../../assets/img/avatar2.png";
import LogoutIcon from "../../assets/img/icon-logout.svg";
import ListDrawer from "../list/List-Drawer";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className="icon-button"
            aria-label="menu"
            color="inherit"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className="heading">
            <Typography variant="h6" color="inherit">
              Dashboard
            </Typography>
            <Typography variant="h4" color="inherit">
              Dashboard
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="left"
        open={openDrawer}
        onClick={handleDrawerClose}
      >
        <Divider />
        <div className="user-description">
          <img className="avatar" src={AvatarUser} />
          <div className="name-user">
            <span>Julio Besse</span>
            <p>Backuser</p>
            <div className="logout">
              <img src={LogoutIcon} />
              <p>Cerrar sesión</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="list-items">
          <ListDrawer />
        </div>
        <Divider />
        <div className="wrapper-footer">
          <footer>® Hooli | Todos los derechos reservados</footer>
        </div>
      </Drawer>
    </>
  );
}

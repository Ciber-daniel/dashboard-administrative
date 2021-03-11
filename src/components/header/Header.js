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
import LogoutIcon from "../../assets/icons/icon-logout.svg";
import ListDrawer from "../list/List-Drawer";
//utils
import { CircularButton } from "../utils/button/Circular";
// assets
import addIcon from "../../assets/icons/rediseño.svg";
import reload from "../../assets/icons/actualizar.svg";
import editar from "../../assets/icons/editar.svg";
import eliminar from "../../assets/icons/eliminar.svg";

export default function Header(props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="fixed">
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
              {props.description}
            </Typography>
            <Typography variant="h4" color="inherit">
              {props.wordKey}
            </Typography>
          </div>
        </Toolbar>
        <div className="icons-container">
          {window.location.pathname === "/" ? (
            ""
          ) : props.selectedStatus ? (
            <div>
              <CircularButton icon={editar} />
              <CircularButton icon={eliminar} />
              <span>1 registro</span>
            </div>
          ) : (
            <div>
              <CircularButton icon={addIcon} />
              <CircularButton icon={reload} />
              <span>1 registro</span>
            </div>
          )}
        </div>
      </AppBar>
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="left"
        open={openDrawer}
      >
        <Divider />
        <div className="user-description">
          <img className="avatar" alt="avatar" src={AvatarUser} />
          <div className="name-user">
            <span>Julio Besse</span>
            <p>Backuser</p>
            <div className="logout">
              <img src={LogoutIcon} alt="logout" />
              <p>Cerrar sesión</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="list-items">
          <ListDrawer callback={handleDrawerClose} />
        </div>
        <Divider />
        <div className="wrapper-footer">
          <footer>® Hooli | Todos los derechos reservados</footer>
        </div>
      </Drawer>
    </>
  );
}

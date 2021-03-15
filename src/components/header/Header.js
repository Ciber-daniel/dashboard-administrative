import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
// assets
import AvatarUser from "../../assets/img/avatar2.png";
import LogoutIcon from "../../assets/icons/icon-logout.svg";
import addIcon from "../../assets/icons/rediseño.svg";
import reload from "../../assets/icons/actualizar.svg";
import editar from "../../assets/icons/editar.svg";
import eliminar from "../../assets/icons/eliminar.svg";
import search from "../../assets/icons/search.svg";
// components
import ListDrawer from "../list/List-Drawer";
// services
import { refreshPage } from "../../services/Local-services";
// styles
import "./header.css";
//utils
import { CircularButton } from "../utils/button/Circular";

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
          ) : props.selectedStatus.status ? (
            <div>
              {window.location.pathname === "/insurers" ? (
                <div>
                  <CircularButton
                    text={"Ver brokers relacionados"}
                    icon={search}
                    setOpen={props.setOpenEdit}
                  />

                  <CircularButton
                    text={"Editar aseguradora"}
                    icon={editar}
                    setOpen={props.setOpenEdit}
                  />
                  <CircularButton
                    text={"Eliminar aseguradora"}
                    icon={eliminar}
                    setOpen={props.setOpenDelete}
                  />
                  <span>1 registro</span>
                </div>
              ) : (
                <div>
                  <CircularButton
                    text={"Editar marca"}
                    icon={editar}
                    setOpen={props.setOpenEdit}
                  />
                  <CircularButton
                    text={"Eliminar marca"}
                    icon={eliminar}
                    setOpen={props.setOpenDelete}
                  />
                  <span>1 registro</span>
                </div>
              )}
            </div>
          ) : (
            <div>
              {window.location.pathname === "/insurers" ? (
                <CircularButton
                  text={"Agregar aseguradora"}
                  icon={addIcon}
                  setOpen={props.setOpenAdd}
                />
              ) : (
                <CircularButton
                  text={"Agregar marca"}
                  icon={addIcon}
                  setOpen={props.setOpenAdd}
                />
              )}
              <CircularButton
                text={"Actualizar pagina"}
                icon={reload}
                setOpen={refreshPage}
              />
              <span>1 registro</span>
            </div>
          )}
        </div>
      </AppBar>
      <div className="content-drawer">
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
      </div>
      {openDrawer ? (
        <div
          className="drawer-handler"
          style={{
            height: "100%",
            width: "100vw",
            backgroundColor: "transparent",
            position: "absolute",
            zIndex: 1150,
            right: 0,
          }}
          onClick={() => {
            setOpenDrawer(false);
          }}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}

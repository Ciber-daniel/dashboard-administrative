import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./header.css";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import AvatarUser from "../../assets/img/avatar2.png";
import LogoutIcon from "../../assets/img/icon-logout.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleDrawerOpen = () => this.setState({ open: !this.state.open });
  handleDrawerClose = () => this.setState({ open: false });

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className="icon-button"
              aria-label="menu"
              color="inherit"
              onClick={this.handleDrawerOpen}
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
          open={this.state.open}
          onClick={this.handleDrawerClose}
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
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 4 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
          <Divider />
          <footer>hola</footer>
        </Drawer>
      </>
    );
  }
}

export default Header;

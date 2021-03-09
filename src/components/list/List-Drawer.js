import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import IconDashboard from "../../assets/img/icon-dashboard.svg";
import IconUsers from "../../assets/img/icon-users.svg";
import IconTables from "../../assets/img/icon-tables.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "2rem",
    paddingLeft: "1rem",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  itemList: {
    paddingBottom: theme.spacing(2),
  },

  iconsDrawer: {
    width: "1.6rem",
  },

  textColor: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "0.9rem",
  },
}));

export default function ListDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button className={classes.itemList}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconDashboard} alt="" />
        </ListItemIcon>
        <p className={classes.textColor}>Dashboard</p>
      </ListItem>
      <ListItem button className={classes.itemList}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconUsers} alt="" />
        </ListItemIcon>
        <p className={classes.textColor}>Usuarios Asegurados</p>
      </ListItem>
      <ListItem button className={classes.itemList} onClick={handleClick}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconTables} alt="" />
        </ListItemIcon>
        <p className={classes.textColor}>Tablas</p>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img className={classes.iconsDrawer} src={IconTables} alt="" />
            </ListItemIcon>
            <p className={classes.textColor}>Marcas</p>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

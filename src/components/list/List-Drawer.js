import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import IconDashboard from "../../assets/img/icon-dashboard.svg";
import IconUsers from "../../assets/img/icon-users.svg";
import IconTables from "../../assets/img/icon-tables.svg";
import IconPolizas1 from "../../assets/img/icon-polizas-aprobadas.svg";
import IconPolizas2 from "../../assets/img/icon-polizas-onboarding.svg";
import ArrowDown from "../../assets/img/arrow-down.svg";

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
          <img className={classes.iconsDrawer} src={IconDashboard} />
        </ListItemIcon>
        <p className={classes.textColor}>Dashboard</p>
      </ListItem>
      <ListItem button className={classes.itemList}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconUsers} />
        </ListItemIcon>
        <p className={classes.textColor}>Usuarios Asegurados</p>
      </ListItem>
      <ListItem button className={classes.itemList}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconPolizas1} />
        </ListItemIcon>
        <p className={classes.textColor}>Pólizas aprobadas</p>
      </ListItem>
      <ListItem button className={classes.itemList}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconPolizas2} />
        </ListItemIcon>
        <p className={classes.textColor}>Pólizas en Onboarding</p>
      </ListItem>
      <ListItem button className={classes.itemList} onClick={handleClick}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconTables} />
        </ListItemIcon>
        <p className={classes.textColor}>Tablas</p>
        {open ? (
          <img src={ArrowDown} className="icon-expand" />
        ) : (
          <img src={ArrowDown} className="icon-expand" />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img className={classes.iconsDrawer} src={IconTables} />
            </ListItemIcon>
            <p className={classes.textColor}>Marcas</p>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

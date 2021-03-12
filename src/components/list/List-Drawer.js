import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";
// assets
import IconDashboard from "../../assets/icons/icon-dashboard.svg";
import IconUsers from "../../assets/icons/icon-users.svg";
import IconTables from "../../assets/icons/icon-tables.svg";
import IconPolizas1 from "../../assets/icons/icon-polizas-aprobadas.svg";
import IconPolizas2 from "../../assets/icons/icon-polizas-onboarding.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { Routes } from "../../consts/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "2rem",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  iconsDrawer: {
    width: "1.6rem",
  },

  itemList: {
    paddingBottom: theme.spacing(2),
  },

  textColor: {
    color: "#ffffff",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "300",
    fontSize: "0.85rem",
  },
}));

export default function ListDrawer(props) {
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
      <Link to={Routes.dashboard.route} style={{ textDecoration: "none" }}>
        <ListItem className={classes.itemList} button onClick={props.callback}>
          <ListItemIcon>
            <img
              className={classes.iconsDrawer}
              src={IconDashboard}
              alt="Dashboard"
            />
          </ListItemIcon>
          <span className={classes.textColor}>Dashboard</span>
        </ListItem>
      </Link>

      <ListItem button className={classes.itemList} onClick={props.callback}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconUsers} alt="Users" />
        </ListItemIcon>
        <span className={classes.textColor}>Usuarios Asegurados</span>
      </ListItem>
      <ListItem button className={classes.itemList} onClick={props.callback}>
        <ListItemIcon>
          <img
            className={classes.iconsDrawer}
            src={IconPolizas1}
            alt="Polizas"
          />
        </ListItemIcon>
        <span className={classes.textColor}>Pólizas aprobadas</span>
      </ListItem>
      <ListItem button className={classes.itemList} onClick={props.callback}>
        <ListItemIcon>
          <img
            className={classes.iconsDrawer}
            src={IconPolizas2}
            alt="Poliza2"
          />
        </ListItemIcon>
        <span className={classes.textColor}>Pólizas en Onboarding</span>
      </ListItem>
      <ListItem button className={classes.itemList} onClick={handleClick}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconTables} alt="Tables" />
        </ListItemIcon>
        <span className={classes.textColor}>Tablas</span>
        {open ? (
          <img src={ArrowDown} className="icon-expand" alt="arrow-down" />
        ) : (
          <img src={ArrowDown} className="icon-expand" alt="arrow-down" />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to={Routes.brands.route} style={{ textDecoration: "none" }}>
            <ListItem
              button
              className={classes.nested}
              onClick={props.callback}
            >
              <span className={classes.textColor}>Marcas</span>
            </ListItem>
          </Link>
          <Link to={Routes.insurers.route} style={{ textDecoration: "none" }}>
            <ListItem
              button
              className={classes.nested}
              onClick={props.callback}
            >
              <span className={classes.textColor}>Aseguradoras</span>
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}

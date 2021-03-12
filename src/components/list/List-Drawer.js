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

  itemList: {
    paddingBottom: theme.spacing(1),
  },

  iconsDrawer: {
    width: "1.6rem",
  },

  textColor: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "0.8rem",
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
        <ListItem button className={classes.itemList} onClick={props.callback}>
          <ListItemIcon>
            <img
              className={classes.iconsDrawer}
              src={IconDashboard}
              alt="Dashboard"
            />
          </ListItemIcon>
          <p className={classes.textColor}>Dashboard</p>
        </ListItem>
      </Link>

      <ListItem button className={classes.itemList} onClick={props.callback}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconUsers} alt="Users" />
        </ListItemIcon>
        <p className={classes.textColor}>Usuarios Asegurados</p>
      </ListItem>
      <ListItem button className={classes.itemList} onClick={props.callback}>
        <ListItemIcon>
          <img
            className={classes.iconsDrawer}
            src={IconPolizas1}
            alt="Polizas"
          />
        </ListItemIcon>
        <p className={classes.textColor}>Pólizas aprobadas</p>
      </ListItem>
      <ListItem button className={classes.itemList} onClick={props.callback}>
        <ListItemIcon>
          <img
            className={classes.iconsDrawer}
            src={IconPolizas2}
            alt="Poliza2"
          />
        </ListItemIcon>
        <p className={classes.textColor}>Pólizas en Onboarding</p>
      </ListItem>
      <ListItem button className={classes.itemList} onClick={handleClick}>
        <ListItemIcon>
          <img className={classes.iconsDrawer} src={IconTables} alt="Tables" />
        </ListItemIcon>
        <p className={classes.textColor}>Tablas</p>
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
              <ListItemIcon>
                <img
                  className={classes.iconsDrawer}
                  src={IconTables}
                  alt="Tables"
                />
              </ListItemIcon>
              <p className={classes.textColor}>Marcas</p>
            </ListItem>
          </Link>
          <Link to={Routes.insurers.route} style={{ textDecoration: "none" }}>
            <ListItem
              button
              className={classes.nested}
              onClick={props.callback}
            >
              <ListItemIcon>
                <img
                  className={classes.iconsDrawer}
                  src={IconTables}
                  alt="Tables"
                />
              </ListItemIcon>
              <p className={classes.textColor}>Aseguradoras</p>
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}

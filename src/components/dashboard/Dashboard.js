import React from "react";
// styles
import "./dashboard.css";
// components
import Header from "../header/Header";
// consts
import { Routes } from "../../routes/routes";

export default function Dashboard() {
  return (
    <>
      <Header
        wordKey={Routes.dashboard.wordKey}
        description={Routes.dashboard.description}
      />
      <div className="main">
        <h1>Hola mundo</h1>
      </div>
    </>
  );
}

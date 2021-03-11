import React from "react";
// styles
import "./dashboard.css";
// components
import Header from "../header/Header";
// consts
import { Routes } from "../../routes/routes";
// assets
import Elipse from "../../assets/icons/elipse.svg";
import Rombo from "../../assets/icons/rombo.svg";
import Trazado from "../../assets/icons/trazado.svg";
import Wheel from "../../assets/icons/media-rueda.svg";
import Cross from "../../assets/icons/cruz.svg";
// import CustomButton from "../utils/button/Button";

export default function Dashboard() {
  return (
    <>
      <Header
        wordKey={Routes.dashboard.wordKey}
        description={Routes.dashboard.description}
      />
      <main>
        <div className="main-container">
          <div className="figures">
            <div className="elipse">
              <img src={Elipse} alt="elipse" />
              <img className="rombo" src={Rombo} alt="rombo" />
            </div>
            <div className="vertical-line">
              <img className="line" src={Trazado} alt="linea" />
            </div>
          </div>
          <section>
            <h1>¡Te damos la bienvenida a Backoffice Seguros!</h1>
            <p>
              Acá vas a poder visualizar y administrar todos los movimientos
              referidos a la contratación de Seguros en Hooli.
            </p>
          </section>
          <div className="figures-left">
            <div className="container-left">
              <div className="half-wheel">
                <img src={Wheel} alt="rueda" />
              </div>
              <div className="cross">
                <img src={Cross} alt="cruz" />
              </div>
              <div className="rombo">
                <img src={Rombo} alt="rombo" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

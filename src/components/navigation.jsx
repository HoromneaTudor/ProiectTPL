import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Register } from "./register";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <li
            onClick={() => {
              sessionStorage.setItem("conectareStare", "false");
            }}
          >
            <a className="navbar-brand " href="/acasa">
              Transport Public Suceava
            </a>{" "}
          </li>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li
              onClick={() => {
                sessionStorage.setItem("conectareStare", "false");
              }}
            >
              <a href="/acasa" className="page-scroll">
                Acasă
              </a>
            </li>
            <li
              onClick={() => {
                sessionStorage.setItem("conectareStare", "false");
              }}
            >
              <a href="/despre" className="page-scroll">
                Despre
              </a>
            </li>
            <li
              onClick={() => {
                sessionStorage.setItem("conectareStare", "Rute");
              }}
            >
              <a href="/rute" className="page-scroll">
                Rute
              </a>
            </li>
            <li
              onClick={() => {
                sessionStorage.setItem("conectareStare", "Galerie");
              }}
            >
              <a href="/galerie" className="page-scroll">
                Galerie
              </a>
            </li>
            <li
              onClick={() => {
                sessionStorage.setItem("conectareStare", "COVID");
              }}
            >
              <a href="/covid-19" className="page-scroll">
                COVID-19
              </a>
            </li>

            <li
              onClick={() => {
                sessionStorage.setItem("conectareStare", "Contact");
              }}
            >
              <a href="/contact" className="page-scroll">
                Contact
              </a>
            </li>

            <li
              onClick={() => {
                sessionStorage.setItem("conectareStare", "Conectare");
              }}
            >
              <a href="/conectare" className="page-scroll">
                Conectare
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

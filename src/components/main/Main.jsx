import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import InfoOrganization from "../NewOrganization/InfoOrganization/InfoOrganization";
import NewOrganization from "../NewOrganization/NewOrganization";
import SavedOrganization from "../SavedOrganization/SavedOrganization";
import s from "./Main.module.css";

const Main = (props) => {
  const [nameNav, NavClick] = useState("new");
  return (
    <div className={s.main}>
      <BrowserRouter>
        <div className={s.main__block}>
          <h1>Мои организации</h1>
          <div className={s.organizations}>
            <div className={s.navigation}>
              <NavLink
                to="/"
                className={nameNav === "new" ? s.nav + " " + s.active : s.nav}
                name="new"
                onClick={(e) => {
                  NavClick(e.target.name);
                }}
              >
                Новая организация
              </NavLink>
              <NavLink
                to="/SavedOrganization"
                className={nameNav === "saved" ? s.nav + " " + s.active : s.nav}
                name="saved"
                onClick={(e) => {
                  NavClick(e.target.name);
                }}
              >
                Сохраненные организации
              </NavLink>
            </div>

            <Switch>
              <Route
                exact
                path="/"
                render={() => <NewOrganization store={props.store} />}
              />
              <Route
                path="/SavedOrganization"
                render={() => <SavedOrganization store={props.store} />}
              />
              {/* <Route
                path="/Organization/"
                render={() => <InfoOrganization store={props.store} />}
              /> */}
            </Switch>
          </div>
        </div>{" "}
      </BrowserRouter>
    </div>
  );
};

export default Main;

import {
  NavLink,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import Categories from "../pages/CategoriesPage";
import PrivateRoute from "./PrivateRoute";

// Nota
// La ruta donde se invoca un router no puede ser exacta!

export default function CategoriesRouter() {
  const { url } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to={`${url}`}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={`${url}/terror`}>
            Terror
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to={`${url}/action`}>
            Action
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to={`${url}/anime`}>
            Anime
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/categories" exact component={Categories} />
        <PrivateRoute path="/categories/terror" component={TerrorRouter} />
        <Route path="/categories/action" exact>
          <h1>Category action</h1>
        </Route>
        <Route path="/categories/anime" exact>
          <h1>Category anime</h1>
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}

function TerrorRouter() {
  const { url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/categories/terror">
            Terror
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/categories/terror/gore">
            Gore
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName="active"
            to="/categories/terror/suspense"
          >
            Suspense
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${url}`}>
          <h3>Category terror</h3>
        </Route>
        <Route exact path={`${url}/gore`}>
          <h3>Gore</h3>
        </Route>
        <Route exact path={`${url}/suspense`}>
          <h3>Suspense</h3>
        </Route>
      </Switch>
    </div>
  );
}

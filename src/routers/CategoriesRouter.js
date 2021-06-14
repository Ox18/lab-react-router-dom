import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Categories from "../pages/CategoriesPage";
import PrivateRoute from "./PrivateRoute";

export default function CategoriesRouter() {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/categories">
            All
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/categories/terror">
            Terror
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/categories/action">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/categories/anime">
            Anime
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/categories" exact component={Categories} />
        <PrivateRoute
          path="/categories/terror"
          exact
          component={() => <h1>Category terror</h1>}
        />
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

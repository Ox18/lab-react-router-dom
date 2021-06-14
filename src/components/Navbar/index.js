import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";

function Index() {
  const auth = useAuth();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/contact">
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" exact to="/categories">
              Categories
            </NavLink>
          </li>
          {!auth.isLogged() && (
            <>
              <li>
                <NavLink activeClassName="active" exact to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
          {auth.isLogged() && (
            <>
              <li>
                <NavLink activeClassName="active" exact to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/payment">
                  Payments
                </NavLink>
              </li>
              <li>
                <button onClick={auth.logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Index;

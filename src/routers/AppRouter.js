import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import CategoriesRouter from "./CategoriesRouter";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";

import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/PaymentPage";
import DashboardPage from "../pages/DashboardPage";
import RegisterPage from "../pages/RegisterPage";

import NavBar from "../components/Navbar";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/profile/:username" exact component={ProfilePage} />
        <Route path="/signing">
          <Redirect to="/login" />
        </Route>
        <Route path="/categories" component={CategoriesRouter} />
        <PublicRoute path="/login" exact component={LoginPage} />
        <PublicRoute path="/register" exact component={RegisterPage} />
        <PrivateRoute path="/dashboard" exact component={DashboardPage} />
        <PrivateRoute path="/payment" exact component={PaymentPage} />
        <Route path="/404" exact component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}



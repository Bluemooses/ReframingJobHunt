import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";

// Components
import Nav from "../Nav/Nav";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import WhyPage from "../WhyPage/WhyPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import AdminPage from "../AdminPage/AdminPage";
import axios from "axios";
import VegetablePage from "../VegetablePage/VegetablePage";

function App() {
  // Dispatch hook
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
    fetchVegetables();
  }, [dispatch]);

  const fetchVegetables = async () => {
    const response = await axios.get("/api/vegetables");
    dispatch({ type: "SET_VEGETABLES", payload: response.data });
  };

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />
          {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
          <Route exact path="/about" component={WhyPage} />
          <Route exact path="/vegetables" component={VegetablePage} />
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
          <ProtectedRoute exact path="/home" component={UserPage} />
          {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
          <ProtectedRoute exact path="/info" component={InfoPage} />
          <ProtectedRoute exact path="/admin" component={AdminPage} />
          {/* If none of the other routes matched, we will show a 404. */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect()(App);

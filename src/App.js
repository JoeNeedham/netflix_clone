import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as ROUTES from './constants/routes'
import { Home, Signin, Signup, Browse } from "./pages";
import { IsUserRedirect } from "./helpers/routes";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
        <Route exact path={ROUTES.BROWSE} element={<Browse />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTES } from "./Route.constants";
import { Dashboard } from "../pages/Dashboard";
import { DynamicPage } from "../pages/DynamicPage";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import { RecipePage } from "../pages/Recipe";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route exact path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route exact path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route exact path={ROUTES.RECIPE_PAGE} element={<RecipePage />} />
      <Route path={ROUTES.DYNAMIC_PAGE} element={<DynamicPage />} />
    </>
  )
);

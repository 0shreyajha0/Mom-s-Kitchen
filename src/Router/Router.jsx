import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTES } from "./Route.constants";
import { Dashboard } from "../Pages/Dashboard";
import { DynamicPage } from "../Pages/DynamicPage";
import { Home } from "../Pages/Home";
import { LoginPage } from "../Pages/LoginPage";
import { SignUpPage } from "../Pages/SignUpPage";
import { RecipePage } from "../Pages/Recipe";

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

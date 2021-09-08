import {
    Switch,
    Route,
    Redirect
} from "react-router";
import { HOME, LOGIN, LOGOUT, SHOP, SIGNUP } from "../utils/constants";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Logout from "./components/logout/logout";
import NavBar from "./components/navbar/navbar";
import Product from "./components/book/book";
import SignUp from "./components/signup/signup";

export default function CommonRoutes() {
    return (
        <>
            <Switch>
                <Route exact path={HOME}>
                    <Home />
                </Route>
                <Route exact path={`${SHOP}/:id`}>
                    <Product />
                </Route>
                <Route exact path={LOGIN}>
                    <Login />
                </Route>
                <Route exact path={LOGOUT}>
                    <Logout />
                </Route>
                <Route exact path={SIGNUP}>
                    <SignUp />
                </Route>
                <Redirect exact from="/" to={HOME} />
                <Redirect exact to="/404" from="*" />
            </Switch>
        </>

    );
}
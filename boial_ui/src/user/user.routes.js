import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { CART, HOME, PROFILE } from "../utils/constants";
import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";
import Footer from "../shared/components/footer/footer";

export function UserRoutes() {
    return (
        <>
            <NavBar />
                <Switch>
                    <Route exact path={CART}>
                        <Cart />
                    </Route>
                    <Route exact path={PROFILE}>
                        <Profile />
                    </Route>
                </Switch>
            <Redirect exact to="/404" from="*" />
            <Footer />
        </>
    );
}
import { 
    Switch, 
    Route, 
    Redirect 
} from "react-router";
import { CART, HOME, ORDER, PROFILE } from "../utils/constants";
import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";
import Order from "./components/order/order";

export function UserRoutes() {
    return (
        <>
            {/* <NavBar /> */}
                <Switch>
                    <Route exact path={CART}>
                        <Cart />
                    </Route>
                    <Route exact path={PROFILE}>
                        <Profile />
                    </Route>
                    <Route exact path={ORDER}>
                        <Order />
                    </Route>
                    <Redirect exact to={PROFILE} from="/user" />
                    <Redirect exact to="/404" from="*" />
                </Switch>
            {/* <Footer /> */}
        </>
    );
}
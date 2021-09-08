import { 
    Switch, 
    Route, 
    Redirect 
} from "react-router";
import { CART, HOME, PROFILE } from "../utils/constants";
import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";
import Footer from "../shared/components/footer/footer";
import NavBar from "../shared/components/navbar/navbar2";

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
                    <Redirect exact to="/404" from="*" />
                </Switch>
            <Footer />
        </>
    );
}
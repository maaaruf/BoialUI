import { ADMIN_CATEGORIES, ADMIN_DASHBOARD, ADMIN_ORDERS, ADMIN_PRODUCTS } from "../utils/constants";
import AdminDashboard from "./components/admindashboard/admindashboard";
import Categories from "./components/categories/categories";
import Orders from "./components/orders/orders";
import Products from "./components/products/products";
import NavBar from "./components/navbar/navbar";
import Footer from "../shared/components/footer/footer";
import { 
    Switch, 
    Route, 
    Redirect 
} from "react-router";

export function AdminRoutes() {
    return (
        <>
            {/* <NavBar/> */}
                <Switch>
                    <Route exact path = {ADMIN_DASHBOARD}>
                        <AdminDashboard/>
                    </Route>
                    <Route exact path = {ADMIN_CATEGORIES}>
                        <Categories/>
                    </Route>
                    <Route exact path = {ADMIN_ORDERS}>
                        <Orders/>
                    </Route>
                    <Route exact path = {ADMIN_PRODUCTS}>
                        <Products/>
                    </Route>
                    <Redirect exact to={ADMIN_DASHBOARD} from="/admin" />
                    <Redirect exact to="/404" from="*" />
                </Switch>
            {/* <Footer/> */}
        </>
    );
}
import { ADMIN_CATEGORIES, ADMIN_DASHBOARD, ADMIN_ORDERS, ADMIN_PRODUCTS } from "../utils/constants";
import AdminDashboard from "./components/admindashboard/admindashboard";
import Categories from "./components/categories/categories";
import Orders from "./components/orders/orders";
import Products from "./components/products/products";
import { Switch } from "react-router";
import { Route } from "react-router";
import NavBar from "./components/navbar/navbar";
import Footer from "../shared/components/footer/footer";

export function AdminRoutes() {
    return (
        <>
            <NavBar/>
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
                </Switch>
            <Redirect exact to="/404" from="*" />
            <Footer/>
        </>
    );
}
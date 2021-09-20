import { ADMIN_CATEGORIES, ADMIN_CREATECATEGORY, ADMIN_CREATEPRODUCT, ADMIN_DASHBOARD, ADMIN_ORDERS, ADMIN_PRODUCTS, ADMIN_USERS } from "../utils/constants";
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
import CreateProduct from "./components/products/createProduct";
import CreateCategory from "./components/categories/createCategory";
import LeftMenu from "./components/leftMenu/leftMenu";
import Users from "./components/users/users";
import ProtectedAdminRoute from "./protectedAdminRoute";

export function AdminRoutes() {
    return (
        <>
            <ProtectedAdminRoute>
                <LeftMenu>
                    <Switch>
                        <Route exact path={ADMIN_DASHBOARD}>
                            <AdminDashboard />
                        </Route>
                        <Route exact path={ADMIN_CREATEPRODUCT}>
                            <CreateProduct />
                        </Route>
                        <Route exact path={ADMIN_CATEGORIES}>
                            <Categories />
                        </Route>
                        <Route exact path={ADMIN_CREATECATEGORY}>
                            <CreateCategory />
                        </Route>
                        <Route exact path={ADMIN_ORDERS}>
                            <Orders />
                        </Route>
                        <Route exact path={ADMIN_PRODUCTS}>
                            <Products />
                        </Route>
                        <Route exact path={ADMIN_USERS}>
                            <Users />
                        </Route>
                        <Redirect exact to={ADMIN_DASHBOARD} from="/admin" />
                        <Redirect exact to="/404" from="*" />
                    </Switch>
                </LeftMenu>
            </ProtectedAdminRoute>
        </>
    );
}
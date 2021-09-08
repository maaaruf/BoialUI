import NotFound from "./shared/components/404/404";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { UserRoutes } from "./user/user.routes";
import { AdminRoutes } from "./admin/admin.routes";
import CommonRoutes from "./shared/common.routes";

export default function Router() {
    return (
        <Switch>
            <Route exact path="/404">
                <NotFound />
            </Route>
            <Route path="/user">
                <UserRoutes />
            </Route>
            <Route path="/admin">
                <AdminRoutes />
            </Route>
            <Route path="/">
                <CommonRoutes />
            </Route>
        </Switch>
    )
}
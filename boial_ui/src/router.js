import NotFound from "./shared/components/404/404";
import { Redirect, Route } from "react-router";
import { Switch } from "react-router-dom";
import { UserRoutes } from "./user/user.routes";
import { AdminRoutes } from "./admin/admin.routes";
import CommonRoutes from "./shared/common.routes";
import ProtectedAdminRoute from "./admin/protectedAdminRoute";
import { useSelector } from "react-redux";

export default function Router() {
    const role = useSelector(store => store.UserInfoStore.role);

    return (
        <Switch>
            <Route exact path="/404">
                <NotFound />
            </Route>
            <Route path="/user">
                <UserRoutes />
            </Route>
            <Route path="/admin">
                <ProtectedAdminRoute>
                    <AdminRoutes />
                </ProtectedAdminRoute>
            </Route>
            <Route path="/">
                <CommonRoutes />
            </Route>
            <Route render={()=>(role == 'admin')? <Redirect to={'/admin'}/>:<Redirect to={'/home'}/>}/>
        </Switch>
    )
}
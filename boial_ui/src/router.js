import NotFound from "./shared/components/404/404";
import { Route } from "react-router";

export default function Router() {
    return (
        <Route exact path="/404">
            <NotFound />
        </Route>
    )
}
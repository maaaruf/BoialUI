import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { LOGIN } from "../utils/constants";

export default function ProtectedAdminRoute ({children}){
    const userInfo = useSelector(store => store.UserInfoStore);
    return (
        <Route render={()=>((userInfo.token !== null) && (userInfo.role === 'admin'))? children:<Redirect to={LOGIN}/>}/>
    );
}
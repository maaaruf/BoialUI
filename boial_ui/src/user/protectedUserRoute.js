import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { LOGIN } from "../utils/constants";

export default function ProtectedUserRoute ({children}){
    const userInfo = useSelector(store => store.UserInfoStore);
    return (
        <Route render={()=>(userInfo.token !== null)? children:<Redirect to={LOGIN}/>}/>
    );
}
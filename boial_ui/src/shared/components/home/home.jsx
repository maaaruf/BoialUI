import { ActionTypes } from "../../../store/actionType";

export default function Home () {

    const userStorage = JSON.parse(localStorage.getItem(ActionTypes.SIGN_IN));
    console.log(userStorage, "Current user from local Storage");
    return (
        
        <>
            <p>Home Page</p>
        </>
    );
}
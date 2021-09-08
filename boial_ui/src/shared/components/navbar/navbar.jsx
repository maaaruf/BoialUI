import classes from './navbar.css'
import { ActionTypes } from '../../../store/actionType';
export default function NavBar() {
    const userStorage = JSON.parse(localStorage.getItem(ActionTypes.SIGN_IN));

    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/home" className="brand">
                            <img src="./images/logo-bg.png" alt="" />
                            <h3>Boial</h3>
                        </a>
                    </li>
                </ul>
                <div className="account">
                    {!userStorage && <><span className="material-icons-outlined" title="Account">account_circle</span>
                        <a href="/Login">Login</a>
                        <a >|</a>
                        <a href="/signup">Sign Up</a>
                    </>}

                    {userStorage && <><span class="material-icons-outlined" title="Logout"> logout </span> <a href="/logout">Logout</a></>}
                </div>
            </nav>
        </>
    );
}
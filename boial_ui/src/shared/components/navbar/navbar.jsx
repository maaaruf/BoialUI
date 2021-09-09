import classes from './navbar.css'
import { ActionTypes } from '../../../store/actionType';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../store/action/signOutAction';
import { useSelector } from 'react-redux';


export default function NavBar() {
    const userStorage = useSelector((store) => store.UserInfoStore); //JSON.parse(localStorage.getItem(ActionTypes.SIGN_IN));
    const userSignIn = useSelector((store) => store.UserInfoStore);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log(userStorage, "Current User Storage from NavBar =======");


    const login = () => {
        console.log("Login");
        history.push('/login');
    }

    const logout = () => {
        console.log("Logout");
        dispatch(signOut());
        history.push('/home');
    }

    const redirectToHome = () => {
        history.push("/home");
    }

    const isLoggedIn = () => {
        let loggedIn = true;

        if(userStorage.email == null 
            || userStorage.token == null
            || userStorage.role == null){
                loggedIn = false;
            }
        
        console.log("Logged In? =====> ", loggedIn);
        return loggedIn;
    }

    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <a onClick = {redirectToHome} className="brand">
                            <img src="./images/logo-bg.png" alt="" />
                            <h3>Boial</h3>
                        </a>
                    </li>
                </ul>
                <div className="account">
                    {!isLoggedIn() &&
                        <><span className="material-icons-outlined" title="Account">account_circle</span>
                            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                <Button onClick={login} >Login</Button>
                                <Button>SignUp</Button>
                            </ButtonGroup>
                        </>}

                    {isLoggedIn() &&
                        <>
                            <span class="material-icons-outlined" title="Logout"> logout </span>
                            <Button onClick={logout}>Logout</Button>
                        </>}
                </div>
            </nav>
        </>
    );
}
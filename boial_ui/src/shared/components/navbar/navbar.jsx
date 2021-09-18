import classes from './navbar.css'
import { ActionTypes } from '../../../store/actionType';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../store/action/signOutAction';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar() {
    const userStorage = useSelector((store) => store.UserInfoStore); //JSON.parse(localStorage.getItem(ActionTypes.SIGN_IN));
    const cartItems = useSelector((store) => store.CartStore.data);
    const history = useHistory();
    const dispatch = useDispatch();
    const cartLength = cartItems?.length;

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

        if (userStorage.email == null
            || userStorage.token == null
            || userStorage.role == null) {
            loggedIn = false;
        }

        console.log("Logged In? =====> ", loggedIn);
        return loggedIn;
    }

    const gotoCart = () => {
        history.push('/user/cart');
    }

    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <a onClick={redirectToHome} className="brand">
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
                            {/* {cartLength > 0 ? <Badge onClick={gotoCart} badgeContent={cartLength} color="primary">
                                <ShoppingCartIcon color="action" />
                            </Badge>
                            } */}

                            <Badge onClick={gotoCart} badgeContent={cartLength} color="primary">
                                <ShoppingCartIcon color="action" />
                            </Badge>

                            <span class="material-icons-outlined" title="Logout"> logout </span>
                            <Button onClick={logout}>Logout</Button>
                        </>}
                </div>
            </nav>
        </>
    );
}
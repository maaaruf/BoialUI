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
import { useState } from 'react';
import { loadCartAction } from '../../../store/action/cartActions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SIGNUP, USERBASE } from '../../../utils/constants';

export default function NavBar() {
    const userStorage = useSelector((store) => store.UserInfoStore);
    const cartItems = useSelector((store) => store.CartStore.data);
    const history = useHistory();
    const dispatch = useDispatch();
    const cartLength = cartItems?.length;

    useState(()=>{
        //dispatch(loadCartAction());
    },[]);

    const login = () => {
        history.push('/login');
    }

    const signUp = () => {
        history.push(SIGNUP);
    }

    const logout = () => {
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

        return loggedIn;
    }

    const gotoCart = () => {
        history.push('/user/cart');
    }

    const gotoUser = () => {
        history.push(USERBASE);
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
                                <Button onClick={signUp}>SignUp</Button>
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

                            <Badge onClick={gotoUser} color="primary">
                                <AccountCircleIcon />
                            </Badge>

                            <span class="material-icons-outlined" title="Logout"> logout </span>
                            <Button onClick={logout}>Logout</Button>
                        </>}
                </div>
            </nav>
        </>
    );
}
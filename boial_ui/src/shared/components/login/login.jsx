import axios from 'axios';
import { useState } from 'react';
import loginImage from '../../../assets/images/login.svg';
import classes from './login.css';
import { BASE_URL } from '../../../utils/constants';
import { signInAction } from '../../../store/action/signInAction';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../../store/actionType';


export default function Login() {
    
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({email:"", password:""});
    
    const updateUserInfo = (property, value)=>{
        setUserInfo(user=> ({...user, [property]:value}));
    }

    const login = ()=>{
        console.log(userInfo, "UserInfo from login page ========");

        dispatch(signInAction(userInfo));
    }

    const userSignIn = useSelector((store) => store.UserInfoStore);
    console.log(userSignIn, "userSignIn data pulled from redux store");

    

    setTimeout(()=>{
        const userStorage = JSON.parse(localStorage.getItem(ActionTypes.SIGN_IN));
        console.log(userStorage,"userSignIn data pulled from local storage");
    }, 2000);
    

    return (
        <>
            <div class="column">
                <div class="illustration">
                    <img src={loginImage} alt="Login" />
                </div>
                <form class="login form" action="#">
                    <div class="textInput">
                        <input type="text" placeholder="Enter email" onChange={e=> updateUserInfo("email", e.target.value)}/>
                        <span class="material-icons-outlined"> alternate_email </span>
                    </div>

                    <div class="textInput">
                        <input type="password" placeholder="Enter password" onChange={e=> updateUserInfo("password", e.target.value)}/>
                        <span class="material-icons-outlined"> lock </span>
                    </div>

                    <button class="button" onClick={login}>
                        <span>Login</span>
                    </button>

                    <div class="info">Don't have an account? <a href="/signup">Signup</a> instead.</div>
                </form>
            </div>
        </>
    );
}
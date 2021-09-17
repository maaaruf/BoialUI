import axios from 'axios';
import { useState } from 'react';
import loginImage from '../../../assets/images/login.svg';
import classes from './login.css';
import { BASE_URL } from '../../../utils/constants';
import { signInAction } from '../../../store/action/signInAction';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../../store/actionType';
import { history } from '../../../utils/helpers/helper';
import { useHistory } from 'react-router';


export default function Login() {
    
    const dispatch = useDispatch();
    const userSignIn = useSelector((store) => store.UserInfoStore);
    const [userInfo, setUserInfo] = useState({email:"", password:""});
    const history = useHistory();
    
    const updateUserInfo = (property, value)=>{
        setUserInfo(user=> ({...user, [property]:value}));
        console.log(userInfo);
    }

    const login = (e)=>{
        e.preventDefault();
        //history.push('/home');

        dispatch(signInAction(userInfo));
    }

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

                    <button class="button" onClick={(e)=> login(e)}>
                        <span>Login</span>
                    </button>

                    <div class="info">Don't have an account? <a href="/signup">Signup</a> instead.</div>
                </form>
            </div>
        </>
    );
}
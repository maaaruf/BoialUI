//  import classes from './signup.css';
import { BASE_URL } from '../../../utils/constants';
import signUpImage from '../../../assets/images/signup.svg';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        address: {
            city: '',
            street: '',
            number: '',
            zipcode: '',
            geolocation: {
                lat: '',
                long: '',
            },
        },
        phone: '',
    });

    const [addressInfo, setAddressInfo] = useState({
        city: '',
        street: '',
        number: '',
        zipcode: '',
        geolocation: {
            lat: '',
            long: '',
        },
    });

    const [geoLocationInfo, setGeoLocationInfo] = useState({
        lat: '',
        long: '',
    });

    const updateUserInfo = (fieldName, value) => {
        setUserInfo(user => ({ ...user, [fieldName]: value}));
    }

    const updateAddressInfo = (fieldName, value) => {
        setUserInfo(user => ({...user, address: {...user.address, [fieldName]: value}}));
    }

    const updateGeoLocationInfo = (fieldName, value) => {
        setUserInfo(user => ({...user, address: {...user.address, geolocation: {...user.address.geolocation, [fieldName]: value}}}));
        // setGeoLocationInfo(location => ({ ...location, [fieldName]: value }));
    }

    const signUp = () => {
        setAddressInfo(address => ({ ...address, ["geoLocation"]: geoLocationInfo }));
        setUserInfo(user => ({ ...user, ["address"]: addressInfo }));
        
        axios.post(`${BASE_URL}/signup`, userInfo)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
            {/* <div style = {{textAlign:"center"}}>
                <h1>Create an account</h1>
            </div> */}
            <div className="column">
                <div className="illustration">
                    <img src={signUpImage} alt="Signup" />
                </div>

                <form className="signup form" action="#">
                    <div className="textInput">
                        <input type="text" placeholder="User Name" onChange={e => updateUserInfo("username", e.target.value)} />
                        <span className="material-icons-outlined"> person </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Enter email" onChange={e => updateUserInfo("email", e.target.value)} />
                        <span className="material-icons-outlined"> alternate_email </span>
                    </div>

                    <div className="textInput">
                        <input type="password" placeholder="Enter password" onChange={e => updateUserInfo("password", e.target.value)} />
                        <span className="material-icons-outlined"> lock </span>
                    </div>

                    <div className="textInput">
                        <input type="password" placeholder="Confirm password" />
                        <span className="material-icons-outlined"> lock_clock </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="First Name" onChange={e => updateUserInfo("firstname", e.target.value)} />
                        <span className="material-icons-outlined"> person </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Last Name" onChange={e => updateUserInfo("firstname", e.target.value)} />
                        <span className="material-icons-outlined"> person </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="City" onChange={e => updateAddressInfo("city", e.target.value)}/>
                        <span className="material-icons-outlined">  </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Street" onChange={e => updateAddressInfo("street", e.target.value)}/>
                        <span className="material-icons-outlined">  </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Street Number" onChange={e => updateAddressInfo("number", e.target.value)}/>
                        <span className="material-icons-outlined">  </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Latitude" onChange={e => updateGeoLocationInfo("lat", e.target.value)}/>
                        <span className="material-icons-outlined">  </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Longitude" onChange={e => updateGeoLocationInfo("long", e.target.value)}/>
                        <span className="material-icons-outlined">  </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Phone Number" onChange={e => updateUserInfo("phone", e.target.value)} />
                        <span className="material-icons-outlined">  </span>
                    </div>


                    <label>
                        <input type="checkbox" />
                        <span>I agree to the Terms & Conditions</span>
                    </label>

                    <div className="button" onClick={signUp}>
                        <span>Sign Up</span>
                    </div>

                    <div className="info">
                        Already have an account? <a href="/login">Login</a> instead.
                    </div>
                </form>
            </div>
        </>
    );
}
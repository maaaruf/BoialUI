import classes from './illustration.css';
import signupImage from '../../../assets/images/signup.svg';

export default function Illustration() {
    return (
        <>
            <div className="illustration">
                <img src={signupImage} alt="Signup" />
            </div>
        </>
    );
}
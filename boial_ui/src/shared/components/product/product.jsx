import productImage from '../../../assets/images/attar.jpg';
import classes from './product.css';

export default function Product() {
    return (
        <a href="quiz.html">
            <div className="video">
                <img src={productImage} alt="product Image" />
                <p>Attar</p>
                {/* <div className="qmeta">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div> */}
            </div>
        </a>
    );
}
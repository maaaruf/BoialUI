import productImage from '../../../assets/images/attar.jpg';
import classes from './product.css';

export default function Product({ title, price, category }) {
    return (
        <a href="quiz.html">
            <div className="video">
                <img src={productImage} alt="product Image" />
                <div className="qmeta">
                    <p>{title}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </a>
    );
}
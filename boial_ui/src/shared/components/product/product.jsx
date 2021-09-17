import { useHistory } from 'react-router';
import productImage from '../../../assets/images/attar.jpg';
import { PRODUCT_DETAIL } from '../../../utils/constants';
import classes from './product.css';

export default function Product({ id, title, price, category }) {
    const history = useHistory();

    const gotoDetail = (e)=> {
        e.preventDefault();
        history.push(`${PRODUCT_DETAIL}/${id}`);
    }
    return (
        <a onClick= {(e) => gotoDetail(e)} >
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
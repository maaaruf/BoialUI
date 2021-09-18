import { useHistory } from 'react-router';
import productImage from '../../../assets/images/attar.jpg';
import { BASE_URL, PRODUCT_DETAIL } from '../../../utils/constants';
import classes from './product.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button, Grid, TextField } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../../store/action/cartActions';


export default function Product({ product }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const gotoDetail = (e) => {
        e.preventDefault();
        history.push(`${PRODUCT_DETAIL}/${product._id}`);
    }

    const addToCart = () => {
        //e.preventDefault();
        dispatch(addToCartAction(1, product._id));
    }

    return (
        <a >
            <div className="video">
                <img onClick={(e) => gotoDetail(e)} src={`${BASE_URL + product.image}`} alt="product Image" />
                <p>{product.title}</p>
                <div className="qmeta">
                    <p>Price: {product.price}</p>
                    <Button
                        variant="contained"
                        color="default"
                        size="large"
                        className={classes.button}
                        startIcon={<AddShoppingCartIcon />}
                        onClick={addToCart}
                    >

                    </Button>
                </div>

            </div>

        </a>
    );
}
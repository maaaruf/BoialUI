import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getProductAction } from "../../../store/action/productAction";
import { BASE_URL } from "../../../utils/constants";
import Box from '@mui/material/Box';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addToCartAction } from "../../../store/action/cartActions";


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export function ProductDetail() {
    const { id } = useParams();
    const product = useSelector(store => store.SingleProductStore.data);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const [quantity, setQuantity] = useState(0);

    useState(() => {
        dispatch(getProductAction(id));
    }, []);

    const addToCart = (e)=>{
        e.preventDefault();
        dispatch(addToCartAction(quantity, id));
    }

    return (
        <>
            <Grid container spacing={3} justifyContent="center">
                <Grid item lg={8} >
                    <Grid
                        item
                        lg={4}
                    >

                        <img style={{ width: "100%", border: "1px solid" }} src={`${BASE_URL}${product?.image}`} alt="Italian Trulli" />

                    </Grid>
                    <Grid
                        item
                        lg={8}
                    >
                        <TextField id="outlined-basic" label="Quantity" variant="outlined" onChange={(e)=>{setQuantity(e.target.value)}}/>
                        <Button
                            variant="contained"
                            color="delete"
                            size="large"
                            className={classes.button}
                            startIcon={<AddShoppingCartIcon />}
                            onClick= {(e)=> addToCart(e)}
                        >
                            Add to Cart
                        </Button>

                        <p>{product.title}</p>
                        <p>Price: {product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <br />
                        <p>{product.description}</p>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
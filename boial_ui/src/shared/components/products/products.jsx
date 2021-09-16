import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadProductsAction } from "../../../store/action/productAction";
import Product from "../product/product";
import classes from './products.css';

export default function Products() {
    const products = useSelector((store) => store.ProductsStore.data);
    const dispatch = useDispatch();

    useState(() => {
        dispatch(loadProductsAction());
    }, [products]);

    return (
        <>
            <div className="videos">
                {
                    products.map((product) => (
                        <Product title={product.title} price={product.price} />
                    ))
                }
            </div>
        </>
    );
}
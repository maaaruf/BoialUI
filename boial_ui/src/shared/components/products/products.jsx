import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadProductsAction } from "../../../store/action/productAction";
import Product from "../product/product";
import classes from './products.css';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.ProductsStore.data);
    const [page, setPage] = React.useState(1);
    // const [productsToDisplay, setProductsToDisplay] = useState(0);

    const postPerPage = 4;
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const productsToDisplay = products.slice(indexOfFirstPost, indexOfLastPost);
    const pageCount = Math.ceil(products.length / postPerPage);


    const handleChange = (event, value) => {
        setPage(value);
    };

    useState(() => {
        dispatch(loadProductsAction());
    }, [products]);

    return (
        <>
            <div className="videos">
                {
                    productsToDisplay.map((product) => (
                        <Product product={product} />
                    ))
                }
            </div>

            <Stack spacing={2}>
                <Pagination count={pageCount} page={page} onChange={handleChange} />
            </Stack>
        </>
    );
}
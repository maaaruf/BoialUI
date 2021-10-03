import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ADMIN_CATEGORIES, ADMIN_CREATECATEGORY, ADMIN_CREATEPRODUCT, ADMIN_ORDERS, ADMIN_PRODUCTS, ADMIN_USERS } from "../../../utils/constants";
import { Grid } from "@material-ui/core";

import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import { useState } from "react";

export default function LeftMenu({ children }) {
    const history = useHistory();
    const classes = useStyles()

    const [open, setOpen] = useState(false)


    function handleClick() {
        setOpen(!open)
    }


    const createProduct = () => {
        history.push(ADMIN_CREATEPRODUCT);
    }

    const createCategory = () => {
        history.push(ADMIN_CREATECATEGORY);
    }

    const gotoProducts = () => {
        history.push(ADMIN_PRODUCTS);
    }

    const gotoCategories = () => {
        history.push(ADMIN_CATEGORIES);
    }

    const gotoOrders = () => {
        history.push(ADMIN_ORDERS);
    }

    const gotoUsers = () => {
        history.push(ADMIN_USERS);
    }

    return (
        <>
            <Grid container spacing={3} justifyContent="center">
                <Grid
                    item
                    lg={2}>
                    <br/>
                    <br/>
                    <List component="nav" className={classes.appMenu} disablePadding>
                        <ListItem button className={classes.menuItem} onClick={gotoCategories}>
                            <ListItemIcon className={classes.menuItemIcon}>
                                <IconDashboard />
                            </ListItemIcon>
                            <ListItemText primary="Categories" />
                        </ListItem>

                        <ListItem button className={classes.menuItem} onClick={gotoProducts}>
                            <ListItemIcon className={classes.menuItemIcon}>
                                <IconShoppingCart />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItem>

                        <ListItem button className={classes.menuItem} onClick={gotoOrders}>
                            <ListItemIcon className={classes.menuItemIcon}>
                                <IconPeople />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItem>

                        <ListItem button className={classes.menuItem} onClick={gotoUsers}>
                            <ListItemIcon className={classes.menuItemIcon}>
                                <IconBarChart />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                        
                    </List>
                </Grid>

                <Grid
                    item
                    lg={8}>
                        {children}
                </Grid>
            </Grid>


        </>


    );
}

const drawerWidth = 240
const useStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100%',
        },
        navList: {
            width: drawerWidth,
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#97c05c',
        },
    }),
)
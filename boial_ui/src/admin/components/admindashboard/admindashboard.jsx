import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ADMIN_CREATECATEGORY, ADMIN_CREATEPRODUCT } from "../../../utils/constants";

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

export default function AdminDashboard() {
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

    return (
        <>
            {/* <List component="nav" className={classes.appMenu} disablePadding>
                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <IconDashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <IconShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem>

                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <IconPeople />
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                </ListItem>

                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <IconBarChart />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem>
                <ListItem button onClick={handleClick} className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <IconLibraryBooks />
                    </ListItemIcon>
                    <ListItemText primary="Nested Pages" />
                    {open ? <IconExpandLess /> : <IconExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Divider />
                    <List component="div" disablePadding>
                        <ListItem button className={classes.menuItem}>
                            <ListItemText inset primary="Nested Page 1" />
                        </ListItem>
                        <ListItem button className={classes.menuItem}>
                            <ListItemText inset primary="Nested Page 2" />
                        </ListItem>
                    </List>
                </Collapse>
            </List> */}
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
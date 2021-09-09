import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ADMIN_CREATEPRODUCT } from "../../../utils/constants";

export default function AdminDashboard() {
    const history = useHistory();

    const createProduct = () => {
        history.push(ADMIN_CREATEPRODUCT);
    }

    return (
        <>
            <p>Admin Dashboard page</p>

            <div className="button" onClick= {createProduct} >
                <span>Create Product</span>
            </div>
        </>
    );
}
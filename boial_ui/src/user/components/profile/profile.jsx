import { Grid } from "@material-ui/core";

export default function Profile() {
    return <>
        <Grid container spacing={3} justifyContent="center">
            <Grid
                item
                lg={4}>
                <button class="button" >
                    <span>Login</span>
                </button>

                <button class="button" >
                    <span>Login</span>
                </button>

            </Grid>
            <Grid
                item
                lg={6}>


            </Grid>
        </Grid>
    </>
}
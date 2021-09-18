export function Layout({children}) {
    return <>
        <Grid container spacing={3} justifyContent="center">
            <Grid
                item
                lg={3}>
                    

            </Grid>
            <Grid
                item
                lg={6}>
                    
                {children}
            </Grid>
        </Grid>
    </>
}
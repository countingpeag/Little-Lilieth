import Grid from '@mui/material/Unstable_Grid2';

import '../../Styles/shoppingCart.css';

const ShoppingEmptyCart = () => {
    return (
        <Grid container>
            <Grid xs={12} className="emptyCart">
                <h1>Shopping Cart</h1>
                <h3>Your shopping Cart is empty. <a href="/">Keep browsing</a></h3>
            </Grid>
        </Grid>
    );
}

export default ShoppingEmptyCart;
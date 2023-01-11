import Grid from '@mui/material/Unstable_Grid2';
import SubFooter from '../Footers/SubFooter';
import SubHeader from '../Headers/SubHeader';
import SubMenu from '../Menus/SubMenu';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShopingElement from './ShoppingElement';
import Button from '@mui/material/Button';

import '../../Styles/shoppingCart.css'

const ShopingKart = ({images, theme}) => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid container>
            <Grid xs={12}>
                { matches ? <SubHeader theme={theme} /> : <SubMenu theme={theme} /> }
            </Grid>
            <Grid xs={12} className="list">
                <h1>Shopping Cart</h1>
                <h3>Your shopping Cart is empty. <a href="/">Keep browsing</a></h3>
            </Grid>
            <Grid xs={12}>
                {
                    images.map( item => {
                        return <div id={item}>
                            <ShopingElement item={item}/>
                            <Divider />
                        </div>
                    })
                }
            </Grid>
            <Grid xs={12} className="totalPrice">
                <h2>Total: $400</h2>
            </Grid>
            <Grid xs={12} className="proceedButton">
                <Button theme={theme} color={"secondary"} variant="contained">Proceed to checkout</Button>
            </Grid>
            <Grid xs={12}>
                <SubFooter theme={theme} />
            </Grid>
        </Grid>
    );
}

export default ShopingKart;
import Grid from '@mui/material/Unstable_Grid2';
import SubFooter from '../Footers/SubFooter';
import SubHeader from '../Headers/SubHeader';
import SubMenu from '../Menus/SubMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingElements from './ShoppingElements';
import ShoppingEmptyCart from './ShoppingEmptyCart';

import '../../Styles/shoppingCart.css'

const ShopingKart = ({images, theme}) => {

    const items = images;
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid container>
            <Grid xs={12}>
                { matches ? <SubHeader theme={theme} /> : <SubMenu theme={theme} /> }
            </Grid>
            <Grid xs={12} className="list">
                {
                    items.length<=0 ? <ShoppingEmptyCart /> : <ShoppingElements images={items} theme={theme} />
                }
            </Grid>
            <Grid xs={12}>
                <SubFooter theme={theme} />
            </Grid>
        </Grid>
    );
}

export default ShopingKart;
import Grid from '@mui/material/Unstable_Grid2';
import SubFooter from '../Footers/SubFooter';
import SubHeader from '../Headers/SubHeader';
import SubMenu from '../Menus/SubMenu';
import useMediaQuery from '@mui/material/useMediaQuery';

import '../../Styles/shopingKart.css'

const ShopingKart = ({theme}) => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid container>
            <Grid xs={12}>
                { matches ? <SubHeader theme={theme} /> : <SubMenu theme={theme} /> }
            </Grid>
            <Grid xs={12} className="list">
                <h1>Shoping Kart</h1>
                <h3>Your shoping kart is empty. <a href="/">Keep browsing</a></h3>
            </Grid>
            <Grid xs={12} className="subFooter">
                <SubFooter theme={theme} />
            </Grid>
        </Grid>
    );
}

export default ShopingKart;
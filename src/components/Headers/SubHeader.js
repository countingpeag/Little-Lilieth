import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { useTranslation } from 'react-i18next';

import '../../Styles/header.css';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
    <Slide appear={false} direction="down" in={!trigger}>
        {children}
    </Slide>
    );
}

const SubHeader = (props) => {

    const [ t ] = useTranslation();

    return (
        <Grid container columns={{xs:12}} className="header-main">
            <Grid>
                <Fragment>
                    <ThemeProvider theme={props.theme}>
                        <CssBaseline />
                        <HideOnScroll {...props}>
                            <AppBar color="tertiary">
                                <Toolbar>
                                    <Grid xs={4}></Grid>
                                    <Grid xs={4}>
                                        <Grid xs={12}>
                                            <Grid xs={12}>
                                                <Link to={'/'}>
                                                    <img src={logo} alt="logo" className="header-img" />
                                                </Link>
                                            </Grid>
                                            <Grid xs={12}>  
                                                <Link style={{ textDecoration: 'none' }} to={'/'}>
                                                    <Button theme={props.theme} color="primary"> { t('header.home') } </Button> 
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} to={'/#products'}>
                                                    <Button theme={props.theme} color="primary"> { t('header.products') } </Button>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} to={'/#about-us'}>
                                                    <Button theme={props.theme} color="primary"> { t('header.about-us') } </Button>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} to={'/#contact'}>
                                                    <Button theme={props.theme} color="primary"> { t('header.contact') } </Button>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} to={'/#faq'}>
                                                    <Button theme={props.theme} color="primary"> { t('header.faq') } </Button>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={4}>
                                        <div className="kart-alignment">
                                            <Link to={"/shoping"}>
                                                <IconButton aria-label="next">
                                                    <ShoppingCartIcon/>
                                                    <h5>Cart</h5>
                                                </IconButton>
                                            </Link>
                                        </div>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                        </HideOnScroll>
                        <Toolbar />
                        <Toolbar />
                    </ThemeProvider>
                </Fragment>
            </Grid>
        </Grid>
    );
}

export default SubHeader;
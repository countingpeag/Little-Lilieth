import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState, Fragment } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import logo from '../../images/logo.png';
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

const Header = (props) => {

    const [t, i18n] = useTranslation();
    const [language, setLanguage] = useState("EN");

    const handleLanguage = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
    }

    return (
        <Grid container columns={{xs:12}} className="header-main">
            <Grid>
                <Fragment>
                    <ThemeProvider theme={props.theme}>
                        <CssBaseline />
                        <HideOnScroll {...props}>
                            <AppBar color="tertiary">
                                <Toolbar>
                                    <Grid xs={4} className="bottom-alignment">
                                        <div className="left-space">
                                            <ThemeProvider theme={props.theme}>
                                                <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                                                    <Select value={language} onChange={handleLanguage} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                                                        <MenuItem value={"EN"}>{ t('languages.en') }</MenuItem>
                                                        <MenuItem value={"ESP"}>{ t('languages.esp') }</MenuItem>
                                                        <MenuItem value={"FR"}>{ t('languages.fr') }</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </ThemeProvider>
                                        </div>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Grid xs={12}>
                                            <HashLink smooth to={'#'}>
                                                <img src={logo} alt="logo" className="header-img" />
                                            </HashLink>
                                        </Grid>
                                        <Grid xs={12}>  
                                            <HashLink style={{ textDecoration: 'none' }} smooth to={'#'}>
                                                <Button color="primary"> { t('header.home') } </Button> 
                                            </HashLink>
                                            <HashLink style={{ textDecoration: 'none' }} smooth to={'#products'}>
                                                <Button color="primary"> { t('header.products') } </Button>
                                            </HashLink>
                                            <HashLink style={{ textDecoration: 'none' }} smooth to={'#about-us'}>
                                                <Button color="primary"> { t('header.about-us') } </Button>
                                            </HashLink>
                                            <HashLink style={{ textDecoration: 'none' }} smooth to={'#contact'}>
                                                <Button color="primary"> { t('header.contact') } </Button>
                                            </HashLink>
                                            <HashLink style={{ textDecoration: 'none' }} smooth to={'#faq'}>
                                                <Button color="primary"> { t('header.faq') } </Button>
                                            </HashLink>
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

export default Header;
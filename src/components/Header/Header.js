import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { useTranslation } from 'react-i18next';

import logo from '../../images/logo.png';
import '../../Styles/header.css';


const Header = ({theme}) => {

    const [t, i18n] = useTranslation();
    const [language, setLanguage] = useState("EN");

    const handleLanguage = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
    }

    return (
        <Grid container columns={{xs:12}} className="header-main">
            <Grid xs={4} className="bottom-alignment">
                <div className="left-space">
                    <ThemeProvider theme={theme}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                        <Button theme={theme} color="primary"> { t('header.home') } </Button> 
                    </HashLink>
                    <HashLink style={{ textDecoration: 'none' }} smooth to={'#products'}>
                        <Button theme={theme} color="primary"> { t('header.products') } </Button>
                    </HashLink>
                    <HashLink style={{ textDecoration: 'none' }} smooth to={'#about-us'}>
                        <Button theme={theme} color="primary"> { t('header.about-us') } </Button>
                    </HashLink>
                    <HashLink style={{ textDecoration: 'none' }} smooth to={'#contact'}>
                        <Button theme={theme} color="primary"> { t('header.contact') } </Button>
                    </HashLink>
                    <HashLink style={{ textDecoration: 'none' }} smooth to={'#faq'}>
                        <Button theme={theme} color="primary"> { t('header.faq') } </Button>
                    </HashLink>
                </Grid>
            </Grid>
            <Grid xs={4}></Grid>
        </Grid>
    );
}

export default Header;
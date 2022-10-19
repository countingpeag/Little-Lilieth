import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../../Styles/header.css';


const GaleryHeader = ({theme}) => {

    const [ t ] = useTranslation();

    return (
        <Grid container columns={{xs:12}} className="header-main">
            <Grid xs={12}>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="header-img" />
                </Link>
            </Grid>
            <Grid xs={12}>
                <Link style={{ textDecoration: 'none' }} to={'/'}>
                    <Button theme={theme} color="primary"> { t('header.home') } </Button> 
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/#products'}>
                    <Button theme={theme} color="primary"> { t('header.products') } </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/#about-us'}>
                    <Button theme={theme} color="primary"> { t('header.about-us') } </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/#contact'}>
                    <Button theme={theme} color="primary"> { t('header.contact') } </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/#faq'}>
                    <Button theme={theme} color="primary"> { t('header.faq') } </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default GaleryHeader;
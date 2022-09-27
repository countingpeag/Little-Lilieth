import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import '../../Styles/header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';


const GaleryHeader = ({theme}) => {
    return (
        <Grid container columns={{xs:12}} className="header-main">
            <Grid xs={12}>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="header-img" />
                </Link>
            </Grid>
            <Grid xs={12}>
                <Link style={{ textDecoration: 'none' }} to={'/'}>
                    <Button theme={theme} color="primary"> Home </Button> 
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/#products'}>
                    <Button theme={theme} color="primary"> Products </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/#about-us'}>
                    <Button theme={theme} color="primary"> About Us </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/#contact'}>
                    <Button theme={theme} color="primary"> Contact </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/#faq'}>
                    <Button theme={theme} color="primary"> FAQ </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default GaleryHeader;
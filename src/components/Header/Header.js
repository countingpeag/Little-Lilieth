import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import '../../Styles/header.css';
import logo from '../../images/logo.png';
import { HashLink } from 'react-router-hash-link';


const Header = ({theme}) => {
    return (
        <Grid container columns={{xs:12}} className="header-main">
            <Grid xs={12}>
                <HashLink smooth to={'#'}>
                    <img src={logo} alt="logo" className="header-img" />
                </HashLink>
            </Grid>
            <Grid xs={12}>
                <HashLink smooth to={'#'}>
                    <Button theme={theme} color="primary"> Home </Button> 
                </HashLink>
                <HashLink smooth to={'#posts'}>
                    <Button theme={theme} color="primary"> Blog Posts </Button>
                </HashLink>
                <HashLink smooth to={'#about-us'}>
                    <Button theme={theme} color="primary"> About Us </Button>
                </HashLink>
                <HashLink smooth to={'#contact'}>
                    <Button theme={theme} color="primary"> Contact </Button>
                </HashLink>
                <HashLink smooth to={'#faq'}>
                    <Button theme={theme} color="primary"> FAQ </Button>
                </HashLink>
            </Grid>
        </Grid>
    );
}

export default Header;
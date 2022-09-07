import Grid from '@mui/material/Unstable_Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { HashLink } from 'react-router-hash-link';
import '../../Styles/footer.css';

const Footer = ({theme}) => {
    return (
        <Grid container columns={{ xs:12 }}>
            <Grid xs={12} md={4} lg={4}>
                <Grid container>
                    <div>
                        <div className="social-icones" >@Little Lilieth</div>
                        <span className="social-icones">
                            <a href='https://www.instagram.com/littlelilieth/' target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                        </span>
                        <span className="social-icones">
                            <a href='https://www.facebook.com/littlelilieth' target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                        </span>
                        <span className="social-icones">
                            <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
                        </span>
                    </div>
                </Grid>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
                <Grid container>
                    <Grid xs={12}>
                        <b>Lillte Lilieth</b>
                    </Grid>
                    <Grid xs={12}>
                        We are the best bow sellers.
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
                <Grid container>
                    <Grid xs={2}>
                    </Grid>
                    <Grid xs={2}>
                    </Grid>
                    <Grid xs={2}>
                    </Grid>
                    <Grid xs={2}>
                    </Grid>
                    <Grid xs={2}>
                    </Grid>
                    <Grid xs={2}>
                    <Grid xs={12}>
                            <b>Infromation</b>
                        </Grid>
                        <Grid xs={12}>
                            <HashLink style={{ textDecoration: 'none' }} smooth to={'#about-us'}>About us</HashLink>
                        </Grid>
                        <Grid xs={12}>
                            <HashLink style={{ textDecoration: 'none' }} smooth to={'#contact'}>Contact us</HashLink>
                        </Grid>
                        <Grid xs={12}>
                            <HashLink style={{ textDecoration: 'none' }} smooth to={'#faq'}>FAQ</HashLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer;
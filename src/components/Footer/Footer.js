import Grid from '@mui/material/Unstable_Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../../Styles/footer.css';

const Footer = ({theme}) => {
    return (
        <Grid container columns={{ xs:12 }}>
            <Grid xs={12} md={4} lg={4}>
                <Grid container spacing={{xs:0}}>
                    <div>
                        <div className="social-icones" >@Little Lilieth</div>
                        <span className="social-icones">
                            <a href='https://www.instagram.com/littlelilieth/'><InstagramIcon /></a>
                        </span>
                        <span className="social-icones">
                            <a href='https://www.facebook.com'><FacebookIcon /></a>
                        </span>
                        <span className="social-icones">
                            <a href='https://www.youtube.com/'><YouTubeIcon /></a>
                        </span>
                    </div>
                </Grid>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
                <Grid container spacing={{xs:2}}>
                    <Grid xs={12}>
                        Lillte Lilieth
                    </Grid>
                    <Grid xs={12}>
                        We are the best bow sellers.
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
                <Grid container spacing={{xs:1}}>
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
                            About us
                        </Grid>
                        <Grid xs={12}>
                            Contact us
                        </Grid>
                        <Grid xs={12}>
                            FAQ
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer;
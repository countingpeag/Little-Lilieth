import Grid from '@mui/material/Unstable_Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../../Styles/footer.css';

const GaleryFooter = ({theme}) => {

    const [ t ] = useTranslation();

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
                        <b>{ t('footer.center.title') }</b>
                    </Grid>
                    <Grid xs={12}>
                        { t('footer.center.subTagline') }
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
                            <Link style={{ textDecoration: 'none' }} to={'/#about-us'}>{ t('footer.right.about-us') }</Link>
                        </Grid>
                        <Grid xs={12}>
                            <Link style={{ textDecoration: 'none' }} to={'/#contact'}>{ t('footer.right.contact-us') }</Link>
                        </Grid>
                        <Grid xs={12}>
                            <Link style={{ textDecoration: 'none' }} to={'/#faq'}>{ t('footer.right.faq') }</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GaleryFooter;
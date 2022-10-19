import Grid from '@mui/material/Unstable_Grid2';
import owner from '../../../images/owner.PNG';
import { useTranslation } from 'react-i18next';
import '../../../Styles/about.css';

const About = () => {

    const [ t ] = useTranslation();

    return (
        <Grid container columns={{ xs:12 }} className="main-font" >
            <Grid xs={12} md={6}>
                <h2>{ t("about-us.title") }</h2>
                
                <p>{ t("about-us.paragraph1") }</p>

                <img src={owner} alt="owner"/>

                <p>{ t("about-us.paragraph2") }</p>

                <p>{ t("about-us.paragraph3") }</p>
            </Grid>
        </Grid>
    );
}

export default About;
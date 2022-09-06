import Home from './Home';
import About from './About';
import Contact from './Contact';
import FAQ from './FQA';
import Posts from './Posts';
import Grid from '@mui/material/Unstable_Grid2';
import '../../Styles/body.css';

const Body = ({theme}) => {
    return (
        <Grid container columns={{xs:12}}>
            <Grid xs={12} className="home">
                <Home theme={theme} />
            </Grid>
            <Grid xs={12} id="posts" className="posts">
                <Posts theme={theme}/>
            </Grid>
            <Grid xs={12} id="contact" className="contact">
                <Contact theme={theme}/>
            </Grid>
            <Grid xs={12} id="faq" className="faq">
                <FAQ />
            </Grid>
            <Grid xs={12} id="about-us" className="about">
                <About />
            </Grid>
        </Grid>
        );
}

export default Body;
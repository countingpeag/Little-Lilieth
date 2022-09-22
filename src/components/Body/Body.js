import News from './News';
import About from './About';
import Contact from './Contact';
import FAQ from './FQA';
import Posts from './Posts';
import Grid from '@mui/material/Unstable_Grid2';
import '../../Styles/body.css';

import flower1 from '../../images/flor1.PNG';
import flower2 from '../../images/flor2.PNG';
import characters1 from '../../images/monitos1.PNG';
import basic1 from '../../images/sencillo1.PNG';
import blackBow from '../../images/blackBow.jpeg';
import flowerBow from '../../images/flowerBow.jpeg';
import characterBow from '../../images/characterBow.jpeg';
import turtleBow from '../../images/turtleBow.jpeg';

const images = [
    { image: flower1, title: "BOWS", description: "This is test image"},
    { image: flowerBow, title: "DRESSES", description: "This is test image"},
    { image: blackBow, title: "ACCESSORIES", description: "This is test image"},
    { image: characters1, title: "SHOES", description: "This is test image"},
    { image: basic1, title: "basics", description: "This is test image"},
    { image: characterBow, title: "characterBow", description: "This is test image"},
    { image: turtleBow, title: "turtleBow", description: "This is test image"},
    { image: flower2, title: "flower2", description: "This is test image"}
];

const Body = ({theme}) => {
    return (
        <Grid container columns={{xs:12}}>
            <Grid xs={12} className="news">
                <News theme={theme} />
            </Grid>
            <Grid xs={12} id="posts" className="posts">
                <Posts theme={theme} images={images}/>
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2';

import flower1 from '../../../../images/flor1.PNG';
import flower2 from '../../../../images/flor2.PNG';
import characters1 from '../../../../images/monitos1.PNG';
import basic1 from '../../../../images/sencillo1.PNG';
import blackBow from '../../../../images/blackBow.jpeg';
import flowerBow from '../../../../images/flowerBow.jpeg';
import characterBow from '../../../../images/characterBow.jpeg';
import turtleBow from '../../../../images/turtleBow.jpeg';

const images = [
    { image: flower1, title: "flower1", description: "This is test image"},
    { image: flowerBow, title: "flowerBow", description: "This is test image"},
    { image: blackBow, title: "blackBow", description: "This is test image"},
    { image: characters1, title: "character", description: "This is test image"},
    { image: basic1, title: "basics", description: "This is test image"},
    { image: characterBow, title: "characterBow", description: "This is test image"},
    { image: turtleBow, title: "turtleBow", description: "This is test image"},
    { image: flower2, title: "flower2", description: "This is test image"}
];

const Bows = () => {
    return(
        <Grid container columns={{xs:12}}>
            <Grid xs={12}>
                <ImageList cols={4} rowHeight={'auto'} gap={10}>
                    {
                        images.map( (item) => (
                            <ImageListItem key={item.img}>
                                <img src={`${item.image}?w=164&h=164&fit=crop&auto=format`} 
                                    srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} 
                                    alt={item.title} 
                                    loading="lazy" />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Grid>
            <Grid xs={12}>
            </Grid>

        </Grid>
    );
}

export default Bows;
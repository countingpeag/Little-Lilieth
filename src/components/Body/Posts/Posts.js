import Grid from '@mui/material/Unstable_Grid2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import '../../../Styles/posts.css';
import flower1 from '../../../images/flor1.PNG';
import flower2 from '../../../images/flor2.PNG';
import characters1 from '../../../images/monitos1.PNG';
import basic1 from '../../../images/sencillo1.PNG';
import blackBow from '../../../images/blackBow.jpeg';
import flowerBow from '../../../images/flowerBow.jpeg';
import characterBow from '../../../images/characterBow.jpeg';
import turtleBow from '../../../images/turtleBow.jpeg';

const Posts = () => {
    
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

    return (
        <Grid container columns={{ xs:12 }} >
            <Grid xs={12}>
                <div>
                    <h1>OUR PRODUCTS</h1>
                    <h4>OUR PRODUCTS</h4>
                </div>
            </Grid>
            <Grid xs={12} className="image-list">
                <ImageList className="list-size" cols={4} gap={10}> 
                    {
                        images.map( (item, index) => (
                            <ImageListItem key={index} >
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <ImageListItemBar
                                    sx={{background:'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
                                    title={item.title}
                                    position="top"
                                    actionPosition="left"
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Grid>
        </Grid>
    );
}

export default Posts;
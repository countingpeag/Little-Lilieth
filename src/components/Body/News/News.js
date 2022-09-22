import Grid from '@mui/material/Unstable_Grid2';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

import '../../../Styles/news.css';
import flower from '../../../images/flor1.PNG';
import characters1 from '../../../images/monitos1.PNG';
import basic1 from '../../../images/sencillo1.PNG';
import portada from '../../../images/portada.jpeg';

const Home = ({theme}) => {

    const [page, setPage] = useState(0);

    const images = [
        { image: portada, text: "portada", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        { image: flower, text: "flower", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        { image: characters1, text: "character", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        { image: basic1, text: "basics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ];

    const handlePaginationChange = (event, value) => {
        setPage(value-1);
        console.log(value-1);
    }

    return (
        <Grid container columns={{xs: 12}}>
            <Grid xs={12} className="item-center">
                <Card sx={{ maxWidth: 2000 }} className="card-size">
                    <CardActionArea>
                        <CardMedia component="img" height="500" image={images[page].image} alt={images[page].text} className="post-img" />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid xs={12} className="rail">
                <ThemeProvider theme={theme}>
                    <Pagination className="item-center" count={3} color="primary" variant="outlined" onChange={handlePaginationChange} />
                </ThemeProvider>
            </Grid>
        </Grid>
    )
}

export default Home;
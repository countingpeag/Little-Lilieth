import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../../../Styles/products.css';

const Products = ({images}) => {

    const [ t ] = useTranslation(); 

    return (
        <Grid container columns={{ xs:12 }} >
            <Grid xs={12}>
                <div>
                    <h1>{ t('products.title') }</h1>
                    <h3>{ t('products.subTitle') }</h3>
                </div>
            </Grid>
            <Grid container xs={12}>
                <Grid xs={6} md={3} className="item-place">
                    <Card sx={{ maxWidth: 380 }}>
                        <Link to={`/${images[0].title}`} >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="strong">
                                        {images[0].title}
                                    </Typography>
                                </CardContent>
                                <CardMedia component="img" image={images[0].image} alt={images[0].title} height="450"/>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid xs={6} md={3} className="item-place">
                    <Card sx={{ maxWidth: 380 }}>
                        <Link to={`/${images[1].title}`} >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="strong">
                                        {images[1].title}
                                    </Typography>
                                </CardContent>
                                <CardMedia component="img" image={images[1].image} alt={images[1].title} height="450"/>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid xs={6} md={3} className="item-place">
                    <Card sx={{ maxWidth: 380 }}>
                        <Link to={`/${images[2].title}`} >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="strong">
                                        {images[2].title}
                                    </Typography>
                                </CardContent>
                                <CardMedia component="img" image={images[2].image} alt={images[2].title} height="450"/>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid xs={6} md={3} className="item-place">
                    <Card sx={{ maxWidth: 380 }}>
                        <Link to={`/${images[3].title}`} >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="strong">
                                        {images[3].title}
                                    </Typography>
                                </CardContent>
                                <CardMedia component="img" image={images[3].image} alt={images[3].title} height="450"/>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Products;
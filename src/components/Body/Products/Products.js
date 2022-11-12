import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../../../Styles/products.css';

const Products = ({images}) => {

    const [ t ] = useTranslation(); 
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid container columns={{ xs:12 }} >
            <Grid xs={12}>
                <div>
                    <h1>{ t('products.title') }</h1>
                    <h3>{ t('products.subTitle') }</h3>
                </div>
            </Grid>
            <Grid xs={12} className="image-list">
                <ImageList rowHeight={'auto'} cols={matches ? 4 : 2} gap={30} className="list-size">
                    {
                        images.map( (item) => (
                            <ImageListItem key={item.title}>
                                <Card sx={{ maxWidth: 380 }}>
                                    <Link to={`/${item.title}`} >
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h7" component="strong">
                                                    {item.title}
                                                </Typography>
                                            </CardContent>
                                            <CardMedia component="img" image={item.image} alt={item.title} height="450"/>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Grid>
        </Grid>
    );
}

export default Products;
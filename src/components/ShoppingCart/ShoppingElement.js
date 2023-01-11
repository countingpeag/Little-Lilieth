import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardActionArea from '@mui/material/CardActionArea';

const ShopingElement = ({item}) => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid container>
            <Grid xs={3} className="image">
                <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea onClick={() => console.log("ITEM CLICKED")}>
                        <CardMedia component="img" height={matches ? 240 : 140} image={item.image} alt={item.title}/>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid xs={5} className="description">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h4>Quantity: 1</h4> 
            </Grid>
            <Grid xs={4} className="price">
                <h2>Price</h2>
                <p>$30</p>
            </Grid>
        </Grid>
    );
}

export default ShopingElement;
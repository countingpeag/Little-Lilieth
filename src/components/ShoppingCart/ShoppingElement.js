import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardActionArea from '@mui/material/CardActionArea';

const ShopingElement = ({item}) => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid container>
            <Grid xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea onClick={() => console.log("ITEM CLICKED")}>
                        <CardMedia component="img" height={matches ? 200 : 100} image={item.image} alt={item.title}/>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid xs={4}>
                <h2>DESCRIPTION</h2>
            </Grid>
            <Grid xs={4}>
                <h2>PRICE</h2>
            </Grid>
        </Grid>
    );
}

export default ShopingElement;
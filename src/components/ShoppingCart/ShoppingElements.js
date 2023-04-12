import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import '../../Styles/shoppingCart.css';

const ShoppingElements = ({images}) => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid Container>
            <Grid xs={12}>
                {
                    images.map( item => {
                        return (
                            <div id={item.title}>
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
                                        Quantity: 1  <Button variant="text"><DeleteOutlineIcon /></Button>  
                                    </Grid>
                                    <Grid xs={4} className="price">
                                        <h2>Price</h2>
                                        <p>$30</p>
                                    </Grid>
                                </Grid>
                                <Divider />
                            </div>
                        );
                    })
                }
            </Grid>
            <Grid xs={12}>
                <h2 className="totalPrice">Total: $400</h2>
            </Grid>
        </Grid>
    );
}

export default ShoppingElements;
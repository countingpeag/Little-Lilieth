import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import '../../Styles/shoppingCart.css';

const ShoppingElements = ({images}) => {

    const [quantity, setquantity ] = useState(0);
    const matches = useMediaQuery('(min-width:600px)');

    const handleReduce = () => {
        if(quantity>0)
            setquantity(quantity-1);
    }

    const handleAdd = () => {
        setquantity(quantity+1);
    }

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
                                        Quantity: 
                                        <IconButton aria-label="previous" onClick={handleReduce}>
                                            <RemoveIcon/>
                                        </IconButton>
                                        {quantity}
                                        <IconButton aria-label="next" onClick={handleAdd}>
                                            <AddIcon/>
                                        </IconButton>  
                                        <Button variant="text"><DeleteOutlineIcon /></Button>  
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
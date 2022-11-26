import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardActionArea from '@mui/material/CardActionArea';
import Product from './Product';
import { useState } from 'react';

import '../../../Styles/galery.css';

const ProductList = ({theme, title, images}) => {

    const [opened, setOpened] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    //const [currentTitle, setCurrentTitle] = useState("");
    const [currentPrice, setCurrentPrice] = useState(15);
    //const [currentDescription, setcurrentDescription] = useState("");
    const [amount, setAmount] = useState(0);

    const handleOpen = (item) => {
        setCurrentImage(item.image);
        //setCurrentTitle(item.title);
        setCurrentPrice(item.price);
        //setcurrentDescription(item.description);
        setOpened(true);
    }

    const handleClose = () => setOpened(false);

    const handleAdd = () => {
        var productStock = 6;

        if(amount<productStock)
            setAmount(amount+1);
    }

    const handleRemove = () => {
        if(amount>0)
            setAmount(amount-1);
    }
  
    const matches = useMediaQuery('(min-width:600px)');

    return(
        <Grid container columns={{xs:12}}>
            <Grid xs={12}>
                <h1>{title}</h1>
            </Grid>
            <Grid xs={12} className="image-list">
                <ImageList rowHeight={'auto'} cols={matches ? 5 : 2} gap={20} className="list-size">
                    {
                        images.map( (item) => (
                            <ImageListItem key={item.title}>
                                <Card sx={{ maxWidth: 345 }}>
                                    
                                    <CardActionArea onClick={() => handleOpen(item)}>
                                        <CardMedia component="img" height={matches ? 400 : 200} image={item.image} alt={item.title}/>
                                    </CardActionArea>
                                    <CardContent>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {item.description}
                                        </Typography>
                                        <Box sx={{ display: 'fix', alignItems: 'center', pl: 1, pb: 1 }}>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                $15
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    
                                </Card>
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Grid>

            <Product 
                theme={theme}
                image={currentImage} 
                opened={opened} 
                closeMethod={handleClose} 
                addMethod={handleAdd} 
                removeMethod={handleRemove} 
                matches={matches} 
                amount={amount} 
                price={currentPrice}
            />
        </Grid>
    );
}

export default ProductList;
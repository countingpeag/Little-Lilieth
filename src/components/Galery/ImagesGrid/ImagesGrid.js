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
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

import '../../../Styles/galery.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const ImagesGrid = ({title, images}) => {

    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentPrice, setCurrentPrice] = useState(15);
    const [currentDescription, setcurrentDescription] = useState("");
    const [amount, setAmount] = useState(0);

    const handleOpen = (item) => {
        setCurrentImage(item.image);
        setCurrentTitle(item.title);
        //setCurrentPrice(item.price);
        setcurrentDescription(item.description);
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

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

            <Grid>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {currentTitle}
                    </Typography>
                    <CardMedia component="img" height={matches ? 400 : 200} image={currentImage} alt={currentTitle}/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {`Price:${currentPrice}$ Description:${currentDescription}`}
                    </Typography>
                    <IconButton aria-label="previous" onClick={handleRemove}>
                        <RemoveIcon/>
                    </IconButton>
                        {amount}
                    <IconButton aria-label="next" onClick={handleAdd}>
                        <AddIcon/>
                    </IconButton>
                    <Button onClick={handleClose}>Add to Cart</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </Box>
            </Modal>
            </Grid>
        </Grid>
    );
}

export default ImagesGrid;
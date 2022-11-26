import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';

import '../../../Styles/product.css';

const Product = ({theme, opened, closeMethod, addMethod, removeMethod, matches, image, amount, price}) => {

    return(
        <Modal open={opened} onClose={closeMethod} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className="box">
                <Grid container className="container">
                    <Grid xs={6} className="imageSpace">
                            <Card sx={{ maxWidth: 450 }}>
                                <CardMedia component="img" height={matches ? 400 : 200} image={image} alt={"image"}/>
                            </Card>
                    </Grid>
                    <Grid xs={6} className="color1">
                        <Grid xs={12}>
                            <Typography id="modal-modal-title" variant="h4" component="h4" align='left'>
                                TITLE
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Typography id="modal-modal-title" variant="h6" component="h6" align='left'>
                                Sub Title
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }} className="descriptionSize" align='left'> 
                                This is a perfect bow to use in your christmas parties. This is a perfect bow to use in your christmas parties. This is a perfect bow to use in your christmas parties.
                            </Typography>
                        </Grid>
                        <Grid xs={12} container justifyContent="left">
                            <IconButton aria-label="previous" onClick={removeMethod}>
                                <RemoveIcon/>
                            </IconButton>
                            <IconButton aria-label="previous">
                                {amount}
                            </IconButton>
                            <IconButton aria-label="next" onClick={addMethod}>
                                <AddIcon/>
                            </IconButton>
                        </Grid>
                        <Grid xs={12}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }} align="left">
                                {`Price:${price}`}
                            </Typography>
                        </Grid>
                        <Grid xs={12} container justifyContent="left">
                            <Button theme={theme} variant="contained" color="secondary" onClick={closeMethod} className="buttonSize">Add to Cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}

export default Product;
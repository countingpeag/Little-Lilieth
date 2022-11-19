import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';

const Product = ({opened, closeMethod, addMethod, removeMethod, matches, image, amount, price}) => {

    const boxStyle = {
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

    return(
        <Modal open={opened} onClose={closeMethod} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={boxStyle}>
                <Grid container>
                    <Grid xs={6}>
                        <CardMedia component="img" height={matches ? 400 : 200} image={image} alt={"image"}/>
                    </Grid>
                    <Grid xs={6}>
                        <Typography id="modal-modal-title" variant="h4" component="h4">
                            TITLE
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h6">
                            Sub Title
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <ul>
                                <li>This is a perfect bow to use in your christmas parties. This is a perfect bow to use in your christmas parties. This is a perfect bow to use in your christmas parties.</li>
                                <li>This is a perfect bow to use in your christmas parties. This is a perfect bow to use in your christmas parties. This is a perfect bow to use in your christmas parties.</li>
                                <li>This is a perfect bow to use in your christmas parties. This is a perfect bow to use in your christmas parties. This is a perfect bow to use in your christmas parties.</li>
                            </ul>
                        </Typography>

                        <IconButton aria-label="previous" onClick={removeMethod}>
                            <RemoveIcon/>
                        </IconButton>
                            {amount}
                        <IconButton aria-label="next" onClick={addMethod}>
                            <AddIcon/>
                        </IconButton>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {`Price:${price}$`}
                        </Typography>
                        <Button onClick={closeMethod}>Add to Cart</Button>
                        <Button onClick={closeMethod}>Cancel</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}

export default Product;
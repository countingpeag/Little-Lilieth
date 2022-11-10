import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

import '../../../Styles/galery.css';

const ImagesGrid = ({title, images}) => {

    const [value, setValue] = useState(0);
    const matches = useMediaQuery('(min-width:600px)');

    const handleAdd = () => {
        var productStock = 6;

        if(value<productStock)
            setValue(value+1);
    }

    const handleRemove = () => {
        if(value>0)
            setValue(value-1);
    }

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
                                    <CardMedia component="img" height={matches ? 400 : 200} image={item.image} alt={item.title}/>
                                    <CardContent>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {item.description}
                                        </Typography>
                                        <Box sx={{ display: 'fix', alignItems: 'center', pl: 1, pb: 1 }}>
                                            <IconButton aria-label="previous" onClick={handleRemove}>
                                                <RemoveIcon/>
                                            </IconButton>
                                            <IconButton>
                                                {value}
                                            </IconButton>
                                            <IconButton aria-label="next" onClick={handleAdd}>
                                                <AddIcon/>
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Grid>
        </Grid>
    );
}

export default ImagesGrid;
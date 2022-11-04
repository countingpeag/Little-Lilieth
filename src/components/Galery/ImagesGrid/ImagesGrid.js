import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import '../../../Styles/galery.css';

const ImagesGrid = ({title, images}) => {

    const theme = useTheme();

    return(
        <Grid container columns={{xs:12}}>
            <Grid xs={12}>
                <h1>{title}</h1>
            </Grid>
            <Grid xs={12} className="image-list">
                <ImageList rowHeight={'auto'} cols={3}  gap={10} className="list-size">
                    {
                        images.map( (item) => (
                            <ImageListItem key={item.title}>
                                <Card sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <CardMedia component="img" sx={{ width: 151 }} image={item.image} alt="Live from space album cover" />
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            <IconButton aria-label="previous">
                                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                            </IconButton>
                                            <IconButton aria-label="play/pause">
                                                {"2"}
                                            </IconButton>
                                            <IconButton aria-label="next">
                                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                            </IconButton>
                                        </Box>
                                    </Box>
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
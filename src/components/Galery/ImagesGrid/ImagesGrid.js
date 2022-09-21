import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2';

const ImagesGrid = ({title, images}) => {
    return(
        <Grid container columns={{xs:12}}>
            <Grid xs={12}>
                <h1>{title}</h1>
            </Grid>
            <Grid xs={12}>
                <ImageList cols={4} rowHeight={'auto'} gap={10}>
                    {
                        images.map( (item) => (
                            <ImageListItem key={item.title}>
                                <img src={`${item.image}?w=164&h=164&fit=crop&auto=format`} 
                                    srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} 
                                    alt={item.title} 
                                    loading="lazy" />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Grid>
        </Grid>
    );
}

export default ImagesGrid;
import Grid from '@mui/material/Unstable_Grid2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Link } from 'react-router-dom';

import '../../../Styles/posts.css';

const Posts = ({images}) => {

    return (
        <Grid container columns={{ xs:12 }} >
            <Grid xs={12}>
                <div>
                    <h1>OUR PRODUCTS</h1>
                    <h4>OUR PRODUCTS</h4>
                </div>
            </Grid>
            <Grid xs={12} className="image-list">
                <ImageList className="list-size" cols={4} gap={10}> 
                    {
                        images.map( (item, index) => (
                            <ImageListItem key={index} >
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <ImageListItemBar
                                    sx={{background:'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
                                    title={item.title}
                                    position="top"
                                    actionPosition="left"
                                    actionIcon={
                                        <Link to={"/galery"} >
                                            <IconButton sx={{ color: 'white' }} aria-label={`star ${item.title}`} >
                                                <ViewModuleIcon/>
                                            </IconButton>
                                        </Link>
                                      }
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Grid>
        </Grid>
    );
}

export default Posts;
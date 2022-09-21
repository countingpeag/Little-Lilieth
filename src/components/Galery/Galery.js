import Header from '../Header'
import ImagesGrid from './ImagesGrid';
import Footer from '../Footer';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { debounce } from '../../utilities/debounce.js';

const Galery = ({title, images, theme}) => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;

      setHeaderVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, [prevScrollPos, headerVisible, handleScroll]);


  return (
    <Box sx={{ flexGrow: 1}} className="App">
      <Grid container column={{ xs:4, sm:8, md:12 }}>
        <Grid xs={12} key={"header"} style={{top: headerVisible ? '0' : '-200px' }} className="header"> 
          <Header theme={theme} />
        </Grid>
        <Grid xs={12} key={"body"} className="body">
          <ImagesGrid title={title} images={images} />
        </Grid>
        <Grid xs={12} key={"footer"} className="footer">
          <Footer theme={theme} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Galery;

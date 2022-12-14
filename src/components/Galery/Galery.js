import SubHeader from '../Headers/SubHeader';
import ProductList from './ProductList';
import SubFooter from '../Footers/SubFooter';
import SubMenu from '../Menus/SubMenu';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect } from 'react';
import { debounce } from '../../utilities/debounce.js';

import '../../Styles/galery.css'

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

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container column={{ xs:4, sm:8, md:12 }}>
        <Grid xs={12} key={"header"}> 
          { matches ? <SubHeader theme={theme} /> : <SubMenu theme={theme} /> }
        </Grid>
        <Grid xs={12}  key={"body"} className="body">
          <ProductList theme={theme} title={title} images={images} />
        </Grid>
        <Grid xs={12} key={"footer"} className="footer">
          <SubFooter />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Galery;
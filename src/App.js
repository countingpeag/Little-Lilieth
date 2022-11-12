import Header from './components/Headers/Header';
import Body from './components/Body';
import Footer from './components/Footers/Footer';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from './components/Menus/Menu';
import { useState, useEffect } from 'react';
import { debounce } from './utilities/debounce.js';

import './App.css';

const App = ({theme}) => {

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
    <Box sx={{ flexGrow: 1}} className="App">
      <Grid container column={{ xs:4, sm:8, md:12 }}>
        <Grid xs={12} key={"header"} className="header">
          { matches ? <Header theme={theme} /> : <Menu theme={theme}  /> }
        </Grid>
        <Grid xs={12} key={"body"} className="body">
          <Body theme={theme} />
        </Grid>
        <Grid xs={12} key={"footer"} className="footer">
          <Footer theme={theme} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
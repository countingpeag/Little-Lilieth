import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      //main: '#ffc0cb',
      main: '#000000'
    }
  },
});


function App() {
  return (
    <Box sx={{ flexGrow: 1}} className="App">
      <Grid container spacing={{ xs: 2 }} column={{ xs:4, sm:8, md:12 }}>
        <Grid xs={12} key={"header"} className="header"> 
          <Header theme={theme} />
        </Grid>
        <Grid xs={12} key={"body"}>
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

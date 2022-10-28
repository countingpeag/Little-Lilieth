import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useState, Fragment } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
        {children}
        </Slide>
    );
}

const GaleryMenu = (props) => {

    const [menu, setMenu] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setMenu(false);
    };

    const list = () => (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
          <List>
            <Link style={{ textDecoration: 'none' }} to="/">
                <ListItem key={"Home"} disablePadding>
                    <ListItemButton>
                        <HomeIcon />
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/#products">
                <ListItem key={"Products"} disablePadding>
                    <ListItemButton>
                        <BurstModeIcon />
                        <ListItemText primary={"Products"} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/#about-us">
                <ListItem key={"Aboutus"} disablePadding>
                    <ListItemButton>
                        <ApartmentIcon />
                        <ListItemText primary={"About us"} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/#contact">
                <ListItem key={"Contact"} disablePadding>
                    <ListItemButton>
                        <EmailIcon />
                        <ListItemText primary={"Contant"} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/#faq">
                <ListItem key={"FAQ"} disablePadding>
                    <ListItemButton>
                        <LiveHelpIcon />
                        <ListItemText primary={"FAQ"} />
                    </ListItemButton>
                </ListItem>
            </Link>
          </List>

          <Divider />

          <List>
            <ListItem key={"Profile"} disablePadding>
                <ListItemButton>
                    <AccountCircleIcon />
                    <ListItemText primary={"Profile"} />
                </ListItemButton>
            </ListItem>
            <ListItem key={"LogOut"} disablePadding>
                <ListItemButton>
                    <LogoutIcon />
                    <ListItemText primary={"Log out"} />
                </ListItemButton>
            </ListItem>
          </List>
        </Box>
      );

    const handleClick = () => {
        console.log(menu);
        setMenu(true)
    };

  return (
    <Fragment>
        <ThemeProvider theme={props.theme}>
        <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar color="secondary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon onClick={handleClick}/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Little Lilieth
                    </Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
        <Toolbar />

        <Drawer anchor={"left"} open={menu} onClose={toggleDrawer("left", false)}>
                {list()}
        </Drawer>
        </ThemeProvider>
    </Fragment>
  );
}

export default GaleryMenu;
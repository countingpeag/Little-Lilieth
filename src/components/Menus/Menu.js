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
import { HashLink } from 'react-router-hash-link';


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

const Menu = (props) => {

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
            <HashLink smooth to="#">
                <ListItem key={"Home"} disablePadding>
                    <ListItemButton>
                        <HomeIcon />
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#products">
                <ListItem key={"Products"} disablePadding>
                    <ListItemButton>
                        <BurstModeIcon />
                        <ListItemText primary={"Products"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#about-us">
                <ListItem key={"Aboutus"} disablePadding>
                    <ListItemButton>
                        <ApartmentIcon />
                        <ListItemText primary={"About us"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#contact">
                <ListItem key={"Contact"} disablePadding>
                    <ListItemButton>
                        <EmailIcon />
                        <ListItemText primary={"Contant"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#faq">
                <ListItem key={"FAQ"} disablePadding>
                    <ListItemButton>
                        <LiveHelpIcon />
                        <ListItemText primary={"FAQ"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
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
                        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                        <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
                            Little Lilieth
                        </Typography>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon onClick={handleClick}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

            <Drawer anchor={"right"} open={menu} onClose={toggleDrawer("right", false)}>
                    {list()}
            </Drawer>
        </ThemeProvider>
    </Fragment>
  );
}

export default Menu;
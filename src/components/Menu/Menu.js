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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState, Fragment } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { HashLink } from 'react-router-hash-link';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Menu = (props: Props) => {

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
                <ListItem key={"N/A"} disablePadding>
                    <ListItemButton>
                        <InboxIcon />
                        <ListItemText primary={"N/A"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#">
                <ListItem key={"Home"} disablePadding>
                    <ListItemButton>
                        <InboxIcon />
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#products">
                <ListItem key={"Products"} disablePadding>
                    <ListItemButton>
                        <InboxIcon />
                        <ListItemText primary={"Products"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#about-us">
                <ListItem key={"Aboutus"} disablePadding>
                    <ListItemButton>
                        <InboxIcon />
                        <ListItemText primary={"About us"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#contact">
                <ListItem key={"Contact"} disablePadding>
                    <ListItemButton>
                        <InboxIcon />
                        <ListItemText primary={"Contant"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
            <HashLink smooth to="#faq">
                <ListItem key={"FAQ"} disablePadding>
                    <ListItemButton>
                        <InboxIcon />
                        <ListItemText primary={"FAQ"} />
                    </ListItemButton>
                </ListItem>
            </HashLink>
          </List>

          <Divider />

          <List>
            <ListItem key={"Profile"} disablePadding>
                <ListItemButton>
                    <MailIcon />
                    <ListItemText primary={"Profile"} />
                </ListItemButton>
            </ListItem>
            <ListItem key={"LogOut"} disablePadding>
                <ListItemButton>
                    <MailIcon />
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

export default Menu;
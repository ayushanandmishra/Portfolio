import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';


const drawerWidth = 240;


function DrawerAppBar(props) {
    
    const navigate = useNavigate();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const media = useMediaQuery('(min-width:800px)');


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navigatetoSkills = () => {
        navigate('/skills');
    }

    const navigatetoProjects = () => {
        navigate('/projects');
    }

    const navigatetoAboutme = () => {
        navigate('/aboutme');
    }



    function openInNewTab(url) {
        var win = window.open('https://drive.google.com/file/d/1HSNwkgD-vBW_HTKrM8PTx2jJsu8Qak5M/view', '_blank');
        win.focus();
      }


    const drawer = (
        <Box onClick={handleDrawerToggle} style={{ color: 'white' }} sx={{ textAlign: 'center' }}>
            <Typography style={{ fontFamily: 'Cedarville Cursive' }} variant="h6" sx={{ my: 2 }}>
                anand
            </Typography>
            <Divider />
            <List>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => { navigate('/') }} sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'Home'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={navigatetoSkills} sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'Skills'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={navigatetoProjects} sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'Projects'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={navigatetoAboutme} sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'About Me'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={openInNewTab} sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'Resume'} /> 
                    </ListItemButton>
                   
                </ListItem>

            </List>
        </Box>
    );

    

    return (

        <div>
            <Box sx={{ display: 'flex' }}>

                <AppBar component="nav" position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                                style={{ fontFamily: 'Cedarville Cursive' }}
                            >
                                Anand
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                                {media ? <Box>
                                    <Button onClick={() => { navigate('/') }} sx={{ color: '#fff', mr: '3rem' }}>
                                        Home
                                    </Button>
                                    <Button onClick={navigatetoSkills} sx={{ color: '#fff', mr: '3rem' }}>
                                        Skills
                                    </Button>
                                    <Button onClick={navigatetoProjects} sx={{ color: '#fff', mr: '3rem' }}>
                                        Projects
                                    </Button>

                                    <Button onClick={navigatetoAboutme} sx={{ color: '#fff', mr: '3rem' }}>
                                        About Me
                                    </Button>

                                </Box> : <Box>
                                    <Button onClick={() => { navigate('/') }} sx={{ color: '#fff', mr: '1rem' }}>
                                        Home
                                    </Button>
                                    <Button onClick={navigatetoSkills} sx={{ color: '#fff', mr: '1rem' }}>
                                        Skills
                                    </Button>
                                    <Button onClick={navigatetoProjects} sx={{ color: '#fff', mr: '1rem' }}>
                                        Projects
                                    </Button>

                                    <Button onClick={navigatetoAboutme} sx={{ color: '#fff', mr: '1rem' }}>
                                        About Me
                                    </Button>

                                </Box>}





                            </Box>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <a href="https://drive.google.com/file/d/1HSNwkgD-vBW_HTKrM8PTx2jJsu8Qak5M/view" target="_blank" rel="noopener noreferrer">
                                    <Button size={media ? 'medium' : 'small'} variant='contained' color="success">
                                        Resume
                                    </Button>
                                </a>

                            </Box>

                        </Box>

                    </Toolbar>
                </AppBar>







                <Box component="nav">
                    <Drawer

                     
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        PaperProps={{
                            sx: {
                                backgroundColor: "rgb(118, 2, 242,0.3)",
                                color: "red",
                            }
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

            </Box>
        </div>

    );
}


export default DrawerAppBar;

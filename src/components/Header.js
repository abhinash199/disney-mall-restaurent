import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from '@mui/material/Link';

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

//search as JSX
const search = (
  <StyledSearch>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Suchen…"
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);

export default function Header() {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

 
  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar position="static"  className="top-header">
      <Container maxWidth="lg" disableGutters="true" className="top-header">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Food Zone
          </Typography>
          <div className="menu">
          <Link className="menu-link" href="/">Home</Link>
          <Link className="menu-link" href="/menu">Our Menu</Link>
          <Link className="menu-link" href="/food">Our Food</Link>
          <Link className="menu-link" href="/about-us">About us</Link>
          <Link className="menu-link" href="/feedback">Feedback</Link>
          </div>


          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                sm: "block",
                md: "none"
              }
            }}
          >
            <MenuIcon sx={{color:"#fff",fontSize:"2.5rem"}} />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                
                height: 1,
                backgroundColor: "#ffffff",
                width:"292px"
              }}
             
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} sx={{color:"#222831",fontSize:"2.5rem"}} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton className="menu-item-mobile" component={Link} to="/">
                  <ListItemIcon sx={{minWidth:"32px"}} >
                    <HomeIcon sx={{ color: "primary.main"}} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton className="menu-item-mobile" component={Link} href="/menu">
                  <ListItemIcon sx={{minWidth:"32px"}}>
                    <MenuBookIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Our Menu" />
                </ListItemButton>

                <ListItemButton className="menu-item-mobile" component={Link} href="/food">
                  <ListItemIcon sx={{minWidth:"32px"}}>
                    <FastfoodIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Our Food" />
                </ListItemButton>

                <ListItemButton className="menu-item-mobile" component={Link} href="/about-us">
                  <ListItemIcon sx={{minWidth:"32px"}}>
                    <PeopleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="About us" />
                </ListItemButton>

                <ListItemButton className="menu-item-mobile"  component={Link} href="/feedback">
                  <ListItemIcon sx={{minWidth:"32px"}}>
                    <FeedbackIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Feedback" />
                </ListItemButton>
              </Box>

            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

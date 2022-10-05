import React from "react";
import Link from "next/link";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { navItemsType } from "types/alltypes";

interface Props {
  window?: () => Window;
}

const drawerWidth = 260;
const navItems: navItemsType[] = [
  { name: "Home", href: "/", BtnVar: "text" },
  { name: "About", href: "/about", BtnVar: "text" },
  { name: "Contact", href: "/contact", BtnVar: "text" },
  { name: "SignUp", href: "/signup", BtnVar: "outlined" },
  { name: "Login", href: "/login", BtnVar: "contained" },
];

export default function Header(props: Props) {
  const headerTitle = "Chinese Market";
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {headerTitle}
      </Typography>
      <Divider color="black" />
      <List>
        {navItems.map((item: navItemsType) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.href}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex"}} component={"header"}>
      <AppBar component="nav" elevation={3} color="white">
        <Box py={1}>
          <Container>
            <MyToolBar
              handleDrawerToggle={handleDrawerToggle}
              headerTitle={headerTitle}
            />
          </Container>
        </Box>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

const MyToolBar = (props: any) => {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={props.handleDrawerToggle}
        sx={{ mr: 1, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
      >
        {props.headerTitle}
      </Typography>
      <Box
        sx={{ display: { xs: "none", sm: "block" } }}
        justifyContent="space-between"
      >
        {navItems.map((item: navItemsType) => {
          // <Box displayPrint={"inline"}  key={item.name}>
          return (
            <Link href={item.href} key={item.name}>
              <Button
                component="a"
                variant={item.BtnVar || "text"}
                key={item.name}
                sx={{ color: "#000", fontWeight: 500, mr: 0.5 }}
              >
                {item.name}
              </Button>
            </Link>
          );
          // </Box>
        })}
      </Box>
    </Toolbar>
  );
};

"use client"; // Mark this component as a client component

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar position="sticky">
      <Box
        border={"1px solid black"}
        sx={{
          // position:"sticky",
          backgroundColor: "white",
          boxSizing: "border-box",
          boxShadow: "0px 2px 4px rgb(224,224,224)",
          borderRadius: "4px",
          border: "0.8px solid rgb(224,224,224)",
        }}
        paddingX={3}
        paddingY={1}
      >
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              backgroundColor: "white",
              color: "black",
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              //   mr: 2,

              display: { xs: "none", md: "flex" },
              //   fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#10183c",
              textDecoration: "none",
            }}
          >
            MultiStep Form Wizard
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //   onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <AccountCircleRoundedIcon
                backgroundColor="black"
                fontSize="40px"
                //   alt="Remy Sharp"
                //   src="/static/images/avatar/2.jpg"
                />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Avatar">
            </Tooltip>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;

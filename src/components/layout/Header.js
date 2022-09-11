import { useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// mui components
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  Container,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import QuizIcon from "@mui/icons-material/Quiz";

const pages = ["ContactUs", "AboutUs"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      style={{
        color: "#e3e3e3",
        backgroundColor: "#ffffff00",
        backdropFilter: "blur(8px)",
        borderBottom: "solid 0.5px #e3e3e3",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          style={{
            height: "50px",
            minHeight: "50px",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <QuizIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              Quiz
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#e3e3e3" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`}>
                    <Typography textAlign="center">
                      {page.split("U")[0] + " " + ["Us"]}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <QuizIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            Quiz
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#e3e3e3", display: "block" }}
              >
                <Link to={`/${page}`}>{page.split("U")[0] + " " + ["Us"]}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

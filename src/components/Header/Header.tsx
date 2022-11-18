import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Accordion } from "../Accordion/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { colors } from "../../theme";

import { primary, secondary } from "../../menu.json";

const drawerWidth = 340;

const navLabels = {
  primary,
  secondary,
};

export type Content = typeof navLabels.primary[number];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const iconColor = colors.greenDark;

  const filteredNavLabels = navLabels.primary.filter(
    (item) => item.type !== "divider"
  );

  const drawer = filteredNavLabels.map((label) => (
    <Accordion key={label.id} label={label.title} content={label} />
  ));

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ bgcolor: colors.greenLight }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon sx={{ color: colors.greyLight }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: "3rem",
              color: colors.blue,
              width: { xs: "100%", lg: "auto" },
              textAlign: { xs: "center", lg: "inherit" },
            }}
          >
            STICKER IT
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
          >
            {filteredNavLabels.map((label) => (
              <Button key={label.id} sx={{ color: colors.blue, mx: ".5rem" }}>
                {label.title}
                {label.type === "group" && <ExpandMoreIcon fontSize="small" />}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              display: { xs: "none", lg: "block" },
            }}
          >
            {navLabels.secondary.slice(0, 2).map((label) => (
              <Button
                key={label.id}
                sx={{ color: colors.greenDark, fontSize: "13px" }}
              >
                {label.title} <ExpandMoreIcon fontSize="small" />
              </Button>
            ))}

            <IconButton>
              <PersonIcon sx={{ color: iconColor }} />
            </IconButton>
            <IconButton>
              <SearchIcon sx={{ color: iconColor }} />
            </IconButton>
            <IconButton>
              <ShoppingBagIcon sx={{ color: iconColor }} />
            </IconButton>
          </Box>
          <ShoppingBagIcon sx={{ display: { lg: "none" }, color: iconColor }} />
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

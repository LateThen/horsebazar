import { useEffect } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import { usePathname } from "../../routes/hooks";
import { RouterLink } from "../../routes/components";

import { useResponsive } from "../../hooks/use-responsive";

import { account } from "../../_mock/account";

import Logo from "../../components/logo";
import Scrollbar from "../../components/scrollbar";

import { NAV } from "./config-layout";
import navConfig from "./config-navigation";

import Advertisement from "../../components/advertisement/advertisement";
import { primary } from "../../theme/palette";

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }} marginTop="10px">
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
      <Advertisement/>
    </Stack>
  );

  const renderUpgrade = <></>;

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Logo sx={{ mt: 3}} />

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />

      {renderUpgrade}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 3px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
              backgroundColor: primary.dark,
              backgroundImage: "none"
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;
  if (item.title == "register") {
    return (
      <ListItemButton
        component={RouterLink}
        href={item.path}
        sx={{
          position : "absolute",
          bottom : 20,
          left : 20,
          width : "85%",
          minHeight: 44,
          borderRadius: 0.75,
          typography: "body2",
          color: "text.secondary",
          textTransform: "capitalize",
          fontWeight: "fontWeightMedium",
          ...(active && {
            color: "primary.main",
            fontWeight: "fontWeightSemiBold",
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
            },
          }),
        }}
      >
        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>

        <Box component="span">{item.title} </Box>
      </ListItemButton>
    );
  }
  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "secondary.light",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.secondary.light, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.secondary.light, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

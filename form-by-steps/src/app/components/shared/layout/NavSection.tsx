import { useState } from "react";

import { useEffectOnce } from "@/app/hooks/useEffectOnce";
import getNavConfig from "@/app/utils/navConfig";
import { $TSFixMeLater, NavConfigItem, ThemeProps } from "@models/index";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { displayIcon } from "@utils/displayIcon";
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";

// ----------------------------------------------------------------------

const ListItemStyle = styled(
  (props: $TSFixMeLater): $TSFixMeLater => (
    <ListItemButton disableGutters {...props} />
  )
)(({ theme }: { theme: ThemeProps }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// ----------------------------------------------------------------------

type NavItemProps = {
  item: NavConfigItem;
  active: (path: string) => boolean; // is active path?
};

function NavItem({ item, active }: NavItemProps) {
  const theme: ThemeProps = useTheme();

  const isActiveRoot: boolean = active(item.path);

  const { title, path, icon, info, children } = item;

  const [open, setOpen] = useState<boolean>(isActiveRoot ?? false);

  const handleOpen = (): void => {
    setOpen((prev: boolean) => !prev);
  };

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  };

  const activeSubStyle = {
    color: "text.primary",
    fontWeight: "fontWeightMedium",
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}>
          {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
          <ListItemText disableTypography primary={title} />
          {info && info}
          {displayIcon({
            name: open
              ? "eva:arrow-ios-downward-fill"
              : "eva:arrow-ios-forward-fill",
            size: 16,
            sx: { marginLeft: 1 },
          })}
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children?.map((item: NavConfigItem) => {
              const { title, path } = item;
              const isActiveSub = active(path);

              return (
                <ListItemStyle
                  key={title}
                  id={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}>
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "text.disabled",
                        transition: (theme) =>
                          theme.transitions.create("transform"),
                        ...(isActiveSub && {
                          transform: "scale(2)",
                          bgcolor: "primary.main",
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}>
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      <ListItemText
        disableTypography
        primary={title}
        style={{ textTransform: "none" }}
      />
      {info && info}
    </ListItemStyle>
  );
}

function NavSection() {
  const { pathname } = useLocation();

  const [navConfig, setNavConfig] = useState<NavConfigItem[]>([]);

  const fetchData = async () => {
    setNavConfig(getNavConfig());
  };

  useEffectOnce(() => {
    fetchData();
  });

  const match = (path: string): boolean =>
    path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <Box>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig?.map((item: NavConfigItem, i: number) => (
          <NavItem key={`nav_item_${i}`} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
export default NavSection;

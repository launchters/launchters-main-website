import {
  Button,
  ClickAwayListener,
  IconButton,
  Input,
  InputAdornment,
  Slide,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import { $TSFixMeLater, ThemeProps } from "@models/index";
import { displayIcon } from "@utils/displayIcon";

// -----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled("div")(({ theme }: { theme: ThemeProps }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: APPBAR_MOBILE,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  padding: theme.spacing(0, 3),

  boxShadow: (theme as $TSFixMeLater).customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up("md")]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

function Searchbar() {
  const theme: ThemeProps = useTheme();
  const [isOpen, setOpen] = useState<boolean>(false);

  // -------------

  const handleOpen = (): void => {
    setOpen((prev) => !prev);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButton onClick={handleOpen}>
            {displayIcon({ name: "eva:search-fill", size: 20 })}
          </IconButton>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle theme={theme}>
            <Input
              type="search"
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  {displayIcon({
                    name: "eva:search-fill",
                    size: 20,
                    color: "text.disabled",
                  })}
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: "fontWeightBold" }}
            />
            <Button
              style={{ textTransform: "none" }}
              variant="contained"
              onClick={handleClose}
            >
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
export default Searchbar;

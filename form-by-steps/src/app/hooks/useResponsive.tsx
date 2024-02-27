import {
  ResponsiveQuery,
  ResponsiveQueryDict,
  ThemeProps,
} from "@models/index";
import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// -----------------------------------------------------------------------

function useResponsive(
  query: ResponsiveQuery,
  key: Breakpoint,
  start?: number | Breakpoint,
  end?: number | Breakpoint
): boolean {
  const theme: ThemeProps = useTheme();

  const mqUp: boolean = useMediaQuery(theme.breakpoints.up(key));
  const mqDown: boolean = useMediaQuery(theme.breakpoints.down(key));
  const mqBtw: boolean = useMediaQuery(
    theme.breakpoints.between(start ?? 0, end ?? 9999999)
  );
  const mqOnly: boolean = useMediaQuery(theme.breakpoints.only(key));

  if (query === ResponsiveQueryDict.up) return mqUp;
  if (query === ResponsiveQueryDict.down) return mqDown;
  if (query === ResponsiveQueryDict.between) return mqBtw;
  if (query === ResponsiveQueryDict.only) return mqOnly;

  return false;
}
export default useResponsive;

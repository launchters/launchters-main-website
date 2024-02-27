import { $TSFixMeLater, ThemeProps } from "@models/index";
import Autocomplete from "./Autocomplete";
import Backdrop from "./Backdrop";
import Button from "./Button";
import Card from "./Card";
import CssBaseline from "./CssBaseline";
import Input from "./Input";
import Paper from "./Paper";
import Tooltip from "./Tooltip";
import Typography from "./Typography";

// -----------------------------------------------------------------------

function ComponentsOverrides(theme: ThemeProps): $TSFixMeLater {
  return {
    ...Card(theme),
    ...Input(theme),
    ...Paper(theme),
    ...Button(theme),
    ...Tooltip(theme),
    ...Backdrop(theme),
    ...Typography(theme),
    ...CssBaseline(theme),
    ...Autocomplete(theme),
  };
}
export default ComponentsOverrides;

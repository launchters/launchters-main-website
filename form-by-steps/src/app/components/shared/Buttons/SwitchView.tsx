import { FormControlLabel, Stack, Switch, SwitchProps } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = SwitchProps & {
  label: string;
  setDisplay: Dispatch<SetStateAction<boolean>>;
};

export default function SwitchView({
  label,
  setDisplay,
  ...switchProps
}: Props) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean = false
  ) => {
    setDisplay((state) => !state); // toggle it
  };

  // -----

  return (
    <Stack>
      <FormControlLabel
        label={label}
        control={
          <Switch
            {...switchProps}
            onChange={handleChange}
            sx={{ ml: "auto" }}
          />
        }
      />
    </Stack>
  );
}

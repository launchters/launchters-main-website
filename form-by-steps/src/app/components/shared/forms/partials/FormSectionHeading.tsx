import { SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  sx?: SxProps;
  padding?: boolean;
  children: ReactNode;
};

const FormSectionHeading = ({ children, padding = false, sx }: Props) => (
  <Typography variant="h6" sx={{ px: padding ? 2 : 0, mb: 2, ...sx }}>
    {children}
  </Typography>
);
export default FormSectionHeading;

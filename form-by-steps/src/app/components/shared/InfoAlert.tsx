import { Alert, AlertProps, AlertTitle } from "@mui/material";
import { ReactNode } from "react";

type Props = Omit<AlertProps, "title" | "content"> & {
  title?: string | ReactNode;
  content?: string | ReactNode;
};

export default function InfoAlert({
  title,
  content,
  severity = "info",
  ...alertProps
}: Props) {
  return (
    <Alert
      elevation={3}
      severity={severity}
      className="w-100"
      {...alertProps}
      sx={{ mb: 4, ...alertProps.sx }}>
      {title && (
        <AlertTitle>
          <>{title}</>
        </AlertTitle>
      )}
      <>{content}</>
    </Alert>
  );
}

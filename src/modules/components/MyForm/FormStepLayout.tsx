import React from "react";
import { Grid, Typography } from "@mui/material";

interface StepComponentProps {
  title: string;
  subTitle?: string;
  control: React.ReactNode;
}

export const FormStepLayout: React.FC<StepComponentProps> = ({
  title,
  subTitle,
  control,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h3" className="title-margin">
            {title}
          </Typography>
          {subTitle && <Typography variant="subtitle1">{subTitle}</Typography>}
        </Grid>
        <Grid item>{control}</Grid>
      </Grid>{" "}
    </>
  );
};

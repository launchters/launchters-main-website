import { Grid, Typography } from "@mui/material";
import React from "react";

interface StepComponentProps {
  control: React.ReactNode;
  title: string;
  subTitle?: string;
}

export const FormStepLayout: React.FC<StepComponentProps> = ({
  title,
  subTitle,
  control,
}) => {
  return (
    <>
      <Grid container spacing={2} flexDirection="column">
        <Grid item>
          <Typography variant="h3" className="title-margin">
            {title}
          </Typography>
          {subTitle && <Typography variant="subtitle1">{subTitle}</Typography>}
        </Grid>
        <Grid item>{control}</Grid>
      </Grid>
    </>
  );
};

import { Button } from "@material-ui/core";
import { Box, FormGroup, Grid, Stack } from "@mui/material";
import { ReactNode } from "react";
import { $TSFix } from "../../models/ts-fix.d";
import Typography from "../Typography";

// TODO No usaremos "useState" para el estado del formulario sino React Hook Forms o Formik Forms. Ver para esto el proyecto de referencia o la documentacion de RHF (lo que prefieras)

type Props = {
  name: string;
  title: string;
  fieldCtrl: $TSFix; // TODO Fix type
  handlePrevStep: $TSFix; // TODO Fix type
  handleNextStep: $TSFix; // TODO Fix type
  prevIcon?: ReactNode;
  subTitle?: string;
};

export default function FormStepLayout({
  name,
  title,
  subTitle,
  fieldCtrl,
  prevIcon,
  handlePrevStep,
  handleNextStep,
}: Props) {
  return (
    <FormGroup
      id={`${name}-field`}
      className={`${name}-field`}
      style={{
        height: "100%",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h1" sx={{ fontSize: "1.618rem" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          {subTitle}
        </Typography>
      </Box>

      <Stack flexDirection="row" sx={{ w: "auto", m: "0 auto" }}>
        <Box sx={{ ml: 2 }}>{prevIcon}</Box>
        <Box>{fieldCtrl}</Box>
      </Stack>

      <Grid
        container
        spacing={2}
        xs={6}
        sx={{ ml: "auto", mt: "auto", mx: "auto", mb: 0 }}
      >
        <Grid item xs={4}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handlePrevStep}
          >
            Atrás
          </Button>
        </Grid>
        <Grid item xs={7}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleNextStep}
          >
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </FormGroup>
  );
}

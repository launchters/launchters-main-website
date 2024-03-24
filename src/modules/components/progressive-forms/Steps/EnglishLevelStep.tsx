import { useFormContext } from "react-hook-form";
import { FormStepLayout } from "../FormStepLayout";
import { IFormInput } from "../models/FormInputTypes";
import { Slider, Typography } from "@mui/material";

export const EnglishLevelStep = () => {
  const { register } = useFormContext<IFormInput>();
  const name = "englishLevel";

  return (
    <FormStepLayout
      title="Del 0 al 10 cómo de seguro te sientes manteniendo conversaciones en inglés con clientes."
      control={
        <>
          <Typography id="english-level-slider" gutterBottom>
            Nivel de inglés
          </Typography>
          <Slider
            {...register(name, { valueAsNumber: true })}
            aria-labelledby="english-level-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
            defaultValue={5}
            sx={{
              "& .MuiSlider-rail": {
                height: "10px",
              },
              "& .MuiSlider-track": {
                height: "10px",
              },
              "& .MuiSlider-thumb": {
                height: "20px",
                width: "20px",
              },
              width: "80%",
              margin: "0 10px",
            }}
          />
        </>
      }
    />
  );
};

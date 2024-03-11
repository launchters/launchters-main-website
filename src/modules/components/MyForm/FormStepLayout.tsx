import React from "react";
import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface StepComponentProps {
    nameId: string;
    title: string;
    subTitle?: string;
    children: React.ReactNode | React.ReactNode[];
}

export const FormStepLayout: React.FC<StepComponentProps> = ({ 
    nameId, 
    title, 
    subTitle, 
    children 
}) => {
    const { formState: { errors} } = useFormContext();
    const errorMessage = errors[nameId] && typeof errors[nameId]?.message === 'string' ? errors[nameId]?.message : '';

    return (
        <>
        <Typography variant="h3" className="title-margin">
            {title}
        </Typography>
        {subTitle && <Typography variant="subtitle1">{subTitle}</Typography>}
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    // ! No consigo corregir este problema con la validacion de los errores en el formulario.
                    error: !!errors[nameId],
                    helperText: errorMessage,
                });
            }
            return child;
        })}
        </>
    );
};
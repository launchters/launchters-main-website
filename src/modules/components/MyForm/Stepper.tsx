import { Stepper, Step, StepLabel } from '@material-ui/core';

interface FormStepperProps {
    currentStep: number;
    steps: string[];
}

export const FormStepper: React.FC<FormStepperProps> = ({ currentStep, steps }) => { 
    return (
        <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};



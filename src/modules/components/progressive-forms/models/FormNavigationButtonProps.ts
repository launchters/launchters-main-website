export interface FormNavigationButtonProps {
  currentStep: number;maxSteps:number;
  handlePreviousStep: React.MouseEventHandler<HTMLButtonElement>;
  handleNextStep: React.MouseEventHandler<HTMLButtonElement>;
}

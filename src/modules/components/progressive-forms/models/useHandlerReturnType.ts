type UseStepsHandlerReturnType = {
  currentStep: number;
  isQualified?: boolean;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
};
export default UseStepsHandlerReturnType;

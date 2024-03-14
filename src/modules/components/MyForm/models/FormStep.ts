type FormStep = {
  name: string;
  title: string;
  component: () => React.ReactNode;
};

export default FormStep;

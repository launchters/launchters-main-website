import { IFormInput } from "./FormInputTypes";

type FormStep = { 
    title: string; 
    component: React.ComponentType<IFormInput>; 
    name: string;
  };

export default FormStep;
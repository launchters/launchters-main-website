import appConfig from "../../../../config/app.config";
import { IFormInput } from "../models/FormInputTypes";

const applyQualificationCriteria = (
  stepName: string,
  formValues: IFormInput
) => {
  const qualificationCriteria = appConfig.services.gpp.qualificationCriteria;

  const {
    instagramViewCount,
    currentMonthlyIncome,
    minimumIncome,
    // englishLevel,
    // averageExpenses,
    averageHours,
  }: IFormInput = formValues;

  switch (stepName) {
    case "instagramViewCount":
      if (instagramViewCount < qualificationCriteria.minInstagramViewsCount) {
        // Pocas Views? No cualifica.
        return false;
      }
      break;
    case "monthlyIncome":
      if (
        minimumIncome >
        currentMonthlyIncome *
          qualificationCriteria.maxCurrentToDesiredIncomeMultiplier
      ) {
        // Mínimo nivel de ingresos deseado demasiado alto para el nivel de ingresos actuales = EXPECTATIVAS IRREALISTAS.
        return false;
      }
      break;
    case "averageHours":
      if (
        averageHours < qualificationCriteria.minHoursPerWeek ||
        averageHours > qualificationCriteria.maxHoursPerWeek
      ) {
        // Dedica muy pocas horas o es muy poco productivo diciendo que dedica muchas.
        return false;
      }
      break;
    // ! ----- QUALIFICATION STEP IGNORADA temporalmente.
    // case "averageExpenses":
    // //   if (averageExpenses > currentMonthlyIncome * 0.7) {
    // //     // Gastos del negocio demasiado altos!
    // //     return false;
    // //   }
    // //   break;
    // ! ----- QUALIFICATION STEP IGNORADA temporalmente.
    // // case "englishLevel":
    // //   if (englishLevel < 5) {
    // //     // Nivel de inglés demasiado bajo
    // //     // return false;
    // //   }
    //   break;
  }

  return true;
};
export default applyQualificationCriteria;

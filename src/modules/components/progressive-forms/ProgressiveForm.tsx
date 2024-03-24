import ProfitCalculatorGppForm from "./lead-magnets-hvco/ProfitCalculatorGppForm";

type Props = {
  variant: "profitCalc";
};

export default function ProgressiveForm({ variant }: Props) {
  switch (variant) {
    case "profitCalc":
      return <ProfitCalculatorGppForm />;
    default:
      throw new Error("Invalid variant at ProgressiveForm");
  }
}

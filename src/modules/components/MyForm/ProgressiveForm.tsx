import ProfitCalcGPLeadMagnetForm from "./ProfitCalcGPLeadMagnetForm";

type Props = {
  variant: "profitCalc";
};

export default function ProgressiveForm({ variant }: Props) {
  switch (variant) {
    case "profitCalc":
      return <ProfitCalcGPLeadMagnetForm />;
    default:
      throw new Error("Invalid variant at ProgressiveForm");
  }
}

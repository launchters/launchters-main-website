import { replace } from "lodash";
import numeral from "numeral";

// -----------------------------------------------------------------------

export const fShortenNumber = (num: number) =>
  replace(numeral(num).format("0.00a"), ".00", "");

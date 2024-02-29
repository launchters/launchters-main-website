import { TimePeriodUnitDict } from "./enums";

// ----------------------------------------------------------------------------

export type TimePeriodUnit = keyof typeof TimePeriodUnitDict;
export type TimePeriodStr = `${number} ${TimePeriodUnit}`;
export const TIME_UNITS = Object.keys(TimePeriodUnitDict) as TimePeriodUnit[];
export interface TimePeriod {
  amount: number;
  unit: TimePeriodUnit;
}

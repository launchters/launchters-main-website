/* ------------------------------------------------------
 

  ! NOTE:
  -- Enums have been converted to "const" instead to make them compatible with zapatos


*/

export const TimePeriodUnitDict = {
  minutes: "minutes",
  hours: "hours",
  days: "days",
  weeks: "weeks",
  months: "months",
  years: "years",
};

export const ImportQueueActionsDict = {
  create_staff: "create_staff",
  create_client: "create_client",
};

// Export their types too
export type ImportQueueAction = keyof typeof ImportQueueActionsDict;

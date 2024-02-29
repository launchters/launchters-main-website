import {
  CalendarEventRecord,
  StaffWorkerRecord,
  TimeOffSlot,
  TimeOffType,
  timeOffTypes,
} from "@models/index";
import moment from "moment-timezone";
 
// -----------------------------------------------------------------------

export const dateFieldHelperText = "Hora española";

export const parseDateValue = (
  val: Date | string | moment.MomentInput | undefined | null
): Date | null =>
  (val && moment(val).isValid() && moment(val).toDate()) || null;

export const transformTimeOffPeriodToCalendarEventModel = (
  // Only for displaying purposes
  timeOffSlot: TimeOffSlot<Date>,
  details?: StaffWorkerRecord<Date>
): CalendarEventRecord<Date> => {
  return {
    _id: "",
    createdAt: moment().toDate(),
    updatedAt: moment().toDate(),
    start: moment(timeOffSlot.timeOffStart)
      .hours(0)
      .minutes(0)
      .seconds(0)
      .milliseconds(0)
      .toDate(),
    end: moment(timeOffSlot.timeOffEnd)
      .hours(23)
      .minutes(59)
      .seconds(59)
      .milliseconds(59)
      .toDate(),
    allDay: false,
    type: "timeOff",
    title: `[DIA LIBRE] ${getTimeOffTypeDisplayName(timeOffSlot.timeOffType)}`,
    // DB References
    clientId: "", // Needed for the hard-typing but ignored in the comparison
    staffId: details?._id ?? "", // Needed for the hard-typing but ignored in the comparison
    isActive: true, // Needed for the hard-typing but ignored in the comparison
  };
};

export const getTimeOffTypeDisplayName = (timeOffType: TimeOffType) =>
  timeOffTypes.find((t) => t.type === timeOffType)?.label;

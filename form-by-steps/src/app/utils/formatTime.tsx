import { $TSFixMeLater, Timestamp } from "@models/index";
import { format, formatDistanceToNow } from "date-fns";
import moment from "moment-timezone";

// -----------------------------------------------------------------------

export const dateFormatter = {
  date: "dd MMMM yyyy",
  date2: "DD MMM YYYY",
  dateTime: "dd MMM yyyy HH:mm",
  dateTimeSuffix: "dd/MM/yyyy hh:mm p",
};

export function fDate(date: $TSFixMeLater) {
  return format(new Date(date), dateFormatter.date);
}

// export function fDateTime(date: $TSFixMeLater) {
//   return format(new Date(date), dateFormatter.dateTime);
// }

// export function fDateTimeSuffix(date: $TSFixMeLater) {
//   return format(new Date(date), dateFormatter.dateTimeSuffix);
// }

export function fToNow(date: $TSFixMeLater) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDate(date: Date) {
  return moment.unix(date.getTime() / 1000).format(dateFormatter.date2);
}

export function fromTimeStampToFormattedDateString(
  timestamp: Timestamp,
  ft = dateFormatter.date2
) {
  return moment
    .unix(
      timestamp.seconds ||
        // firebase-admin/firestore implementation uses _seconds.
        (timestamp as any)._seconds
    )
    .format(ft);
}

export function fromTimestampToDate(timestamp?: Timestamp) {
  return timestamp
    ? moment
        .unix(
          timestamp.seconds ||
            // firebase-admin/firestore implementation uses _seconds.
            (timestamp as any)._seconds
        )
        .toDate()
    : undefined;
}

export function displayLocalDateTimeFromString(dtStr: string) {
  return moment(dtStr).format("LLLL");
}
// export function displayLocalDateTimeFromDate(dt: Date) {
//   return displayLocalDateTimeFromString(dt.toISOString());
// }

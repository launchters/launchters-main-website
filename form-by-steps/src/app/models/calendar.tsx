import { FirebaseRecord } from "./types";

export type CalendarEvent<DT> = {
  title: string;
  start: DT;
  end: DT;
  allDay: boolean;
  type: "work" | "timeOff";
  // DB References
  staffId: string;
  clientId: string;
};

export type CalendarEventRecord<DT> = FirebaseRecord<DT> & CalendarEvent<DT>;

export type CalendarEventForm = Omit<CalendarEvent<Date>, "start" | "end"> & {
  start: "" | Date;
  end: "" | Date;
};

export type CalendarFilterOptions = {
  staffId?: string;
  companyId?: string;
  clientId?: string;
};

import { Timestamp } from ".";
import { FirebaseRecord, PersonData } from "./generics";

// ------------------------------------------------

export type StaffWorker<DT = Date> = PersonData & {
  nhsNumber: string;
  startDate: DT;
  annualSalary: number;
  phoneNumber: string;
  email: string;
  timeOff?: TimeOffSlot<DT>[];
};

export type StaffWorkerRecord<DT = Date> = FirebaseRecord<DT> & StaffWorker<DT>;

export type StaffWorkerSaveRequest<DT = Timestamp> = Omit<
  StaffWorker<DT>,
  "timeOff"
>;

export enum TimeOffType {
  sick_leave = "sick_leave",
  vacation = "vacation", // holidays
  personal_time = "personal_time",
  bereavement = "bereavement",
  parental = "parental",
  overtime_compensatory = "overtime_compensatory",
  union_agreement_days = "union_agreement_days",
  others_justified = "others_justified",
  others_unjustified = "others_unjustified",
}

export type TimeOffSlot<DT> = {
  timeOffType: TimeOffType;
  timeOffStart: DT;
  timeOffEnd: DT;
  timeOffNotes: string;
};

export const timeOffTypes = [
  // Should be in sync with backend
  { type: TimeOffType.sick_leave, label: "Baja laboral", color: "#ddd" },
  { type: TimeOffType.vacation, label: "Vacaciones pagadas", color: "#ddd" },
  {
    type: TimeOffType.personal_time,
    label: "Asuntos propios",
    color: "#ccc",
  },
  {
    type: TimeOffType.bereavement,
    label: "Fallecimiento familiar",
    color: "#ccc",
  },
  {
    type: TimeOffType.parental,
    label: "Permiso de paternidad/maternidad",
    color: "#ccc",
  },
  {
    type: TimeOffType.overtime_compensatory,
    label: "Compensación por horas extra",
    color: "#ccc",
  },
  {
    type: TimeOffType.union_agreement_days,
    label: "Días de convenio sindical",
    color: "#ccc",
  },
  {
    type: TimeOffType.others_justified,
    label: "Otras bajas o días libres justificados",
    color: "#ccc",
  },
  {
    type: TimeOffType.others_unjustified,
    label: "Otras bajas o días NO justificados",
    color: "#ccc",
  },
];

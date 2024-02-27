import { StaffWorkerRecord } from "@/app/models";
import selectReduxStateSlice from "../selectReduxStateSlice";

const getStaffWorkersFromState = (): StaffWorkerRecord<Date>[] => {
  return selectReduxStateSlice<StaffWorkerRecord<Date>[]>("staff")?.value ?? [];
};

export const getStaffWorkerFromState = (staffId: string) => {
  const workers = getStaffWorkersFromState();
  return workers.find((c) => c._id === staffId);
};

export default getStaffWorkersFromState;

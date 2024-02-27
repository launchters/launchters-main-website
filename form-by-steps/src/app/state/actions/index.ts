import { StaffWorkerRecord } from "@models/index";

export enum StaffActionTypes {
  "FETCHING" = "FETCHING_STAFF",
  "SET" = "SET_STAFF",
}

const reduxActions = {
  fetchingStaff: {
    type: StaffActionTypes.FETCHING,
  },
  setStaff: (payload: StaffWorkerRecord<Date>[]) => ({
    type: StaffActionTypes.SET,
    payload: payload,
  }),
};

export default reduxActions;

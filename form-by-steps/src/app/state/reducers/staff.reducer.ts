import { ReduxActionType, StaffWorkerRecord } from "@/app/models";
import { StaffActionTypes } from "../actions";
import { initialState } from "../store.initialState";
import ReduxState from "@/app/models/reduxState";

const staffReducer = function (
  currentSliceState: ReduxState["staff"] = initialState.staff,
  action: ReduxActionType<StaffActionTypes, StaffWorkerRecord<Date>[]>
) {
  switch (action.type) {
    case StaffActionTypes.FETCHING:
      return {
        ...currentSliceState,
        isFetching: true,
      };
    case StaffActionTypes.SET:
      return {
        ...currentSliceState,
        value: [...new Set(action.payload)],
        isFetching: false,
      };
    default:
      return { ...currentSliceState };
  }
};
export default staffReducer;

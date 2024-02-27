import { StaffWorkerRecord } from "./types";

export type StateSliceType<V> = {
  isFetching: boolean;
  value: V | undefined;
};

interface ReduxState {
  staff: StateSliceType<StaffWorkerRecord<Date>[]>;
}
export default ReduxState;

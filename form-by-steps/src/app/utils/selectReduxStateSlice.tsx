import ReduxState, { StateSliceType } from "../models/reduxState";
import store from "../state/store";
import { initialState } from "../state/store.initialState";

const selectReduxStateSlice = <T,>(sliceId: string) => {
  const state: ReduxState = store.getState();

  if (!Object.keys(initialState ?? {}).includes(sliceId))
    throw new Error(`Incorrect slice id at useReduxStateSelector`);

  switch (sliceId) {
    case `staff`:
      return state.staff as StateSliceType<T>;
  }
};

export default selectReduxStateSlice;

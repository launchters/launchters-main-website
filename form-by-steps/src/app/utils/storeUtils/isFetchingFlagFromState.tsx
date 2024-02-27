import { $TSFixMeLater } from "@/app/models";
import store from "@/app/state/store";

const getIsFetchingSomethingFromState = (): boolean => {
  const state = store.getState();
  return Object.keys(state).some((k) => (state as $TSFixMeLater)[k].isFetching);
};

export default getIsFetchingSomethingFromState;

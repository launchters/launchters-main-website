import ReduxState from "../models/reduxState";

export const initialState = {
  companies: {
    isFetching: false,
    value: undefined,
  },
  clients: {
    isFetching: false,
    value: undefined,
  },
  staff: {
    isFetching: false,
    value: undefined,
  },
  calendar: {
    isFetching: false,
    value: undefined,
  },
  userLogged: {
    isFetching: false,
    value: undefined,
  },
} as ReduxState;

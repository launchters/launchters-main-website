import { $TSFix } from "../../../models/ts-fix.d";

const handleApiResponseError = (err: $TSFix) => {
  console.log(err.message);
};

export default handleApiResponseError;

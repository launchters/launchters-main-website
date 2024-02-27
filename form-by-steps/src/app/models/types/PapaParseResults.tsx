import { $TSFixMeLater } from "@models/index";

// -----------------------------------

export type PapaParseResults<T = $TSFixMeLater> = {
  data: T[];
  errors: $TSFixMeLater[];
  meta: $TSFixMeLater[];
};

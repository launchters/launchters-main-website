// !       FRONTEND-ONLY
// ! ----------------------------

export const ViewModeDict = {
  readOnly: "readOnly",
  edit: "edit",
  create: "create",
  notFound: "notFound",
};

export const LabelVariantDict = {
  filled: "filled",
  outlined: "outlined",
  ghost: "ghost",
};

export const FileTypeDict = {
  "text/csv": "text/csv",
};

export const ResponsiveQueryDict = {
  up: "up",
  down: "down",
  between: "between",
  only: "only",
};

export const LoadingStateDict = {
  Loading: "Loading",
  Loaded: "Loaded",
  Load_Failed: "Load_Failed",
};

export const ImportQueueStatusDict = {
  Processing: "Processing",
  Completed: "Completed",
};

// ---------------------

export type ViewMode = keyof typeof ViewModeDict;
export type LabelVariant = keyof typeof LabelVariantDict;
export type FileType = keyof typeof FileTypeDict;
export type ResponsiveQuery = keyof typeof ResponsiveQueryDict;
export type LoadingState = keyof typeof LoadingStateDict;
export type ImportQueueStatus = keyof typeof ImportQueueStatusDict;

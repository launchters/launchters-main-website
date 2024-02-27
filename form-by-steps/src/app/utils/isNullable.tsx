// -------------------------------------------------

const isNullable = (item: unknown): boolean =>
  // _.isNull(item) || _.isUndefined(item);
  item === undefined || item === null;

export default isNullable;

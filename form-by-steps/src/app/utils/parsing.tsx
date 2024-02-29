import { DynamicObject, TimeOffSlot, Timestamp } from "@models/index";
import _ from "lodash";
import { capitalizeEachWord, capitalizeFirstLetter } from "./capitalize";
import { fromTimestampToDate } from "./formatTime";

// -----------------------------------------------------------------------

export const normalizeCommaSeparatedString = (
  str: string,
  caseInsensitive = false,
  separator = ","
): string[] => {
  if (typeof str !== "string")
    throw new Error(
      `Parameter ${str} is not a comma-separated string at normalizeCommaSeparatedString function`
    );

  return str
    .split(separator)
    .map((str) => normalizeString(str, caseInsensitive));
};

export const normalizeString = (
  str: string,
  caseInsensitive: boolean = false
): string => {
  if (caseInsensitive) str.toLowerCase();
  return str.trim();
};

export const asyncFilter = async <T,>(
  arr: T[],
  predicate: (item: T) => boolean
): Promise<T[]> =>
  Promise.all(arr.map(predicate)).then((results) =>
    arr.filter((_v: T, i: number) => results[i])
  );

export const getRecursiveObjectPropertiesByKeys = <R,>(
  obj: DynamicObject<any>,
  accessKeyId: string
): R => {
  const keys: string[] = accessKeyId.split(".");
  const prop = keys[0];
  if (typeof obj[prop] === "object")
    return getRecursiveObjectPropertiesByKeys(
      obj[prop],
      keys.slice(1).join(".")
    );

  // else
  return obj[prop];
};

export const excludeSystemProperties = <T,>(
  obj: Record<string, unknown>,
  ...otherPropertyKeys: string[]
) =>
  _.omit(obj, [
    // using this to protect certain values
    "_id",
    "isActive",
    "createdAt",
    "updatedAt",
    ...otherPropertyKeys,
  ]) as T;

export const parsePersonOnFetch = <R,>(item: any): R => {
  const parsed = {
    ...item,
    // parse timestamps
    startDate: fromTimestampToDate(item.startDate)!,
    createdAt: fromTimestampToDate(item.createdAt)!,
    updatedAt: fromTimestampToDate(item.updatedAt)!,
  };

  return parsed;
};

export const parsePersonOnRequest = <R,>(item: any): R => {
  const parsed = { ...item };

  if (item.hasOwnProperty("startDate")) {
    parsed.startDate = item.startDate!;
  }

  const keysCapitalizedSentence = ["town", "district", "postalAddress"];
  const keysCapitalizedWords = ["firstName", "lastName"];
  const keysUppercase = ["personalID"];

  Object.keys(parsed).forEach((k) => {
    if (keysUppercase.includes(k)) {
      parsed[k] = item[k].toUpperCase();
    } else if (keysCapitalizedSentence.includes(k)) {
      parsed[k] = capitalizeFirstLetter(item[k] as string);
    } else if (keysCapitalizedWords.includes(k)) {
      parsed[k] = capitalizeEachWord(item[k] as string);
    }
  });

  return parsed;
};

export const parseTimeOffSlotOnFetch = (slot: TimeOffSlot<Timestamp>) => ({
  ...slot,
  timeOffStart: fromTimestampToDate(slot.timeOffStart)!,
  timeOffEnd: fromTimestampToDate(slot.timeOffEnd)!,
});

export const parseTimeOffSlotOnRequest = (slot: TimeOffSlot<Date>) => ({
  ...slot,
  timeOffStart: slot.timeOffStart!,
  timeOffEnd: slot.timeOffEnd!,
});

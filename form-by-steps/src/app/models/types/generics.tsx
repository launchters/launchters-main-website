import { ReactElement } from "react";
import { Timestamp } from ".";

// -------------------------------------------------------

export type DynamicObject<T = any> = Record<string, T>;

export type ColorType =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "primary"
  | "inherit"
  | "default"
  | "secondary"
  | undefined;

export type TableHeader = {
  id: string;
  label: string;
  alignRight?: boolean;
};

export type NavConfigItem = {
  title: string;
  path: string;
  icon: ReactElement;
  info?: string;
  children?: NavConfigItem[];
};

export type PersonData = {
  firstName: string;
  lastName: string;
  personalID: string;
  postalAddress: string;
  town: string;
  district: string;
  postCode: string;
};

export type FirebaseRecord<DT = Timestamp> = {
  _id: string;
  createdAt: DT;
  updatedAt: DT;
  isActive: boolean;
};

export type OmitSystemProps<T> = Omit<
  T,
  keyof FirebaseRecord<Date | Timestamp>
>;

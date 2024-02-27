import { OwnerType } from "../models";

export const ownerTypes = ["staff", "client", "company"];

export const getOwnerTypeLabel = (ownerType: OwnerType) =>
  ownerType === "staff"
    ? "Trabajador"
    : ownerType === "client"
    ? "Cliente"
    : ownerType === "company"
    ? "Empresa"
    : "";

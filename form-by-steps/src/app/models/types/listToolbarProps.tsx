import { $TSFixMeLater } from "./TSFixMe";
import { OwnerType } from "./ownerType";

export type ListToolbarProps<T> = {
  selectedItems: T[];
  filterName: string;
  searchPlaceholder: string;
  onFilterName: (event: $TSFixMeLater) => void;
  onDeleteCb: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ListToolbarPropsExtended<T> = ListToolbarProps<T> & {
  ownerType: OwnerType;
  challengePropertyKey: string;
  deleteResourceRefType: string;
  deleteManyById: (ids: string[]) => Promise<boolean>;
};

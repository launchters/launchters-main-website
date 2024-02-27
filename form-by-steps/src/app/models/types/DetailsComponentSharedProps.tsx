import { OwnerType } from "./ownerType";

export type DetailsComponentSharedProps<T> = {
  resourceId: string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
  ownerType: OwnerType;
  details?: T | undefined;
};

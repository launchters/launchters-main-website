// -----------------------------------------------------------------------

export function filterListById<LT, IT>(
  list: LT[],
  ids: IT[],
  key: string
): LT[] {
  return (
    (list?.length > 0 &&
      ids?.length > 0 &&
      list.filter((item: LT) => ids.includes((item as any)[key]))) ||
    []
  );
}

export const arrayEveryItemIsUnique = (
  arr: any[],
  caseSensitive: boolean = false
) => {
  const ref = arr.map((e) => (caseSensitive ? e : e.toLowerCase()));
  const unique = [...new Set(ref)];

  return arr.length === unique.length;
};

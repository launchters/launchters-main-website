import {
  Box,
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { $TSFixMeLater, TableHeader } from "@models/index";
import {
  setListHeadComponentPropTypes,
  ListHeadProps,
} from "@utils/listHeadUtils";
import { visuallyHidden } from "@/app/styles/visuallyHidden";

// -----------------------------------------------------------------------

setListHeadComponentPropTypes(StaffTableHead);

// ----------------------------------------------------------------------

function StaffTableHead({
  order,
  orderBy,
  rowCount,
  tableHeaders,
  selectedItemsCount,
  onRequestSort,
  onSelectAllClick,
}: ListHeadProps) {
  const createSortHandler = (property: string) => (event: $TSFixMeLater) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={
              selectedItemsCount > 0 && selectedItemsCount < rowCount
            }
            checked={rowCount > 0 && selectedItemsCount === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>

        {tableHeaders.map((tableHeader: TableHeader, i: number) => (
          <TableCell
            key={`${i}_${tableHeader.id}`}
            id={tableHeader.id}
            align={tableHeader.alignRight ? "right" : "left"}
            sortDirection={orderBy === tableHeader.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === tableHeader.id}
              direction={orderBy === tableHeader.id ? order : "asc"}
              onClick={createSortHandler(tableHeader.id)}
            >
              {tableHeader.label}

              {orderBy === tableHeader.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === "desc" ? "orden descendente" : "orden ascendente"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
export default StaffTableHead;

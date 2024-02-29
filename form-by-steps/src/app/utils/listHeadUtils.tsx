import PropTypes from "prop-types";
import {
  $TSFixMeLater,
  $TSFixMeLaterFunction,
  SortOrderType,
} from "@models/index";

// -------------------------------------------------------

export const setListHeadComponentPropTypes = (
  component: $TSFixMeLater
): void => {
  component.propTypes = {
    order: PropTypes.oneOf(["asc", "desc"] as SortOrderType[]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    tableHeaders: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        alignRight: PropTypes.bool,
      })
    ).isRequired,
    selectedItemsCount: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
  };
};

export type ListHeadProps = {
  order: SortOrderType;
  orderBy: string;
  rowCount: number;
  tableHeaders: $TSFixMeLater[];
  selectedItemsCount: number;
  onRequestSort: $TSFixMeLaterFunction;
  onSelectAllClick: $TSFixMeLaterFunction;
};

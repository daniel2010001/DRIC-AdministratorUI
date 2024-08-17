import { MouseEvent } from "react";
import { EnhancedTableProps, HeadCell } from "@/models/Table.model";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

export const TableHeader = <T,>(props: EnhancedTableProps<T>) => {
  const { order, orderBy, onRequestSort, headCells } = props;

  const createSortHandler =
    (property: keyof T) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={String(headCell.property)}
            align={headCell.align ? headCell.align : "left"}
            style={{ minWidth: headCell.minWidth ? headCell.minWidth : "auto" }}
            sortDirection={orderBy === headCell.property ? order : false}
          >
            {headCell.isAction ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.property}
                direction={orderBy === headCell.property ? order : "asc"}
                onClick={createSortHandler(headCell.property)}
              >
                {headCell.label}
                {orderBy === headCell.property ? (
                  <span style={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

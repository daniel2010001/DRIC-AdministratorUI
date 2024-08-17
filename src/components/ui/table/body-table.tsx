import { TableBody, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

export interface GenericTableBodyProps<T> {
  headCells: readonly HeadCell<T>[];
  visibleRows: T[];
  emptyRows: number;
  dense: boolean;
}

export interface HeadCell<T> {
  property: keyof T;
  label: string;
  numeric: boolean;
  disablePadding: boolean;
  align?: "right" | "center" | "left";
  minWidth?: string;
  isAction?: boolean;
}

export const BodyTable = <T,>({
  headCells,
  visibleRows,
  emptyRows,
  dense,
}: GenericTableBodyProps<T>) => {
  const renderActions = (id: number) => {
    return (
      <>
        <Link
          to={`/view/${id}`}
          className="me-2 underline underline-offset-2 text-blue-600"
        >
          Ver
        </Link>
        <Link
          to={`/edit/${id}`}
          className="underline underline-offset-2 text-blue-600"
        >
          Editar
        </Link>
      </>
    );
  };

  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            {headCells.map((headCell) => {
              const value = row[headCell.property];
              return (
                <TableCell
                  key={String(headCell.property)}
                  align={headCell.align ? headCell.align : "left"}
                >
                  {headCell.isAction
                    ? renderActions((row as { id: number })["id"])
                    : headCell.property === "updatedAt" ||
                      headCell.property === "publishedAt"
                    ? new Date(value as string).toLocaleDateString()
                    : String(value)}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: (dense ? 33 : 53) * emptyRows,
          }}
        >
          <TableCell colSpan={headCells.length} />
        </TableRow>
      )}
    </TableBody>
  );
};

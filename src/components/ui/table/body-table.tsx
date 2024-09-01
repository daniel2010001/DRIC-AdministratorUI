import { HeadCell } from "@/models/Table.model";
import { updateProblemPublished } from "@/services";
import { PrivateRoutes } from "@/models";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

export interface GenericTableBodyProps<T> {
  headCells: readonly HeadCell<T>[];
  visibleRows: T[];
  emptyRows: number;
  dense: boolean;
}

export const BodyTable = <T,>({
  headCells,
  visibleRows,
  emptyRows,
  dense,
}: GenericTableBodyProps<T>) => {
  const token = localStorage.getItem("token");

  const renderActions = (id: number) => {
    return (
      <>
        <Link
          to={`../${PrivateRoutes.PROBLEM_VIEW}/${id}`}
          className="me-2 underline underline-offset-2 text-blue-600"
        >
          Ver
        </Link>
        <Link
          to={`../${PrivateRoutes.PROBLEM_EDIT}/${id}`}
          className="underline underline-offset-2 text-blue-600"
        >
          Editar
        </Link>
      </>
    );
  };

  const changeStatus = (id: number, status: string) => {
    if (token !== null) {
      updateProblemPublished(
        id,
        status === "Publicado" ? false : true,
        token
      )().then((data) => {
        console.log(data);
      });
    }
  };

  const renderStatus = (status: string, id: number) => {
    return (
      <select
        className={`bg-transparent ${
          status === "Publicado" ? "text-green-500" : "text-red-500"
        }`}
        onChange={(e) => changeStatus(Number(id), status)}
        value={status}
      >
        <option className="text-green-500" value="Publicado" id="publicado">
          Publicado
        </option>
        <option className="text-red-500" value="No publicado" id="no-publicado">
          No publicado
        </option>
      </select>
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
                    : headCell.isStatus && headCell.property === "estado"
                    ? renderStatus(
                        value as string,
                        (row as { id: number })["id"]
                      )
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

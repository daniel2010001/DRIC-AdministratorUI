import { HeadCell } from "@/models/Table.model";
import { updateProblemPublished } from "@/services";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
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
          to={`/problem/view/${id}`}
          className="me-2 underline underline-offset-2 text-blue-600"
        >
          Ver
        </Link>
        <Link
          to={`/problem/edit/${id}`}
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

  const renderStatus = (initialStatus: string, id: number) => {
    const [status, setStatus] = useState(initialStatus);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newStatus = e.target.value;
      setStatus(newStatus);
      changeStatus(Number(id), newStatus);
    };

    return (
      <select
        className={`bg-transparent ${
          status === "Publicado" ? "text-green-500" : "text-red-500"
        }`}
        onChange={handleChange}
        value={status}
      >
        <option className="text-black" value="Publicado">
          Publicado
        </option>
        <option className="text-black" value="No publicado">
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

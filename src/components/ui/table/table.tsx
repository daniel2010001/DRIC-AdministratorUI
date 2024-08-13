interface TableProps {
  data: any[];
  columns: string[];
  pageSize: number;
  pageIndex: number;
  width: string;
}

const DEFAULT_PAGE_SIZE = 5;
const DEFAULT_PAGE_INDEX = 0;
const DEFAULT_WIDTH = "100%";

export const Table = ({
  data = [],
  columns = [],
  pageSize = DEFAULT_PAGE_SIZE,
  pageIndex = DEFAULT_PAGE_INDEX,
  width = DEFAULT_WIDTH,
}: TableProps) => {
  return (
    <table style={{ width }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data
          .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
          .map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

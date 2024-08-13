/* import { Table } from "../../components/ui/table/table"; */
import { Table } from "../../components/ui/table/table";

export const ViewProblematics = () => {
  return (
    <div>
      <h1>Problematicas</h1>
      <Table
        data={[
          [1, "Problema 1", "Descripción 1", "2021-09-01"],
          [2, "Problema 2", "Descripción 2", "2021-09-02"],
          [3, "Problema 3", "Descripción 3", "2021-09-03"],
          [4, "Problema 4", "Descripción 4", "2021-09-04"],
          [5, "Problema 5", "Descripción 5", "2021-09-05"],
        ]}
        columns={["ID", "Nombre", "Descripción", "Fecha de creación"]}
      />
    </div>
  );
};

import React from "react";
import { XGrid, LicenseInfo } from "@material-ui/x-grid";
// style
import "./grid.css";
// services
import {
  disableRowsNotSelected,
  validateRowSelected,
} from "../../../services/Local-services";

LicenseInfo.setLicenseKey(
  "566251e0a8fd26c8758bbc5c1f9df178T1JERVI6MjE5MTUsRVhQSVJZPTE2NDYyMjIwNTcwMDAsS0VZVkVSU0lPTj0x"
);

export default function XGridDemo(props) {
  return (
    <div style={{ height: "100%", width: "100%", boxShadow: "4px black" }}>
      <XGrid
        localeText={{
          footerTotalRows: props.data.length <= 1 ? "Registro:" : "Registros:",
          columnMenuLabel: "Menu",
          columnMenuShowColumns: "Mostrar columnas",
          columnMenuFilter: "Filtrar",
          columnMenuHideColumn: "Esconder",
          columnMenuUnsort: "Desordenar",
          columnMenuSortAsc: "Ordenar por ASC",
          columnMenuSortDesc: "Ordenar por DESC",
        }}
        onRowSelected={(newSelection) => {
          disableRowsNotSelected(props.selectedStatus.status);
          validateRowSelected(
            newSelection,
            props.selectedStatus,
            props.selected
          );
        }}
        columns={[
          {
            field: "type",
            headerName: `${props.titles[0]}`,
            width: 250,
          },
          {
            field: "name",
            headerName: `${props.titles[1]}`,
            width: 250,
          },
        ]}
        rows={props.data}
        checkboxSelection
        disableSelectionOnClick={false}
      />
    </div>
  );
}

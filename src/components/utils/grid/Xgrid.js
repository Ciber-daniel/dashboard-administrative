import React, { useState } from "react";
import { XGrid, LicenseInfo } from "@material-ui/x-grid";
// style
import "./grid.css";

LicenseInfo.setLicenseKey(
  "566251e0a8fd26c8758bbc5c1f9df178T1JERVI6MjE5MTUsRVhQSVJZPTE2NDYyMjIwNTcwMDAsS0VZVkVSU0lPTj0x"
);

export default function XGridDemo(props) {
  const [selection, setSelection] = useState(null);

  const f1 = () => {
    if (selection.style.backgroundColor === "white") {
      selection.setAttribute("style", "background-color:rgb(242, 242, 242);");
    }
  };

  const f2 = () => {
    if (selection.style.backgroundColor === "rgb(242, 242, 242)") {
      selection.setAttribute("style", "background-color:white;");
    }
  };

  const validateRowSelected = (selection, setSelection, newSelection) => {
    const rows = document.getElementsByClassName("Mui-selected");
    let color = "";
    let selectedByHtml = rows[0];

    selectedByHtml.removeEventListener("mouseover", f1);
    selectedByHtml.removeEventListener("mouseout", f2);

    if (
      selectedByHtml.style.backgroundColor === "white" ||
      selectedByHtml.style.backgroundColor === "" ||
      selectedByHtml.style.backgroundColor === "rgb(242, 242, 242)"
    ) {
      console.log("selection");
      setSelection(selectedByHtml);
      props.selected({
        status: true,
        row: {
          ...newSelection.data,
        },
      });
      color = "#a7a7a7";
    }

    if (selectedByHtml.style.backgroundColor === "rgb(167, 167, 167)") {
      console.log("deselection");

      props.selected({
        status: false,
        data: {},
      });
      color = "white";
    }

    if (selection !== null) {
      selection.addEventListener("mouseover", f1);

      selection.addEventListener("mouseout", f2);

      selection.style.backgroundColor = "white";
    }

    selectedByHtml.style.backgroundColor = color;
  };

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
          validateRowSelected(selection, setSelection, newSelection);
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
        disableMultipleSelection={true}
        rows={props.data}
      />
    </div>
  );
}

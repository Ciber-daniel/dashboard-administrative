import * as React from "react";
import { XGrid, LicenseInfo } from "@material-ui/x-grid";

LicenseInfo.setLicenseKey(
  "566251e0a8fd26c8758bbc5c1f9df178T1JERVI6MjE5MTUsRVhQSVJZPTE2NDYyMjIwNTcwMDAsS0VZVkVSU0lPTj0x"
);

const rows = [
  {
    id: "1",
    type: "Computadora",
    name: "Apple",
  },
];

export default function XGridDemo() {
  return (
    <div style={{ height: 250, width: "100%" }}>
      <XGrid
        columns={[
          { field: "type", headerName: "Tipo de bien" },
          { field: "name", headerName: "Nombre" },
        ]}
        rows={rows}
      />
    </div>
  );
}

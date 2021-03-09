import * as React from "react";
import { XGrid, LicenseInfo } from "@material-ui/x-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

LicenseInfo.setLicenseKey(
  "566251e0a8fd26c8758bbc5c1f9df178T1JERVI6MjE5MTUsRVhQSVJZPTE2NDYyMjIwNTcwMDAsS0VZVkVSU0lPTj0x"
);

export default function XGridDemo() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100000,
  });

  return (
    <div style={{ height: 520, width: "100%" }}>
      <XGrid
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
      />
    </div>
  );
}

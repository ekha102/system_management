"use client";

import { Button, Flex, Table } from "@radix-ui/themes";
import { Inventory } from "../generated/prisma";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface Props {
  reportDetail: Inventory[]
}


const ReportView = ({ reportDetail }: Props) => {

  // const { inv_id, inv_quantity, inv_status } = reportDetail[0] || null;
  const handleExport = () => {
    if (!reportDetail || reportDetail.length === 0) {
      alert("No data to export");
      return;
    }

    // 1️⃣ Convert data into plain JSON format
    const data = reportDetail.map((item) => ({
      ID: item.inv_id,
      Quantity: item.inv_quantity,
      Status: item.inv_status,
    }));

    // 2️⃣ Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // 3️⃣ Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory Report");

    // 4️⃣ Generate Excel file buffer
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // 5️⃣ Save file
    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(file, "inventory-report.xlsx");
  };



  return (
    <>
      <Flex justify="end" mb="4">
        <Button onClick={handleExport}>Export Excel</Button>
      </Flex>
      
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Products</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {reportDetail.map((item) => (
            <Table.Row key={item.inv_id}>
              <Table.RowHeaderCell>{item.inv_id}</Table.RowHeaderCell>
              <Table.Cell>{item.product?.prod_name}</Table.Cell>
              <Table.Cell>{item.inv_quantity}</Table.Cell>
              <Table.Cell>{item.inv_status}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table.Root>

    </>
  )
}
export default ReportView
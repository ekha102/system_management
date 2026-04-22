import { Inventory } from "@prisma/client";
import { Button, Table } from "@radix-ui/themes";
import ButtonCheckOut from "./ButtonCheckOut"

interface Props {
  checkOutList: Inventory[];
}

const CheckOutTable = ({ checkOutList }: Props) => {
  console.log("checkOutList:", checkOutList);
  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Trigger</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Restock</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Alert Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bins</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {checkOutList.map((ele) => (
            <Table.Row key={ele.inv_id}>
              <Table.RowHeaderCell>{ele.inv_id}</Table.RowHeaderCell>
              <Table.Cell>{ele.product?.prod_name}</Table.Cell>
              <Table.Cell>{ele.inv_quantity}</Table.Cell>
              <Table.Cell>{ele.inv_trigger}</Table.Cell>
              <Table.Cell>{ele.inv_restock}</Table.Cell>
              <Table.Cell>{ele.inv_alerted}</Table.Cell>
              <Table.Cell>{ele.bin?.bin_name}</Table.Cell>
              <Table.Cell>{ele.location?.loc_name}</Table.Cell>
              <Table.Cell>
                <ButtonCheckOut itemId={ele.inv_id} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default CheckOutTable;

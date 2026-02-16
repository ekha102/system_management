import { Table } from "@radix-ui/themes"
import { Inventory } from "../generated/prisma"

interface Props {
  checkInItems: Inventory[],

}


const CheckInTable = ({ checkInItems }: Props) => {
  // console.log("check-In Items:", checkInItems);
  const getInventoryStatus = (item: Inventory) => {
    if (item.inv_quantity >= item.inv_trigger * 2) {
      return "🟢 High";
    } else if (item.inv_quantity >= (item.inv_trigger)) {
      return "🟡 Normal";
    } else {
      return "🔴 Low";
    };
  }

  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Trigger</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bins</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {checkInItems.map((item) => (
            <Table.Row key={item.inv_id}>
              <Table.RowHeaderCell>{item.inv_id}</Table.RowHeaderCell>
              <Table.Cell>{item.product.prod_name}</Table.Cell>
              <Table.Cell>{item.inv_quantity}</Table.Cell>
              <Table.Cell>{item.inv_trigger}</Table.Cell>
              <Table.Cell>{getInventoryStatus(item)}</Table.Cell>
              <Table.Cell>{item.bin?.bin_name}_{item.bin?.bin_id}</Table.Cell>
              <Table.Cell>{item.location?.loc_name}</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          ))}


        </Table.Body>
      </Table.Root>
    </>

  )
}
export default CheckInTable
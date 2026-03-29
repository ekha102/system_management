import { Table } from "@radix-ui/themes";
import DeleteStore from "./DeleteStore";

import EditStoreButton from "./EditStoreButton";
import { Store } from "@prisma/client";



interface Props {
  storesList: Store[];
  canEditStore: Boolean;
  canDelStore: Boolean;


}

const DisplayStoreTable = ({ storesList, canEditStore, canDelStore }: Props) => {

  // console.log("Stores List in table: ", storesList);





  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Store ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Store Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Store Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
            {(canEditStore || canDelStore) && <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {storesList.map((ele) => (
            <Table.Row key={ele.store_id}>
              <Table.RowHeaderCell>{ele.store_id}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{ele.store_name}</Table.RowHeaderCell>
              <Table.Cell>{ele.store_desc}</Table.Cell>
              <Table.Cell>{ele.store_createdAt.toDateString()}</Table.Cell>
              {(canEditStore || canDelStore) &&
                <Table.Cell>

                  {canEditStore && <EditStoreButton storeItem={ele} />}
                  {canDelStore && <DeleteStore storeId={ele.store_id} />}

                </Table.Cell>

              }

            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}
export default DisplayStoreTable
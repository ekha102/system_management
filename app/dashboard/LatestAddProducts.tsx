import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes"

const LatestAddProducts = async () => {
  const displayFiveLatestProducts = await prisma.inventory.findMany({
    where: { inv_status: "Active" },
    orderBy: { inv_createdAt: "desc" },
    take: 5,
    include: {
      store: {      // 🔥 This joins the Store table
        select: {
          store_id: true,
          store_name: true,
        }
      },
      product: {
        select: {
          prod_name: true,
          prod_desc: true,
        }
      } 
    },
  });
  console.log("Display 5 latest", displayFiveLatestProducts);

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Store</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created Date</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {displayFiveLatestProducts.map((product) => (
            <Table.Row key={product.inv_id}>
              <Table.RowHeaderCell>{product.inv_id}</Table.RowHeaderCell>
              <Table.Cell>{product.product.prod_name}</Table.Cell>
              <Table.Cell>{product.product.prod_desc}</Table.Cell>
              <Table.Cell>{product.store?.store_name}</Table.Cell>
              <Table.Cell>{product.inv_createdAt.toLocaleDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}
export default LatestAddProducts
import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes"

const LatestAddProducts = async () => {
  const displayFiveLatestProducts = await prisma.inventory.findMany({
    where: { inv_status: "Active" },
    orderBy: { inv_createdAt: "desc" },
    take: 2,
    include: {
      store: true, // 🔥 This joins the Store table
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
            <Table.ColumnHeaderCell>description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Store</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {displayFiveLatestProducts.map((product) => (
            <Table.Row key={product.inv_id}>
              <Table.RowHeaderCell>{product.inv_id}</Table.RowHeaderCell>
              <Table.Cell>{product.inv_name}</Table.Cell>
              <Table.Cell>{product.inv_desc}</Table.Cell>
              <Table.Cell>{product.store?.store_name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}
export default LatestAddProducts
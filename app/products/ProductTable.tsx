import { Table } from "@radix-ui/themes"
import { Product } from "../generated/prisma"

interface Props {
  products: Product[]
}

const ProductTable = ({ products }: Props) => {
  // console.log("Passed to table product", products);
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created Date</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Updated Date</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {products.map((product) => (
          <Table.Row key={product.prod_id}>
            <Table.RowHeaderCell>{product.prod_id}</Table.RowHeaderCell>
            <Table.Cell>{product.prod_sku}</Table.Cell>
            <Table.Cell>{product.prod_name}</Table.Cell>
            <Table.Cell>{product.prod_desc}</Table.Cell>
            <Table.Cell>{product.createdAt.toLocaleDateString()}</Table.Cell>
            <Table.Cell>{product.updatedAt.toLocaleDateString()}</Table.Cell>
          </Table.Row>
        ))}

      
      </Table.Body>
    </Table.Root>

  )
}
export default ProductTable
import { Table } from "@radix-ui/themes"
import { Product } from "../../generated/prisma"
import Link from "next/link"

interface Props {
  products: Product[]
}

const ProductTable = ({ products }: Props) => {
  // console.log("Passed to table product", products);
  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>SKU</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Updated Date</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.prod_id}>
              <Table.RowHeaderCell>{product.prod_id}</Table.RowHeaderCell>
              <Table.Cell>
                <Link className="text-blue-600 hover:text-blue-700 hover:underline font-medium" href={`/products/${product.prod_id}`}>{product.prod_sku}</Link>
              </Table.Cell>
              <Table.Cell>{product.prod_name}</Table.Cell>
              <Table.Cell>{new Date(product.createdAt).toLocaleString("en-US", {hour12: true})}</Table.Cell>
              <Table.Cell>{new Date(product.updatedAt).toLocaleString("en-US", {hour12: true})}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>

  )
}
export default ProductTable
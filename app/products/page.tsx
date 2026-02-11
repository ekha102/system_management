import { prisma } from "@/prisma/client";
import ProductTable from "./ProductTable";


const ProductPage = async () => {

  const products = await prisma.product.findMany();
  // console.log("products: ", products);

  return (
    <>
      <ProductTable products={products}/>
    </>
  );
}
export default ProductPage;
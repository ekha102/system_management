import { prisma } from "@/prisma/client";
import ProductTable from "./ProductTable";
import ButtonCreateProduct from "./ButtonCreateProduct";


const ProductPage = async () => {

  const products = await prisma.product.findMany({
    orderBy: {
      prod_id: "desc",
    },
  });
  // console.log("products: ", products);

  return (
    <>
      <ButtonCreateProduct/>
      <ProductTable products={products}/>
    </>
  );
}
export default ProductPage;
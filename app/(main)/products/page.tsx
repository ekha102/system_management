import { prisma } from "@/prisma/client";
import ProductTable from "./ProductTable";
import ButtonCreateProduct from "./ButtonCreateProduct";
import Breadcrumb from "@/app/_components/Breadcrumb";



const ProductPage = async () => {

  // Define for breadcrumb:
  const breadcrumbList = [
    { label: "Products", href: "/products" },
  ]

  const products = await prisma.product.findMany({
    orderBy: {
      prod_id: "desc",
    },
  });
  // console.log("products: ", products);

  return (
    <div className="space-y-4">

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbList} />
      <ButtonCreateProduct />

      <ProductTable products={products} />

    </div>
  );
}
export default ProductPage;
import { prisma } from "@/prisma/client";
import ProductEditForm from "./ProductEditForm";
import delay from "delay";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/_components/Breadcrumb";


interface Props {
  params: {
    prod_id?: string;
  };
}

const ProductEditPage = async ({ params }: Props) => {
  const { prod_id } = params;

  // Define for breadcrumb:
  const breadcrumbList = [
    { label: "Products", href: "/products" },
    { label: "Edit", href: `/products/${prod_id}`},
  ]

  // await delay(500);
  const productEdit = await prisma.product.findUnique({
    where: { prod_id: parseInt(prod_id)},
    select: {
      prod_id: true,
      prod_name: true,
      prod_sku: true,
      prod_desc: true,
    },
  });

  if (!productEdit) {
    notFound(); // 🔥 this triggers not-found.tsx
  }




  return (
    <div className="space-y-4">
      <Breadcrumb items={breadcrumbList} />
      <ProductEditForm productEdit={productEdit}/>
    </div>
  );
};

export default ProductEditPage;

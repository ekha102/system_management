
import { prisma } from '@/prisma/client';
import FormInventory from './FormInventory';
import Breadcrumb from '@/app/_components/Breadcrumb';





const CreateItem = async () => {

  // Define for breadcrumb:
  const breadcrumbList = [
    { label: "Inventory", href: "/inventory" },
    { label: "Create", href: "/inventory/create" },
  ]

 
  const bins = await prisma.bin.findMany();
  const locations = await prisma.location.findMany();
  const stores = await prisma.store.findMany();
  const products = await prisma.product.findMany();


  return (
    <div className='space-y-4'>
      <Breadcrumb items={breadcrumbList}/>
      <FormInventory bins={bins} locations={locations} stores={stores} products={products}/>
    </div>
  )
}

export default CreateItem;
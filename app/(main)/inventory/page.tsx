
import InventoryList from './inventoryList'
import ButtonCreateItem from './buttonCreateItem'
import Breadcrumb from '@/app/_components/Breadcrumb';




interface Props {
  searchParams: {
    page?: string;
  };
};

const InventoryPage = ({ searchParams }: Props) => {

  // Define for breadcrumb:
  const breadcrumbList = [
    { label: "Inventory", href: "/inventory" },
  ]
  
  
  return (
    <div className='space-y-4'>
      <Breadcrumb items={breadcrumbList} />
      <ButtonCreateItem />
      <InventoryList searchParams={searchParams} />
    </div>
  )
}

export default InventoryPage

import InventoryList from './inventoryList'
import ButtonCreateItem from './buttonCreateItem'




interface Props {
  searchParams: {
    page?: string;
  };
};

const InventoryPage = ({ searchParams }: Props) => {
  
  
  return (
    <div>
      <ButtonCreateItem />
      <InventoryList searchParams={searchParams} />
    </div>
  )
}

export default InventoryPage
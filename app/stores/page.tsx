import { prisma } from '@/prisma/client';
import DisplayStoreTable from './DisplayStoreTable'
import CreateStore from './CreateStore';
import { Heading } from '@radix-ui/themes';



const storePage = async() => {
  
  const storesList = await prisma.store.findMany();
  // console.log(storesList);

  return (
    <>
      <Heading as="h1">Stores:</Heading>
      <div className="my-4">
        <CreateStore />
      </div>
      <DisplayStoreTable storesList={storesList}/>
    </>
  )
}

export default storePage;
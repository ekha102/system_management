"use client";
import { Button, Dialog } from "@radix-ui/themes"
import EditStoreForm from "./EditStoreForm";
import { Store } from "../../generated/prisma";

interface Props {
  storeItem?: Store[],
}


const EditStoreButton = ({ storeItem }: Props) => {


  // console.log("Store Item", storeItem);


  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="1" mr="2">Edit</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        {/* Store Form Component Goes Here */}
        {/* <div>Edit Store Form for Store ID: {storeId}</div> */}
        <EditStoreForm storeItem={storeItem} />
      </Dialog.Content>
    </Dialog.Root>
  )
}
export default EditStoreButton;
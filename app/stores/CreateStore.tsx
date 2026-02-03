'use client';

import { Button, Dialog } from "@radix-ui/themes";
import StoreFormInput from "./StoreFormInput";


const CreateStore = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Create Store</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        {/* Store Form Component Goes Here */}
        <StoreFormInput />
      </Dialog.Content>

    </Dialog.Root>



  )
}
export default CreateStore
'use client';

import { Button, Dialog } from "@radix-ui/themes";
import StoreFormInput from "./StoreFormInput";
import { useState } from "react";


const CreateStore = () => {
    const [open, setOpen] = useState(false);

  return (
    <Dialog.Root  open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Create Store</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        {/* Store Form Component Goes Here */}
        <StoreFormInput onClose={() => setOpen(false)} />
      </Dialog.Content>
    </Dialog.Root>



  )
}
export default CreateStore
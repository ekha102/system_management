import { Button, Dialog } from '@radix-ui/themes'
import React, { useState } from 'react'
import LocationForm from './LocationForm';

const CreateLocationButton = () => {

  const [open, setOpen] = useState(false);


  return (
    <>
      <Button 
      // onClick={() => handleCreate()}
      onClick={()=>setOpen(true)}
        >Create</Button>

      {/* <Dialog.Root>
        <Dialog.Trigger>
          <LocationForm open={open} />
        </Dialog.Trigger>
      </Dialog.Root> */}

      {/* Dialog window */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Create Bin</Dialog.Title>
          {/*Call in the Bin Form*/}
          <LocationForm open={open} setOpen={setOpen} />
        </Dialog.Content>
      </Dialog.Root>
    </>

  )
}

export default CreateLocationButton
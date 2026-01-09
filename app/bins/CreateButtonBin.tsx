"use client"
import { Button, Dialog } from '@radix-ui/themes'
import React, { useState } from 'react'
import BinForm from './BinForm';



const CreateButtonBin = () => {

  const [open, setOpen] = useState(false);



  return (
    <>
      <Button onClick={()=>setOpen(true)}>Create Bin</Button>

      {/* Dialog window */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Create Location</Dialog.Title>
          {/*Call in the Location Form*/}
          <BinForm closeDialog={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Root>


    </>

  )
}

export default CreateButtonBin
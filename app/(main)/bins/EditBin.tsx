"use client"
import { Button, Dialog } from '@radix-ui/themes'
import React, { useState } from 'react'
import { Bin } from '../../generated/prisma'
import BinForm from './BinForm'


interface Props {
  binDetail: Bin
}

const EditBin = ({ binDetail }: Props) => {

  const [open, setOpen] = useState(false);
  const [binIdDetail, setBinIdDetail] = useState("");

  const handleEditBin = (binDetail: Bin) => {
    // console.log("Edit Bin", binId);
    // console.log("Bin Detail: ", binDetail);
    setOpen(true);
    setBinIdDetail(binDetail);
    // setBinDetail(binId);
  }

  return (
    <>
      <Button size="1" onClick={() => handleEditBin(binDetail)}>Edit</Button>



      {/* Dialog window */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Create Bin</Dialog.Title>
          {/*Call in the Bin Form*/}
          <BinForm closeDialog={() => setOpen(false)} binIdDetail={binIdDetail} />
        </Dialog.Content>
      </Dialog.Root>
    </>


  )
}

export default EditBin
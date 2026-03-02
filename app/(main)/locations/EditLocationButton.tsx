import { Button, Dialog } from '@radix-ui/themes'
import React, { useState } from 'react'
import { Location } from '../../generated/prisma'
import BinForm from '../bins/BinForm'
import LocationForm from './LocationForm'

interface Props {
  locDetail: Location
}

const EditLocationButton = ({ locDetail }: Props) => {

  const [locIdDetail, setLocIdDetail] = useState("");
  const [open, setOpen] = useState(false);

  const handleEdit = (locDetail: Location) => {
    // console.log("Location Detail: ", locDetail);
    setLocIdDetail(locDetail);
    setOpen(true);
  }

  return (
    <>
      <Button size="1" color='blue' onClick={() => handleEdit(locDetail)}>Edit</Button>

      {/* Dialog window */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Create Bin</Dialog.Title>
          {/*Call in the Bin Form*/}
          <LocationForm open={open} setOpen={setOpen} locIdDetail={locIdDetail} />
        </Dialog.Content>
      </Dialog.Root>
    </>

  )
}

export default EditLocationButton
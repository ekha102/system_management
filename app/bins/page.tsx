import { prisma } from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import React from 'react'
import CreateButtonBin from './CreateButtonBin';
import BinViewTable from './BinViewTable';
import BinForm from './_BinForm';

const Bins = async () => {

  const bins = await prisma.bin.findMany();
  // console.log("Bin: ", bins);

  return (
    <>
      <BinViewTable bins={bins} />
     
    </>
  )
}

export default Bins
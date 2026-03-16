import { prisma } from '@/prisma/client'
import React from 'react'
import BinViewTable from './BinViewTable';
import Breadcrumb from '@/app/_components/Breadcrumb';

const Bins = async () => {

  // Define for breadcrumb:
  const breadcrumbList = [
    { label: "Bins", href: "/bins" },
  ]
  

  const bins = await prisma.bin.findMany();
  // console.log("Bin: ", bins);

  return (
    <>
      <Breadcrumb items={breadcrumbList} />
      <BinViewTable bins={bins} />
     
    </>
  )
}

export default Bins
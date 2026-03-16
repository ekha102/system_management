
import { prisma } from '@/prisma/client';
import { Box, Button, Table } from '@radix-ui/themes';
import React from 'react'
import LocationsView from './LocationsView';
import Breadcrumb from '@/app/_components/Breadcrumb';

const LocationPage = async () => {

  // Define for breadcrumb:
  const breadcrumbList = [
    { label: "Locations", href: "/locations" },
  ]

  const locations = await prisma.location.findMany();




  return (
    <>

      <Breadcrumb items={breadcrumbList} />


      {/* Display Locations in a table */}
      <LocationsView locations={locations} />
    </>
  )
}

export default LocationPage;
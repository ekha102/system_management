
import { prisma } from '@/prisma/client';
import { Box, Button, Table } from '@radix-ui/themes';
import React from 'react'
import CreateButtonLocation from './_CreateButtonLocation';
import LocationsView from './LocationsView';

const LocationPage = async () => {

  const locations = await prisma.location.findMany();




  return (
    <>
        {/* Display Locations in a table */}
      <LocationsView locations={locations} />
    </>
  )
}

export default LocationPage;
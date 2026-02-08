
import { Box, Flex, HoverCard, Link, Table, Text, Heading } from '@radix-ui/themes'
import React from 'react'
import ButtonDeleteItem from './deleteItem';
import ButtonEditItem from './buttonEditItem';
import Pagination from '../_components/Pagination';
import { prisma } from '@/prisma/client';





type Props = {
  searchParams: {
    page?: string;
  };
};


const InventoryList = async ({ searchParams }: Props) => {

  const page = parseInt(searchParams.page || "1"); // Default to page 1 if not provided
  const sizePage = 5; // Number of items per page

  const items = await prisma.inventory.findMany({
    where: { inv_status: 'Active' },
    include: { bin: true, location: true, store: true },
    skip: (page - 1) * sizePage,
    take: sizePage,
  });

  const inventoryCount = await prisma.inventory.count({
    where: { inv_status: 'Active' },
  });

  console.log("inventoryCount", inventoryCount);
  console.log("items", items);


  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Trigger</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Store</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bin Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.inv_id}>
              <Table.RowHeaderCell>{item.inv_id}</Table.RowHeaderCell>
              <Table.Cell>
                {/* Create card for inventory inventory description trigger by name */}
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link href={`/inventory/dataList/${item.inv_id}`}>{item.inv_name}</Link>
                  </HoverCard.Trigger>
                  <HoverCard.Content maxWidth="300px">
                    <Flex gap="4">
                      <Text as="div" size="2" color="gray" mb="1">
                        Desc:
                      </Text>
                      <Box>
                        <Text as="div" size="2">
                          {item.inv_desc}
                        </Text>
                      </Box>
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root>
              </Table.Cell>

              <Table.Cell>{item.inv_quantity}</Table.Cell>
              <Table.Cell>{item.inv_trigger}</Table.Cell>
              <Table.Cell>{item.store?.store_name}</Table.Cell>
              <Table.Cell>{item.bin?.bin_name}_{item.bin?.bin_id}</Table.Cell>
              <Table.Cell>{item.location?.loc_name}</Table.Cell>
              <Table.Cell>
                <Flex gap="2">
                  <ButtonEditItem itemId={item.inv_id} />
                  <ButtonDeleteItem itemId={item.inv_id} />
                </Flex>

              </Table.Cell>

            </Table.Row>
          ))}

        </Table.Body>
      </Table.Root>
      <Pagination itemCount={inventoryCount} itemsSize={sizePage} currentPage={page} />
      
    </>
  )
}

export default InventoryList
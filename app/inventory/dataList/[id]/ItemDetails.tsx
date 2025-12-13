"use client"; 
import { Inventory } from '@/app/generated/prisma'

import { DataList, Badge, Flex, Code, IconButton } from '@radix-ui/themes'

import React from 'react'


interface Props {
  items?: Inventory,
}

const ItemDetails = ({ items }: Props) => {

  // console.log("Passed Item: ", items);
  const {id, name, description} = items || {}

  return (
    <DataList.Root>
      <DataList.Item align="center">
        <DataList.Label minWidth="88px">Status</DataList.Label>
        <DataList.Value>
          <Badge color="jade" variant="soft" radius="full">
            Active
          </Badge>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">ID</DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">{id}</Code>
            <IconButton
              size="1"
              aria-label="Copy value"
              color="gray"
              variant="ghost"
            >
            </IconButton>
          </Flex>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Name</DataList.Label>
        <DataList.Value>{name}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Description</DataList.Label>
        <DataList.Value>
          <DataList.Value>{description}</DataList.Value>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>

  )
}

export default ItemDetails
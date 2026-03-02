"use client";
import { Inventory } from '@/app/generated/prisma'
import { CopyIcon } from '@radix-ui/react-icons';

import { DataList, Badge, Flex, Code, IconButton } from '@radix-ui/themes'

import React from 'react'


interface Props {
  items?: Inventory,
}

const ItemDetails = ({ items }: Props) => {

  // console.log("Passed Item: ", items);
  const { inv_id, inv_name, inv_desc, inv_quantity, inv_status, inv_updatedAt, inv_createdAt } = items || {}


  const colorStatus = inv_status === "Active" ? "jade" : "red";
  const time12hr = inv_updatedAt && new Date(inv_updatedAt).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

  return (
    <DataList.Root>
      <DataList.Item align="center">
        <DataList.Label minWidth="88px">Status</DataList.Label>
        <DataList.Value>
          <Badge color={colorStatus} variant="soft" radius="full">
            {inv_status}
          </Badge>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">ID</DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">{inv_id}</Code>
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
        <DataList.Label minWidth="88px">Created Date</DataList.Label>
        <DataList.Value>
          <DataList.Value>{inv_createdAt?.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
            month: "short",
            day: "numeric",
            year: "numeric",
          })}</DataList.Value>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label minWidth="88px">Updated Date</DataList.Label>
        <DataList.Value>
          <DataList.Value>{inv_updatedAt?.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
            month: "short",
            day: "numeric",
            year: "numeric",
          })}</DataList.Value>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label minWidth="88px">Name</DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">{inv_name}</Code>
            <IconButton
              size="1"
              aria-label="Copy value"
              color="gray"
              variant="ghost"
            >
              <CopyIcon />
            </IconButton>
          </Flex>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Description</DataList.Label>
        <DataList.Value>
          <DataList.Value>{inv_desc}</DataList.Value>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Quantity</DataList.Label>
        <DataList.Value>
          <DataList.Value>{inv_quantity}</DataList.Value>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>

  )
}

export default ItemDetails
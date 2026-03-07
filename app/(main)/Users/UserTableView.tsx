"use client"
import { User } from "@prisma/client";

import React, { useState } from "react";
import PermissionDetail from "./PermissionDetail";
import { Button, IconButton, Table } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import Link from "next/link";



interface Props {
  userList: User[]
}

const UserTableView = ({ userList }: Props) => {
  const [openRow, setOpenRow] = useState<number | null>(null);
  console.log("user List in children", userList)


  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Full Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {userList.map((user) => {
          const isOpen = openRow === user.user_id;

          return (
            <React.Fragment key={user.user_id}>
              {/* MAIN ROW */}
              <Table.Row>
                <Table.Cell>
                  <IconButton
                    size="1"
                    variant="ghost"
                    onClick={() =>
                      setOpenRow(isOpen ? null : user.user_id)
                    }
                  >
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </IconButton>
                </Table.Cell>
                <Table.RowHeaderCell>{user.user_id}</Table.RowHeaderCell>
                <Table.Cell>{user.user_username}</Table.Cell>
                <Table.Cell>{user.user_fullName}</Table.Cell>
                <Table.Cell>{user.role?.role_name}</Table.Cell>
                <Table.Cell>
                    <Button>
                      <Link href={`/users/editUser/${user.user_id}`}> 
                        Edit
                      </Link>
                    </Button>
                </Table.Cell>
              </Table.Row>

              {/* EXPANDED DETAIL ROW */}
              {isOpen && (
                <Table.Row>
                  <Table.Cell colSpan={6} style={{ padding: "16px 24px" }}>
                    <PermissionDetail permission={user.role?.permissions} />
                  </Table.Cell>
                </Table.Row>
              )}
            </React.Fragment>
          );
        })}











        </Table.Body>
      </Table.Root>


    </>
  )
}
export default UserTableView
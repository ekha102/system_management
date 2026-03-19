import { Capitalize } from "@/app/_components/Capitalize";
import { Permission } from "@prisma/client";
import { Table, Text } from "@radix-ui/themes";

interface Props {
  permission: Permission[]
}


const PermissionDetail = ({ permission }: Props) => {
  console.log("passing permission to detail", permission)

  
  if (permission.length === 0) {
    return <Text color="gray">No locations available</Text>;
  }

  return (
    <>
      <Text weight="bold" mb="2">
        Permission
      </Text>

      <Table.Root size="1">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Module Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action Name</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {permission.map((ele) => (
            <Table.Row key={ele.permission.perm_id}>
              <Table.Cell>{ele.permission.perm_id}</Table.Cell>
              <Table.Cell>{Capitalize(ele.permission.module.module_name)}</Table.Cell>
              <Table.Cell>{Capitalize(ele.permission.action.action_name)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default PermissionDetail;
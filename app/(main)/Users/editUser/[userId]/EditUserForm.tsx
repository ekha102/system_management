"use client";

import { ValidationEditUser } from "@/app/_components/ValidationEditUser";
import { hasPermission } from "@/lib/permissions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Module, Role, User } from "@prisma/client";
import {
  Button,
  Select,
  TextField,
  Box,
  Checkbox,
  Table,
  Text
} from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  userDetail: any;
  roleList: Role[];
  moduleList: Module[];
}

type FormData = z.infer<typeof ValidationEditUser>;

const EditUserForm = ({ userDetail, roleList, moduleList }: Props) => {

  const { user_id, user_fullName } = userDetail ?? {};
  const role_id = userDetail?.role?.role_id ?? null;

  const permissions =
    userDetail?.role?.permissions?.map(
      (p: any) =>
        `${p.permission.module.module_name}.${p.permission.action.action_name}`
    ) || [];

  const groupedPermissions = permissions.reduce((acc: any, perm: string) => {
    const [module, action] = perm.split(".");

    if (!acc[module]) {
      acc[module] = {
        view: false,
        create: false,
        edit: false,
        delete: false,
      };
    }

    acc[module][action.toLowerCase()] = true;

    return acc;
  }, {});

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(ValidationEditUser),
    defaultValues: {
      user_id,
      user_fullName,
      role_id,
      permissions: groupedPermissions
    }
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submitted data:", data);
  };

  const actions = ["create", "view", "edit", "delete"];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="w-[260px]">

        {/* User ID */}
        <div className="mb-2.5 grid">
          <label>ID</label>
          <TextField.Root {...register("user_id")} disabled />
        </div>

        {/* Full Name */}
        <div className="mb-2.5 grid">
          <label>Full Name</label>

          <TextField.Root {...register("user_fullName")} />

          {errors.user_fullName && (
            <p className="text-red-500 text-sm">
              {errors.user_fullName.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div className="mb-2.5 grid">
          <label>Role</label>

          <Controller
            name="role_id"
            control={control}
            render={({ field }) => (
              <Box maxWidth="300px">

                <Select.Root
                  value={field.value ? String(field.value) : ""}
                  onValueChange={(value) =>
                    field.onChange(value ? Number(value) : null)
                  }
                >
                  <Select.Trigger placeholder="Select role" />

                  <Select.Content>
                    <Select.Group>

                      <Select.Item value="null">
                        Unassigned
                      </Select.Item>

                      {roleList.map((role) => (
                        <Select.Item
                          key={role.role_id}
                          value={String(role.role_id)}
                        >
                          {role.role_name}
                        </Select.Item>
                      ))}

                    </Select.Group>
                  </Select.Content>
                </Select.Root>

                {errors.role_id && (
                  <Text color="red">
                    {errors.role_id.message}
                  </Text>
                )}

              </Box>
            )}
          />
        </div>

      </div>

      {/* Permission Table */}

      <div className="mt-6 overflow-hidden rounded-lg border">

        <Table.Root>

          <Table.Header>
            <Table.Row>

              <Table.ColumnHeaderCell>
                Module
              </Table.ColumnHeaderCell>

              {actions.map((action) => (
                <Table.ColumnHeaderCell key={action}>
                  {action.charAt(0).toUpperCase() + action.slice(1)}
                </Table.ColumnHeaderCell>
              ))}

            </Table.Row>
          </Table.Header>

          <Table.Body>

            {moduleList.map((module) => (

              <Table.Row key={module.module_id}>

                <Table.RowHeaderCell>
                  {module.module_name}
                </Table.RowHeaderCell>

                {actions.map((action) => (

                  <Table.Cell key={action}>

                    <Controller
                      name={`permissions.${module.module_name}.${action}`}
                      control={control}
                      defaultValue={hasPermission(
                        permissions,
                        module.module_name,
                        action
                      )}
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />

                  </Table.Cell>

                ))}

              </Table.Row>

            ))}

          </Table.Body>

        </Table.Root>

      </div>

      <Button mt="5" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Updating..." : "Update"}
      </Button>

    </form>
  );
};

export default EditUserForm;
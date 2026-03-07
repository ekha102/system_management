"use client"

import { ValidationEditUser } from "@/app/_components/ValidationEditUser";
import { hasPermission } from "@/lib/permissions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Module, Role, User } from "@prisma/client";
import { Button, Select, TextField, Box } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  userDetail: User | null;
  roleList: Role[];
  moduleList: Module[];

}

type FormData = z.infer<typeof ValidationEditUser>;

const UserForm = ({ userDetail, roleList, moduleList }: Props) => {
  const { user_id, user_fullName, role } = userDetail || {};
  const { role_id, role_name } = role || {};

  const permissions =
    role?.permissions?.map(
      (p) =>
        `${p.permission.module.module_name}.${p.permission.action.action_name}`
    ) || [];

  const groupedPermissions = permissions.reduce((acc, perm) => {
    const [module, action] = perm.split(".");

    if (!acc[module]) {
      acc[module] = {
        view: false,
        add: false,
        edit: false,
        delete: false,
      };
    }

    acc[module][action] = true;

    return acc;
  }, {} as Record<string, { view: boolean; add: boolean; edit: boolean; delete: boolean }>);


  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(ValidationEditUser),
    defaultValues: {
      user_id,
      user_fullName,
      role_id,
      role_name,
    },
    mode: "onBlur",
  })

  const onSubmit = async (data: FormData) => {
    console.log("Submitted data:", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[260px]">
          {/* ID  */}
          <div className="mb-2.5 grid">
            <label className="text-[15px] font-medium leading-[35px]">
              ID:
            </label>
            <TextField.Root {...register("user_id")} disabled={true} />
          </div>

          {/* Full Name  */}
          <div className="mb-2.5 grid">
            <label className="text-[15px] font-medium leading-[35px]">
              Full Name:
            </label>
            <TextField.Root
              {...register("user_fullName")}
            />

            {errors.user_fullName && (
              <p className="text-red-500 text-sm">
                {errors.user_fullName.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div className="mb-2.5 grid">
            <label className="text-[15px] font-medium leading-[35px]">
              Role:
            </label>
            <Controller
              name="role_id"
              control={control}
              render={({ field }) => (
                <Box maxWidth="250px">
                  <Select.Root
                    value={field.value ? String(field.value) : ""}
                    onValueChange={(value) => field.onChange(value ? Number(value) : null)}
                  // disabled={isSubmiting}
                  >
                    <Select.Trigger placeholder="Select role" />

                    <Select.Content>
                      <Select.Group>
                        <Select.Item value="null">Unassigned</Select.Item>
                        {roleList?.map((role) => (
                          <Select.Item key={role.role_id} value={String(role.role_id)}>
                            {role.role_name}
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                  {errors.role_name && <Text color="red">{errors.role_name.message}</Text>}
                </Box>
              )}
            />
          </div>









          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update"}
          </Button>

        </div>



        <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-gray-600 uppercase text-xs tracking-wider">
                <th className="text-left px-4 py-3 font-semibold">Module</th>
                <th className="text-center px-4 py-3 font-semibold">View</th>
                <th className="text-center px-4 py-3 font-semibold">Create</th>
                <th className="text-center px-4 py-3 font-semibold">Edit</th>
                <th className="text-center px-4 py-3 font-semibold">Delete</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {moduleList.map((module) => (
                <tr key={module.module_id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-700">
                    {module.module_name}
                  </td>

                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer"
                      defaultChecked={hasPermission(permissions, module.module_name, "View")}
                    />
                  </td>

                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer"
                      defaultChecked={hasPermission(permissions, module.module_name, "Create")}
                    />
                  </td>

                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer"
                      defaultChecked={hasPermission(permissions, module.module_name, "Edit")}
                    />
                  </td>

                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer"
                      defaultChecked={hasPermission(permissions, module.module_name, "Delete")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </form>






    </>

  )
}

export default UserForm

import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export const PUT = async (request: NextRequest) => {

  const body = await request.json();
  console.log("Body: ", JSON.stringify(body, null, 2))
  const { user_id, user_fullName, role_id, permissions } = body;

  if (body.role_id === 6) {
    await prisma.rolePermission.deleteMany({
      where: { roleId: role_id }
    });
  }

  await prisma.user.update({
    where: {
      user_id,
    },
    data: {
      user_roleId: role_id,
      user_fullName,
    }
  })


  // console.log("Body: ", body)

  const allPermissions = await prisma.permission.findMany({
    include: {
      module: true,
      action: true
    }
  });

  // console.log("Permissions body:", JSON.stringify(body.permissions, null, 2));
  // console.log("All", JSON.stringify(allPermissions, null, 2));
  // console.log("All Permission:", allPermissions)

  // Prepare an array to hold the role-permission links we will insert.
  const rolePermissions = [];
  // Iterate through each module in the incoming permissions object.
  for (const moduleName in permissions) {

    const actions = permissions[moduleName];
    // Iterate through each action inside that module.
    for (const actionName in actions) {
      // console.log("Checking:", moduleName, actionName, "value:", actions[actionName]);

      // Only process this action if the user selected/enabled it.
      if (actions[actionName]) {
        // Find the permission record matching this module+action
        const permission = allPermissions.find((p) => {
          return (p.module.module_name === moduleName && p.action.action_name === actionName)
        });

        // console.log("Searching for:", moduleName, actionName, "Found:", permission);

        // If found, queue a rolePermission record
        if (permission) {
          rolePermissions.push({
            roleId: role_id,
            permissionId: permission.perm_id
          });
        }

      }

    }

  }

  // console.log("role Permissions: ", rolePermissions)

  // console.log("Check the delete for user_id", body.role_id);

  await prisma.rolePermission.deleteMany({
    where: { roleId: role_id }
  });

  if (rolePermissions.length > 0) {
    await prisma.rolePermission.createMany({
      data: rolePermissions
    });
  }

  return NextResponse.json({ success: true });




}

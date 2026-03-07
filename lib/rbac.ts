export const hasPermission = (
  userPermissions: string[],
  permission: string
) => userPermissions.includes(permission);
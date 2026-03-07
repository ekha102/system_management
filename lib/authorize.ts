export const authorize = (
  role: string,
  allowedRoles: string[]
) => {

  if (!allowedRoles.includes(role)) {
    return {
      allowed: false,
      message: "You do not have permission to access this page."
    };
  }

  return { allowed: true };
};
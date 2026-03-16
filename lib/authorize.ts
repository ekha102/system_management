// export const authorize = (
//   role: string,
//   allowedRoles: string[]
// ) => {

//   if (!allowedRoles.includes(role)) {
//     return {
//       allowed: false,
//       message: "You do not have permission to access this page."
//     };
//   }

//   return { allowed: true };
// };




// export function authorize(userRole: number, allowedRoles: string[]) {

//   const roles: Record<number, string> = {
//     1: "ADMIN",
//     2: "CHECKIN_OPERATOR",
//     3: "USER",
//   };

//   const roleName = roles[userRole];

//   if (!allowedRoles.includes(roleName)) {
//     return {
//       allowed: false,
//       message: "You do not have permission to access this page",
//     };
//   }

//   return { allowed: true };
// }
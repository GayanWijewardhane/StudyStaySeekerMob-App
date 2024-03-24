import { r as redirect } from "../../../chunks/index.js";
const POST = async ({ cookies }) => {
  cookies.delete("auth", { path: "/" });
  throw redirect(303, "/");
};
export {
  POST
};

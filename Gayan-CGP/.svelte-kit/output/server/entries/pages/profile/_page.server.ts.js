import { a as authenticateUser } from "../../../chunks/auth.js";
import { r as redirect } from "../../../chunks/index.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const load = async (event) => {
  const user = await authenticateUser(event);
  return {
    user
  };
};
const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");
    if (typeof username !== "string" || typeof password !== "string") {
      return { error: "Invalid form data" };
    }
    try {
      const user = await prisma.users.findUnique({
        where: {
          username
        }
      });
      if (!user) {
        return { error: "User not found" };
      }
      const updatedUser = await prisma.users.update({
        where: {
          username
        },
        data: {
          password
        }
      });
      throw redirect(303, "/login");
    } catch (error) {
      console.error("Registration error:", error);
      return { error: "Failed to process registration" };
    }
  }
};
export {
  actions,
  load
};

import { r as redirect } from "../../../chunks/index.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const username = form.get("username");
    const email = form.get("email");
    const password = form.get("password");
    const phone = form.get("phone");
    if (typeof username !== "string" || typeof password !== "string" || typeof email !== "string" || typeof phone !== "string") {
      return { error: "Invalid form data" };
    }
    try {
      const user = await prisma.users.findUnique({
        where: {
          username
        }
      });
      if (user) {
        return { error: "Username already exists" };
      }
      const emailExists = await prisma.users.findUnique({
        where: {
          email
        }
      });
      if (emailExists) {
        return { error: "Email already exists" };
      }
      const newUser = await prisma.users.create({
        data: {
          username,
          email,
          password,
          v: 1,
          // Add the missing 'v' property
          createdAt: /* @__PURE__ */ new Date(),
          // Add the missing 'createdAt' property
          updatedAt: /* @__PURE__ */ new Date()
          // Add the missing 'updatedAt' property
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
  actions
};

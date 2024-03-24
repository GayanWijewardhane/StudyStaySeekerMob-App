import { r as redirect } from "../../../chunks/index.js";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
const prisma = new PrismaClient();
const actions = {
  login: async ({ request, cookies }) => {
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
      if (!user || !user.password) {
        return { error: "Invalid login credentials" };
      }
      const passwordIsValid = bcryptjs.compareSync(
        password,
        user.password
      );
      if (!passwordIsValid) {
        return { error: "Invalid login credentials" };
      }
      cookies.set("auth", user.id.toString(), {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7
        // 1 week
      });
      throw redirect(303, "/");
    } catch (error) {
      console.error("Login error:", error);
      return { error: "Failed to process login" };
    }
  }
};
export {
  actions
};

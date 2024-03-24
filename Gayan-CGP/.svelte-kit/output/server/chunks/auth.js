import { PrismaClient } from "@prisma/client";
import { l as loginstat } from "./stores.js";
const prisma = new PrismaClient();
const authenticateUser = async (event) => {
  const { cookies } = event;
  const userToken = cookies.get("auth");
  if (!userToken) {
    loginstat.set(0);
    return null;
  }
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: userToken
      }
    });
    if (user) {
      loginstat.set(1);
      return user;
    } else {
      loginstat.set(0);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    loginstat.set(0);
    return null;
  }
};
export {
  authenticateUser as a
};

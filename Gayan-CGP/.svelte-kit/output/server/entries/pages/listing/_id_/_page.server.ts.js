import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const load = async ({ params }) => {
  const id = params.id;
  const property = await prisma.listings.findUnique({
    where: {
      id
    }
  });
  return {
    property
  };
};
export {
  load
};

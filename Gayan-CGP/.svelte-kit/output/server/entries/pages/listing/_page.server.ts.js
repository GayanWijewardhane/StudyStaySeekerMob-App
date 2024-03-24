import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const load = async ({ url }) => {
  const page = parseInt(url.searchParams.get("page") || "1");
  const minPrice = parseInt(url.searchParams.get("minPrice") || "0");
  const maxPrice = parseInt(url.searchParams.get("maxPrice") || "1000000");
  let location = url.searchParams.get("location") || "";
  if (location === "All") {
    location = "";
  }
  let properties;
  if (location != "")
    properties = await prisma.listings.findMany({
      skip: (page - 1) * 9,
      // Skip the number of properties already loaded
      take: 9
      // Take the next 3 properties
    });
  else
    properties = await prisma.listings.findMany({
      skip: (page - 1) * 9,
      // Skip the number of properties already loaded
      take: 9
      // Take the next 3 properties
    });
  return {
    properties,
    currentPage: page,
    filters: {
      minPrice,
      maxPrice,
      location: location === "" ? "All" : location
    }
  };
};
export {
  load
};

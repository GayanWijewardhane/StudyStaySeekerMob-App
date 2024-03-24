import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const load: PageServerLoad = async ({ params }) => {
    const id = params.id;

    // Load Property by ID
    const property = await prisma.listings.findUnique({
        where: {
            id: id,
        },
    });

    return {
        property,
    };
};

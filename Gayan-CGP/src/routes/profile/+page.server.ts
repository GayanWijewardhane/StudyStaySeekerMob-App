import { authenticateUser } from "$lib/auth";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "../$types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const load: PageServerLoad = async (event) => {
    const user = await authenticateUser(event);
    // get a list of properties owned by the user
    return {
        user,
    };
};

export const actions: Actions = {
    default: async ({ request }) => {
        const form = await request.formData();
        const username = form.get("username");
        const password = form.get("password");

        if (typeof username !== "string" || typeof password !== "string") {
            return { error: "Invalid form data" };
        }

        try {
            // update the user's password
            const user = await prisma.users.findUnique({
                where: {
                    username: username,
                },
            });

            if (!user) {
                return { error: "User not found" };
            }

            const updatedUser = await prisma.users.update({
                where: {
                    username: username,
                },
                data: {
                    password: password,
                },
            });

            throw redirect(303, "/login");
        } catch (error) {
            console.error("Registration error:", error);
            return { error: "Failed to process registration" };
        }
    },
};

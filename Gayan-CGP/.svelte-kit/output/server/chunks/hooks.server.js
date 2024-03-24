import { a as authenticateUser } from "./auth.js";
import { r as redirect } from "./index.js";
const handle = async ({ event, resolve }) => {
  event.locals.user = await authenticateUser(event);
  if (!event.locals.user) {
    if (!event.url.pathname.startsWith("/login") && !event.url.pathname.startsWith("/register")) {
      throw redirect(303, "/login");
    }
  } else {
    if (event.url.pathname.startsWith("/login") || event.url.pathname.startsWith("/register")) {
      throw redirect(303, "/");
    }
    if (event.url.pathname.startsWith("/listing/post-listing")) {
      if (event.locals.user.role !== "landloard") {
        throw redirect(303, "/listing");
      }
    }
    if (event.url.pathname.startsWith("/listing/landloard")) {
      if (event.locals.user.role !== "landloard") {
        throw redirect(303, "/listing");
      }
    }
    if (event.url.pathname.startsWith("/listing/review")) {
      if (event.locals.user.role !== "warden") {
        throw redirect(303, "/listing");
      }
    }
    if (event.url.pathname.startsWith("/register/landloard")) {
      if (event.locals.user.role !== "warden") {
        throw redirect(303, "/");
      }
    }
  }
  const response = await resolve(event);
  return response;
};
export {
  handle
};

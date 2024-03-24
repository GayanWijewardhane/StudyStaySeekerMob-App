import { c as create_ssr_component, a as add_attribute, b as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let username = data.user?.username;
  let password = data.user?.password;
  let confirmPassword = data.user?.password;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1mewc3o_START -->${$$result.title = `<title>Sahand Estate - Profile</title>`, ""}<!-- HEAD_svelte-1mewc3o_END -->`, ""}  <div class="mx-auto w-full p-5 sm:p-10 md:p-16"><h1 class="mb-8 text-4xl font-bold text-gray-800" data-svelte-h="svelte-nhrn81">Profile</h1> <div class="flex flex-col gap-8 md:flex-row"><div class="w-full md:w-1/2"><div class="flex flex-col gap-4"><div class="flex items-center gap-4"><img${add_attribute("src", data.user?.avatar, 0)} alt="User Avatar" class="h-24 w-24 rounded-full object-cover"> <div class="flex flex-col"><h2 class="text-2xl font-bold text-gray-800">${escape(data.user?.username)}</h2> </div></div></div></div> <div class="w-full md:w-1/2 md:pl-8"><h2 class="mb-4 text-2xl font-semibold text-gray-800" data-svelte-h="svelte-1cm2hhl">Edit Profile</h2> <form method="post" class="flex flex-col gap-4"><div class="flex flex-col gap-4"><label for="username" class="text-gray-600" data-svelte-h="svelte-knqmh3">Username</label> <input type="text" id="username" name="username" class="rounded-md border-gray-300" disabled${add_attribute("value", username, 0)}></div> <div class="flex flex-col gap-4"><label for="password" class="text-gray-600" data-svelte-h="svelte-hobycd">Password</label> <input type="password" id="password" name="password" class="rounded-md border-gray-300"${add_attribute("value", password, 0)}></div> <div class="flex flex-col gap-4"><label for="confirmPassword" class="text-gray-600" data-svelte-h="svelte-wyl7j">Confirm Password</label> <input type="password" id="confirmPassword" name="confirmPassword" class="rounded-md border-gray-300"${add_attribute("value", confirmPassword, 0)}></div> <button type="submit" class="bg-primary-600 hover:bg-primary-700 rounded-md px-4 py-2 text-white transition duration-500 ease-in-out" data-svelte-h="svelte-1hgv97a">Update Profile</button></form></div></div></div>`;
});
export {
  Page as default
};

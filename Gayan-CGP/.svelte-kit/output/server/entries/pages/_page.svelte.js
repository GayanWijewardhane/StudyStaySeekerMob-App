import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1hnkm16_START -->${$$result.title = `<title>Sahand Estate</title>`, ""}<!-- HEAD_svelte-1hnkm16_END -->`, ""} <div class="bg-white shadow-md"><section class="mx-auto max-w-screen-xl items-center px-4 pb-12 pt-24 md:px-8 lg:flex"><div class="flex-1 space-y-4 sm:text-center lg:text-left"><h1 class="text-4xl font-bold text-gray-900 xl:text-5xl" data-svelte-h="svelte-1pws20q">Find a Safe and Comfortable
                <span class="text-primary-400">Hostel</span></h1> <p class="max-w-xl leading-relaxed text-gray-500 sm:mx-auto lg:ml-0" data-svelte-h="svelte-xxjjg4">Did you knew the hostel you&#39;re in can affect your mental health?</p> <div class="items-center justify-center space-y-3 pt-10 sm:flex sm:space-x-6 sm:space-y-0 lg:justify-start"><a href="/listing" class="block w-full rounded-md bg-white px-7 py-3 text-center text-gray-800 shadow-md sm:w-auto" data-svelte-h="svelte-3zrgnl">Start Searching</a> ${data.user?.role === "landloard" ? `<a href="/listing/post-listing" target="_blank" class="block w-full rounded-md bg-gray-700 px-7 py-3 text-center text-gray-200 sm:w-auto" data-svelte-h="svelte-1ea1f3e">Post a Hostel</a>` : ``} ${data.user?.role === "warden" ? `<a href="/listing/review" class="block w-full rounded-md bg-gray-700 px-7 py-3 text-center text-gray-200 sm:w-auto" data-svelte-h="svelte-38jjn8">Review Listing</a>` : ``} ${data.user?.role === "warden" ? `<a href="/register/landloard" class="block w-full rounded-md bg-gray-700 px-7 py-3 text-center text-gray-200 sm:w-auto" data-svelte-h="svelte-12ef57l">Add Land Loards</a>` : ``}</div></div> <div class="mt-7 flex-1 text-center lg:ml-3 lg:mt-0" data-svelte-h="svelte-1h1tibn"> <img src="/hero-bg.png" class="mx-auto w-full sm:w-10/12 lg:w-full"></div></section></div>`;
});
export {
  Page as default
};

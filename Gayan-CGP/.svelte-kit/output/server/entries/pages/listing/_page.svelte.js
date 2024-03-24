import { c as create_ssr_component, e as each, a as add_attribute, b as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const cards = data.properties.map((property) => {
    return {
      link: `/listing/${property.id}`,
      imageUrl: property.imageUrls[0],
      altText: property.name,
      category: property.forGender?.toUpperCase(),
      date: new Date(property.updatedAt).getDate(),
      month: new Date(property.updatedAt).toLocaleString("default", { month: "long" }),
      title: property.name,
      description: property.description,
      rental: property.regularPrice
    };
  });
  let { currentPage = data.currentPage } = $$props;
  let pages = [];
  if (currentPage == 1) {
    pages = [1, 2, 3, 4, 5];
  } else if (currentPage == 2) {
    pages = [1, 2, 3, 4, 5];
  } else {
    pages = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2
    ];
  }
  data.filters.location;
  data.filters.minPrice;
  data.filters.maxPrice;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  return `${$$result.head += `<!-- HEAD_svelte-98jspx_START -->${$$result.title = `<title>Sahand Estate - Listing</title>`, ""}<!-- HEAD_svelte-98jspx_END -->`, ""} <div class="mx-auto max-w-screen-xl p-5 sm:p-10 md:p-16"><h1 class="mb-8 text-4xl font-bold text-gray-800" data-svelte-h="svelte-lpqse6">Latest Listings</h1>  <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"></div> <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">${each(cards, (card) => {
    return `<div class="overflow-hidden rounded shadow-lg"><div class="relative"><a${add_attribute("href", card.link, 0)}><img class="w-full aspect-square object-cover"${add_attribute("src", card.imageUrl, 0)}${add_attribute("alt", card.altText, 0)}> <div class="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent"></div></a> <a${add_attribute("href", card.link, 0)}><div class="bg-primary-600 hover:text-primary-600 absolute bottom-0 left-0 px-4 py-2 text-sm text-white transition duration-500 ease-in-out hover:bg-white">${escape(card.category)} </div></a> <a${add_attribute("href", card.link, 0)}><div class="bg-primary-600 hover:text-primary-600 absolute right-0 top-0 mr-3 mt-3 flex h-16 w-16 flex-col items-center justify-center rounded-full px-4 text-sm text-white transition duration-500 ease-in-out hover:bg-white"><span class="font-bold">${escape(card.date)}</span> <small>${escape(card.month)}</small></div> </a></div> <div class="px-6 py-4"><a${add_attribute("href", card.link, 0)} class="hover:text-primary-600 inline-block text-lg font-semibold transition duration-500 ease-in-out">${escape(card.title)} - Rs.${escape(card.rental)}/Month</a> <p class="text-sm text-gray-500">${escape(card.description)}</p></div> </div>`;
  })}</div>  <div class="mt-10 flex items-center justify-center">${each(pages, (page) => {
    return `${page == currentPage ? `<button class="bg-primary-600 hover:bg-primary-700 rounded-md px-4 py-2 text-white transition duration-500 ease-in-out">${escape(page)} </button>` : `<button class="hover:bg-primary-600 rounded-md bg-white px-4 py-2 text-gray-800 transition duration-500 ease-in-out hover:text-white">${escape(page)} </button>`}`;
  })}</div></div>`;
});
export {
  Page as default
};

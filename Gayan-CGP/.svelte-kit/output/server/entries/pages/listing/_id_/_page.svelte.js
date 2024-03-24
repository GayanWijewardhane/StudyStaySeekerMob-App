import { c as create_ssr_component, b as escape, a as add_attribute } from "../../../../chunks/ssr.js";
import "maplibre-gl";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let loadedImage = data.property?.imageUrls[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-ril034_START -->${$$result.title = `<title>Sahand Estate - ${escape(data.property?.name)}</title>`, ""}<!-- HEAD_svelte-ril034_END -->`, ""}  <div class="mx-auto max-w-screen-xl p-5 sm:p-10 md:p-16"><h1 class="mb-8 text-4xl font-bold text-gray-800" data-svelte-h="svelte-1pm1omb">Property Details</h1> <div class="flex flex-col gap-8 md:flex-row"><div class="w-full md:w-1/2"> <img${add_attribute("src", loadedImage, 0)} alt="Property Image" class="mb-8 h-96 w-full rounded-md object-cover" style="aspect-ratio: 16/9">  <div class="flex items-center gap-4">   <img${add_attribute("src", data.property?.imageUrls[0], 0)} alt="Property Image" class="h-24 w-24 rounded-md object-cover">    <img${add_attribute("src", data.property?.imageUrls[1], 0)} alt="Property Image" class="h-24 w-24 rounded-md object-cover">    <img${add_attribute("src", data.property?.imageUrls[2], 0)} alt="Property Image" class="h-24 w-24 rounded-md object-cover"></div></div> <div class="w-full md:w-1/2 md:pl-8"><h2 class="mb-4 text-2xl font-semibold text-gray-800">${escape(data.property?.name)}</h2> <p class="mb-4 text-gray-600">${escape(data.property?.description)}</p> <div class="mb-4 flex items-center justify-between"><div class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="text-primary-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> <p class="text-gray-600">Price: Rs.${escape(data.property?.regularPrice)} / Month</p></div></div>  </div></div></div>`;
});
export {
  Page as default
};

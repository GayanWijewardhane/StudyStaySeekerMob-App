<script lang="ts">
    export let data;
    // create card[] from data.properties
    const cards = data.properties.map((property) => {
        return {
            link: `/listing/${property.id}`,
            imageUrl: property.imageUrls[0],
            altText: property.name,
            category: property.forGender?.toUpperCase(),
            date: new Date(property.updatedAt).getDate(),
            month: new Date(property.updatedAt).toLocaleString("default", {
                month: "long",
            }),
            title: property.name,
            description: property.description,
            rental: property.regularPrice,
        };
    });

    export let currentPage = data.currentPage;
    let pages: Number[] = [];

    // Pagination ( if not 1 add 2 previous pages and next 2 pages  to a total of 5 pages )
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
            currentPage + 2,
        ];
    }

    let selectedLocation = data.filters.location;
    let selectedPricingMin = data.filters.minPrice;
    let selectedPricingMax = data.filters.maxPrice;

    const onFilter = () => {
        // encoded URL with page, selectedLocation, selectedPricingMin and selectedPricingMax
        const url = `/listing?page=${currentPage}&location=${selectedLocation}&minPrice=${selectedPricingMin}&maxPrice=${selectedPricingMax}`;
        window.location.replace(url);
    };

    const changePage = (page: Number) => {
        const url = `/listing?page=${page}`;
        window.location.replace(url);
    };
</script>

<svelte:head>
    <title>Sahand Estate - Listing</title>
</svelte:head>

<div class="mx-auto max-w-screen-xl p-5 sm:p-10 md:p-16">
    <h1 class="mb-8 text-4xl font-bold text-gray-800">Latest Listings</h1>
    <!-- Filters for Pricing min, Pricing max and Location ( Dropdown ) -->
    <div
        class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    ></div>

    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {#each cards as card}
            <div class="overflow-hidden rounded shadow-lg">
                <div class="relative">
                    <a href={card.link}>
                        <img
                            class="w-full aspect-square object-cover"
                            src={card.imageUrl}
                            alt={card.altText}
                        />
                        <div
                            class="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent"
                        ></div>
                    </a>
                    <a href={card.link}>
                        <div
                            class="bg-primary-600 hover:text-primary-600 absolute bottom-0 left-0 px-4 py-2 text-sm text-white transition duration-500 ease-in-out hover:bg-white"
                        >
                            {card.category}
                        </div>
                    </a>

                    <a href={card.link}>
                        <div
                            class="bg-primary-600 hover:text-primary-600 absolute right-0 top-0 mr-3 mt-3 flex h-16 w-16 flex-col items-center justify-center rounded-full px-4 text-sm text-white transition duration-500 ease-in-out hover:bg-white"
                        >
                            <span class="font-bold">{card.date}</span>
                            <small>{card.month}</small>
                        </div>
                    </a>
                </div>
                <div class="px-6 py-4">
                    <a
                        href={card.link}
                        class="hover:text-primary-600 inline-block text-lg font-semibold transition duration-500 ease-in-out"
                    >
                        {card.title} - Rs.{card.rental}/Month
                    </a>
                    <p class="text-sm text-gray-500">{card.description}</p>
                </div>
            </div>
        {/each}
    </div>

    <!-- Dynamic Pagination -->
    <div class="mt-10 flex items-center justify-center">
        {#each pages as page}
            {#if page == currentPage}
                <button
                    on:click={() => changePage(page)}
                    class="bg-primary-600 hover:bg-primary-700 rounded-md px-4 py-2 text-white transition duration-500 ease-in-out"
                >
                    {page}
                </button>
            {:else}
                <button
                    on:click={() => changePage(page)}
                    class="hover:bg-primary-600 rounded-md bg-white px-4 py-2 text-gray-800 transition duration-500 ease-in-out hover:text-white"
                >
                    {page}
                </button>
            {/if}
        {/each}
    </div>
</div>

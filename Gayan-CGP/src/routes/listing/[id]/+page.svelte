<script lang="ts">
    import Map from "$lib/components/map.svelte";
    export let data;

    let loadedImage = data.property?.imageUrls[0];

    let success = "";
    let error = "";

    const submitReview = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch(
            "http://localhost:8080/api/listing/review.php",
            {
                method: "POST",
                body: formData,
            }
        );

        const result = await response.text();

        if (result.includes("Error")) {
            error = result;
            success = "";
        } else {
            // Handle successful registration, maybe redirect or clear the form
            error = ""; // Clear any previous error
            success = result;
            console.log("Registration successful");
            // Reset the form
            (e.target as HTMLFormElement).reset();
            window.location.reload();
        }
    };
</script>

<svelte:head>
    <title>Sahand Estate - {data.property?.name}</title>
</svelte:head>

<!-- Property Page -->

<div class="mx-auto max-w-screen-xl p-5 sm:p-10 md:p-16">
    <h1 class="mb-8 text-4xl font-bold text-gray-800">Property Details</h1>
    <div class="flex flex-col gap-8 md:flex-row">
        <div class="w-full md:w-1/2">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                src={loadedImage}
                alt="Property Image"
                class=" mb-8 h-96 w-full rounded-md object-cover"
                style="aspect-ratio: 16/9"
            />
            <!-- Small image list -->
            <div class="flex items-center gap-4">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
                    src={data.property?.imageUrls[0]}
                    alt="Property Image"
                    class="h-24 w-24 rounded-md object-cover"
                    on:click={() => {
                        loadedImage = data.property?.imageUrls[0];
                    }}
                />
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
                    src={data.property?.imageUrls[1]}
                    alt="Property Image"
                    class="h-24 w-24 rounded-md object-cover"
                    on:click={() => {
                        loadedImage = data.property?.imageUrls[1];
                    }}
                />
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
                    src={data.property?.imageUrls[2]}
                    alt="Property Image"
                    class="h-24 w-24 rounded-md object-cover"
                    on:click={() => {
                        loadedImage = data.property?.imageUrls[2];
                    }}
                />
            </div>
        </div>
        <div class="w-full md:w-1/2 md:pl-8">
            <h2 class="mb-4 text-2xl font-semibold text-gray-800">
                {data.property?.name}
            </h2>
            <p class="mb-4 text-gray-600">{data.property?.description}</p>
            <div class="mb-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-primary-400 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                    <p class="text-gray-600">
                        Price: Rs.{data.property?.regularPrice} / Month
                    </p>
                </div>
            </div>
            <!-- <div class="flex items-center space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-primary-400 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
				<p class="text-gray-600">Amenities</p>
			</div> -->

            <!-- Contact Button and Open in Google Maps Button -->
        </div>
    </div>
</div>

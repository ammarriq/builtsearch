<script lang="ts">
	import PropertyType from './property-type.svelte'

	import { Combobox } from 'bits-ui'
	import { cn } from '$lib/utils'

	let open = false

	const themes = [
		{ value: 'light-monochrome', label: 'Light Monochrome', icon: 'icon-[ph--train-regional]' },
		{ value: 'dark-green', label: 'Dark Green', icon: 'icon-[ph--map-pin]' },
		{ value: 'svelte-orange', label: 'Svelte Orange', icon: 'icon-[ph--map-pin]' }
	]
</script>

<section class="relative h-[calc(100svh-3.5rem)] w-full">
	<enhanced:img class="h-[calc(100svh-3.5rem)] object-cover" src="./background.jpg"></enhanced:img>

	<div
		class="container absolute left-1/2 top-1/2 max-w-max -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-500/80 px-12 py-6"
	>
		<nav class="mx-auto max-w-max rounded-full bg-white p-0.5">
			<button class="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white md:px-6">
				Sell
			</button>
			<button class="rounded-full px-4 py-1 text-sm font-semibold md:px-6">Rent</button>
			<button class="rounded-full px-4 py-1 text-sm font-semibold md:px-6">Find Agent</button>
		</nav>

		<div class="mt-4 flex">
			<Combobox.Root {open} onOpenChange={(o) => (open = o)}>
				<Combobox.Input
					class={cn(
						`grow px-4 py-1.5 text-sm outline-none placeholder:text-gray-500 md:w-96 md:px-5 md:py-3`,
						open ? 'rounded-tl-xl' : 'rounded-l-xl'
					)}
					placeholder="Search Districts"
				/>
				<Combobox.Content class="rounded-b-xl bg-white shadow-md">
					{#each themes as theme}
						<Combobox.Item
							class="flex w-full select-none items-center p-3 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-gray-100"
							value={theme.value}
							label={theme.label}
						>
							<i class="text-gray-500 {theme.icon}"></i>
							<p class="ml-3 text-primary">{theme.label}</p>
							<!-- <Combobox.ItemIndicator class="ml-auto" asChild={false}>
							<Check />
						</Combobox.ItemIndicator> -->
						</Combobox.Item>
					{/each}
				</Combobox.Content>
			</Combobox.Root>
			<button
				class="flex items-center justify-center rounded-r-xl bg-primary px-3 text-sm font-semibold text-white md:px-6 md:text-base"
			>
				Search
			</button>
		</div>

		<nav class="mx-auto mt-4 max-w-max">
			<PropertyType />
		</nav>
	</div>
</section>

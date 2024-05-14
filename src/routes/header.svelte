<script>
	import { page } from '$app/stores'
	import { fly } from 'svelte/transition'

	let isOpen = false

	const closeMenu = () => (isOpen = false)
	const toggleMenu = () => (isOpen = !isOpen)

	const links = [
		{ href: '/pricing', label: 'pricing' },
		{ href: '/docs', label: 'docs' }
	]
</script>

<header class="sticky top-0 z-20 grid h-14 place-items-center border-b bg-white lg:static">
	<nav class="container flex items-center justify-between gap-6 px-6">
		<button class="flex md:hidden" on:click={toggleMenu}>
			<i
				class="size-6 text-black"
				class:icon-[solar--hamburger-menu-outline]={!isOpen}
				class:icon-[ph--x]={isOpen}
			/>
		</button>

		<div class="mr-0 md:mr-8">
			<a href="/" class="flex items-center justify-center gap-3 lg:justify-start">
				<img class="w-7 md:w-9" src="/icon.svg" alt="builtsearch" />
				<img class="w-28 md:w-40" src="/logo-light.svg" alt="builtsearch" />
			</a>
		</div>

		<ul class="hidden items-center gap-3 capitalize md:flex">
			{#each links as { href, label } (href)}
				<a
					{href}
					class:text-primary={$page.url.pathname === href}
					class="font-semibold hover:text-primary"
				>
					{label}
				</a>
			{/each}
		</ul>

		<button
			class="rounded-md border border-gray-300 bg-gray-200 px-4 py-1.5 text-sm font-medium md:ml-auto"
		>
			Sign in
		</button>
		<button
			class="hidden rounded-md border border-primary bg-primary px-4 py-1.5 text-sm font-medium text-white md:block"
		>
			Workspace
		</button>
	</nav>
</header>

<!-- Mobile Nav -->
{#if isOpen}
	<header
		transition:fly={{ x: '-100%', opacity: 1 }}
		class="fixed inset-x-0 bottom-0 top-14 flex justify-center bg-white py-6 md:hidden"
	>
		<nav class="container flex flex-col items-center gap-3 px-6 capitalize">
			{#each links as { href, label } (href)}
				<a
					{href}
					class:text-primary={$page.url.pathname === href}
					class="font-semibold hover:text-primary"
					on:click={closeMenu}
				>
					{label}
				</a>
			{/each}

			<button
				class="rounded-md border border-primary bg-primary px-4 py-1.5 text-sm font-medium text-white"
			>
				Workspace
			</button>
		</nav>
	</header>
{/if}

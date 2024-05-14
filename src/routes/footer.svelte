<script lang="ts">
	const links = [
		{
			title: 'About',
			navlinks: [
				{ href: '/shop', label: 'About Us' },
				{ href: '/custom', label: 'Our Team' },
				{ href: '/custom', label: 'Careers' },
				{ href: '/stores', label: 'Partners' },
				{ href: '/stores', label: 'Contact Us' }
			]
		},
		{
			title: 'Resources',
			navlinks: [
				{ href: '/story', label: 'Blog' },
				{ href: '/why-bamboo', label: 'Case Studies' },
				{ href: '/why-bamboo', label: 'Publications' },
				{ href: '/why-bamboo', label: 'News' }
			]
		},
		{
			title: 'Connect',
			navlinks: [
				{ href: '/contact', label: 'Twitter' },
				{ href: '/shipping', label: 'LinkedIn' },
				{ href: '/shipping', label: 'Facebook' },
				{ href: '/shipping', label: 'Instagram' },
				{ href: '/shipping', label: 'Youtube' }
			]
		}
	]
</script>

<footer class="border-t bg-black text-gray-400">
	<div class="container flex pt-12 pb-8 flex-col lg:flex-row px-6">
		<div class="self-center lg:self-start lg:w-1/4 mb-12">
			<a href="/" class="flex gap-3 items-center justify-center lg:justify-start">
				<img src="/icon.svg" alt="builtsearch" />
				<img class="w-32 md:w-40" src="/logo-dark.svg" alt="builtsearch" />
			</a>
			<p class="text-sm mt-4 text-center lg:text-left">Resource Centre for the Built Environment</p>
		</div>

		<div
			class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16 justify-items-center
			sm:justify-items-start md:justify-items-center lg:justify-items-end w-full lg:w-3/4 ml-auto"
		>
			{#each links as { title, navlinks } (title)}
				<aside class="space-y-4 text-center sm:text-left max-w-fit">
					<h5 class="font-semibold text-xl text-white">{title}</h5>
					<nav class="space-y-2">
						{#each navlinks as { href, label }, i (i)}
							<a {href} class="block hover:text-primary" class:bg-yellow-200={href === '/'}>
								{label}
							</a>
						{/each}
					</nav>
				</aside>
			{/each}
		</div>
	</div>

	<nav class="container px-6 border-t text-gray-400 border-gray-400">
		<div class="flex items-center justify-between gap-4 flex-col md:flex-row py-8">
			<p class="text-gray-400">
				Copyright &copy; {new Date().getFullYear()}

				rc.builtsearch.com
			</p>
			<p>A product of BuiltSearch</p>

			<!-- <form action="/?/change_location" method="post" use:enhance>
				<select
					name="countryCode"
					value={$page.data.countryCode}
					class="text-sm pr-3"
					on:change={(e) => e.currentTarget.form?.requestSubmit()}
				>
					<option value="tw">Taiwan</option>
					<option value="us">International</option>
				</select>
			</form> -->

			<nav class="flex gap-3">
				<a href="/" class="block hover:text-primary w-fit"> Privacy Policy </a>
				<a href="/" class="block hover:text-primary w-fit"> Terms of Service </a>
				<a href="/" class="block hover:text-primary w-fit"> Sitemap </a>
			</nav>
		</div>
	</nav>
</footer>

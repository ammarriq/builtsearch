<script lang="ts">
	import { Checkbox, Label, Popover, Tabs } from 'bits-ui'

	let open = false
</script>

<Popover.Root onOpenChange={(o) => (open = o)}>
	<Popover.Trigger class="flex items-center gap-2 text-sm font-semibold text-white">
		<p>Price</p>
		<i class:icon-[ph--caret-down-bold]={!open} class:icon-[ph--caret-up-bold]={open}></i>
	</Popover.Trigger>
	<Popover.Content class="rounded-lg bg-white p-4 shadow-md">
		<Tabs.Root>
			<p class="text-sm font-semibold">Price</p>
			<Tabs.List class="my-4">
				<Tabs.Trigger
					value="all"
					class="rounded-full bg-gray-200 px-5 py-1.5 text-sm data-[state=active]:bg-primary/20"
				>
					All
				</Tabs.Trigger>
				<Tabs.Trigger
					value="condo"
					class="rounded-full bg-gray-200 px-5 py-1.5 text-sm data-[state=active]:bg-primary/20"
				>
					Condo
				</Tabs.Trigger>
				<Tabs.Trigger
					value="landed"
					class="rounded-full bg-gray-200 px-5 py-1.5 text-sm data-[state=active]:bg-primary/20"
				>
					Landed
				</Tabs.Trigger>
				<Tabs.Trigger
					value="hdb"
					class="rounded-full bg-gray-200 px-5 py-1.5 text-sm data-[state=active]:bg-primary/20"
				>
					HDB
				</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="condo" class="max-h-32 space-y-2 overflow-auto">
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="1"
						aria-labelledby="1-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="1-label"
						for="1"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						1A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="2"
						aria-labelledby="2-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="2-label"
						for="2"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						2A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="3"
						aria-labelledby="3-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="3-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						3A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="4"
						aria-labelledby="4-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="4-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						4A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="5"
						aria-labelledby="5-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="5-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						5A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="6"
						aria-labelledby="6-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="6-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						6A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="7"
						aria-labelledby="7-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="7-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						7A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="8"
						aria-labelledby="8-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="8-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						8A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="9"
						aria-labelledby="9-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="9-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						9A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="10"
						aria-labelledby="10-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="10-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						10A
					</Label.Root>
				</div>
			</Tabs.Content>
			<Tabs.Content value="landed" class="max-h-32 space-y-2 overflow-auto">
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="1"
						aria-labelledby="1-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="1-label"
						for="1"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						1A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="2"
						aria-labelledby="2-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="2-label"
						for="2"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						2A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="3"
						aria-labelledby="3-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="3-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						3A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="4"
						aria-labelledby="4-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="4-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						4A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="5"
						aria-labelledby="5-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="5-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						5A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="6"
						aria-labelledby="6-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="6-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						6A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="7"
						aria-labelledby="7-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="7-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						7A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="8"
						aria-labelledby="8-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="8-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						8A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="9"
						aria-labelledby="9-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="9-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						9A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="10"
						aria-labelledby="10-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="10-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						10A
					</Label.Root>
				</div>
			</Tabs.Content>
			<Tabs.Content value="hdb" class="max-h-32 space-y-2 overflow-auto">
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="1"
						aria-labelledby="1-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="1-label"
						for="1"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						1A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="2"
						aria-labelledby="2-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="2-label"
						for="2"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						2A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="3"
						aria-labelledby="3-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="3-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						3A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="4"
						aria-labelledby="4-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="4-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						4A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="5"
						aria-labelledby="5-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="5-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						5A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="6"
						aria-labelledby="6-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="6-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						6A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="7"
						aria-labelledby="7-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="7-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						7A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="8"
						aria-labelledby="8-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="8-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						8A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="9"
						aria-labelledby="9-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="9-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						9A
					</Label.Root>
				</div>
				<div class="flex items-center space-x-3">
					<Checkbox.Root
						id="10"
						aria-labelledby="10-label"
						class="flex items-center"
						checked="indeterminate"
					>
						<Checkbox.Indicator let:isChecked class="flex items-center">
							{#if isChecked}
								<i class="icon-[ph--check-square-fill] size-5" />
							{:else}
								<i class="icon-[ph--square] size-5" />
							{/if}
						</Checkbox.Indicator>
					</Checkbox.Root>
					<Label.Root
						id="10-label"
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						10A
					</Label.Root>
				</div>
			</Tabs.Content>
			<hr class="-mx-4" />
		</Tabs.Root>

		<div class="mt-6 flex justify-between">
			<button class="rounded-full border px-6 py-2 font-semibold">Clear</button>
			<button class="rounded-full bg-black px-6 py-2 font-semibold text-white">
				Apply Filters
			</button>
		</div>
	</Popover.Content>
</Popover.Root>

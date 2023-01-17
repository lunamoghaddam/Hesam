<script lan="ts">
	import { onMount } from 'svelte';
	import api from '$api';

	let items = [];
	onMount(async () => {
		const services = await api.services();
		if (services?.length) {
			items = services.map((i) => ({
				title: i.title[0]?.plain_text,
				icon: i.icon[0]?.plain_text,
				subtitle: i.subtitle[0]?.plain_text ?? '',
				color: i.color[0]?.plain_text ?? ''
			}));
		}
	});
</script>

<div class="service-container">
	{#each items as item}
		<div class="service">
			<div class="row jc-e ai-c">
				<div class="col" style:margin-right="1rem">
					<h2>{item.title}</h2>
					<span style:margin-top="1rem">{item.subtitle}</span>
				</div>
				<div class="icon-container" style:color={item.color}>
					<i class="material-icons">{item.icon}</i>
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.service-container {
		@extend .row;
		flex-direction: column;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 1rem;

		@include breakpoint(desktop) {
			flex-direction: row-reverse;
		}

		.service {
			@extend .col, .glass;
			padding: 2rem 1rem;
			margin-bottom: 1rem;

			@include breakpoint(desktop) {
				margin-right: 1rem;
				min-width: 320px;
			}

			h2,
			span {
				text-align: right;
			}

			.icon-container {
				@extend .row, .ai-c, .jc-c;
				background-color: darken($on-surface, 10);
				width: 50px;
				height: 50px;
			}
		}
	}
</style>

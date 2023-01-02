<script lang="ts">
	import { page } from '$app/stores';
	import { clickOutside } from '$directives';

	$: path = $page.url.pathname;

	let toggled = false;
	let scrollY = 0;
	const menu = [
		{
			route: '/',
			name: 'صفحه اصلی'
		},
		{
			route: '/services',
			name: 'خدمات ما'
		},
		{
			route: '/contact',
			name: 'تماس با ما'
		},
		{
			route: '/blog',
			name: 'مقالات'
		},
		{
			route: '/stock',
			name: 'استوک'
		},
		{
			route: '/consultation',
			name: 'مشاوره رایگان'
		},
		{
			route: '/hp-printer-representative',
			name: 'HP نمایندگی پرینتر'
		}
	];

	const toggleMenu = () => {
		toggled = !toggled;
	};
</script>

<svelte:window bind:scrollY />

<div
	class="nav"
	class:visible={scrollY >= 45}
	use:clickOutside
	on:outclick={() => (toggled = false)}
>
	<a href="/">
		<img src="img/logo.png" height="60" alt="logo" />
	</a>

	<div style:flex={1} />

	<ul class:toggled>
		{#each menu as item}
			<li class:selected={path === item.route}>
				<a
					href={item.route}
					on:click={() => {
						toggled = false;
					}}
				>
					{item.name}
				</a>
			</li>
		{/each}
	</ul>

	<button class="menu-handler" on:click={toggleMenu}>
		<i class="material-icons">menu</i>
	</button>
</div>

<style lang="scss">
	.nav {
		@extend .row;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: $primary;
		z-index: 1;
		@include transition(background-color, 0.3s, ease-in-out);

		@include breakpoint(desktop) {
			align-items: flex-start;
			background-color: transparent;
			height: 99px;

			&.visible {
				background-color: $primary;
			}
		}

		&:not(.visible) ul li.selected a {
			@include breakpoint(desktop) {
				color: $primary;
			}
		}

		.menu-handler {
			display: flex;
			background-color: $primary;
			cursor: pointer;
			padding: 1rem;
			border: 2px solid darken($primary, 20);
			@include transition(all, 0.3s, ease-in-out);

			&:hover,
			&:active {
				background-color: darken($primary, 20);
				border-color: darken($primary, 40);
			}

			i {
				color: $on-surface;
			}

			@include breakpoint(desktop) {
				display: none;
			}
		}

		ul {
			@extend .row;
			flex-direction: column;
			background-color: $primary;
			position: fixed;
			justify-content: center;
			padding: 0 1rem;
			top: 99px;
			left: 0;
			right: 0;
			overflow: hidden;
			height: 0;
			z-index: 1;
			@include transition(height, 0.3s, ease-in-out);

			&.toggled {
				height: 320px;
			}

			@include breakpoint(desktop) {
				padding: 0;
				flex-direction: row-reverse;
				background-color: transparent;
				position: relative;
				top: auto;
				height: 99px;
			}

			li {
				list-style: none;
				margin-top: 1.5rem;
				text-align: right;

				a {
					color: $on-surface;
				}

				&.selected {
					a {
						cursor: default;
						color: darken($primary, 30);
					}
				}

				&:first-child {
					margin-top: 0;
				}

				@include breakpoint(desktop) {
					margin-right: 2rem;

					&:first-child {
						margin-top: 1.5rem;
					}
				}
			}
		}
	}
</style>

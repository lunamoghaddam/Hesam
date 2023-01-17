<script lang="ts">
	import api from '$api';
	let fullName: string;
	let phoneNumber: string;
	const submitRequest = async () => {
		if (!fullName?.length || !phoneNumber?.length) return;
		const r = await api.consult(fullName, phoneNumber);
		if (!r?.ok) {
			// handle error
			return;
		}

		// handle success
	};
</script>

<div class="consult-container">
	<div class="form-group">
		<input bind:value={fullName} type="text" style:text-align="right" placeholder="نام کامل" />
		<input bind:value={phoneNumber} type="tel" placeholder="شماره همراه" />
		<button
			class="btn primary"
			disabled={!fullName?.length || !phoneNumber?.length}
			on:click={submitRequest}
		>
			ثبت درخواست
		</button>
	</div>
</div>

<style lang="scss">
	.consult-container {
		@extend .col, .ai-c;
		padding: 1rem;

		.form-group {
			@extend .col;
			width: 100%;
			max-width: 550px;
			padding: 1rem;
			background-color: darken($on-surface, 25);

			> * {
				margin-bottom: 1rem;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>

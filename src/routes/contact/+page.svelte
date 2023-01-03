<div class="sides">
	<!-- map section -->
	<div class="side">
		<iframe
			class="map-canvas"
			src="https://maps.google.com/maps?q=Tehran%20Printer&t=&z=17&ie=UTF8&iwloc=&output=embed"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
		/>
	</div>

	<!-- adress section -->
	<div class="side box">
		<!-- contact info -->
		<div class="col">
			<h3>اطلاعات تماس</h3>
			<span>دفتر مرکزی : جلال آل احمد ضلع شمال غربی پل گیشا روبروی خیابان پاتریس پلاک 97 واحد</span>
			<span
				>شعبه دوم: تهران - گیشا - خیابان فاضل شمالی - بعد از مسجد ورودی d9 نصر طبقه اول واحد 580</span
			>
		</div>

		<hr />

		<!-- working hrs -->
		<div class="col" style="margin-top: 1rem;">
			<h3>ساعت کاری شرکت</h3>
			<span>شنبه - چهارشنبه: ۸ الی ۱۸ / پنجشنبه: ۸ الی ۱۴</span>
		</div>

		<hr />

		<div class="row" style="margin-top: 1rem;">
			<div class="col" style:flex="1">
				<h3>شماره‌های تماس</h3>
				<div class="row">
					<a class="btn primary" style="margin-right: 1rem;" href="tel:+982188275852">8827-5852</a>
					<a class="btn primary" style="margin-right: 1rem;" href="tel:+982188287522">8828-7522</a>
					<a class="btn primary" href="tel:+989125144894">912-514-4894</a>
				</div>
			</div>
			<div class="col" style="margin-left: 1rem;">
				<h3>شبکه‌های اجتماعی</h3>
				<div class="row jc-e">
					<a class="btn link primary" href="https://t.me/tehranprinter_com">
						<img
							src="https://tehranprinter.com/wp-content/themes/tehranprinter/images/icons/telegram.svg"
							alt=""
						/>
					</a>
					<a
						class="btn link primary"
						style="margin-left: 1rem;"
						href="https://www.instagram.com/tehran.printer/"
					>
						<img
							src="https://tehranprinter.com/wp-content/themes/tehranprinter/images/icons/instagram.svg"
							alt=""
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.sides {
		@extend .col;
		padding: 1rem;

		@include breakpoint(desktop) {
			flex-direction: row;
		}

		.side {
			@extend .col, .glass;
			flex: 1;
			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 0;
			}

			&.box {
				text-align: right;
				padding: 1rem;

				.col {
					h3 {
						margin-bottom: 0.5rem;
					}

					span {
						color: lighten($surface, 15);
						margin-bottom: 0.5rem;
					}
				}

				hr {
					width: 100%;
					border: 1px solid darken($on-surface, 25);
				}
			}

			@include breakpoint(desktop) {
				margin-bottom: 0;
				margin-right: 1rem;

				&:last-child {
					margin-right: 0;
				}
			}

			.map-canvas {
				width: 100%;
				height: 100%;
				min-height: 450px;
			}
		}
	}
</style>

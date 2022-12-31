<div class="banner">
    <img
        class="no-select-img"
        src="/img/bg.svg"
        alt="bg"
    />
    <div class="content">
        <h2>مرکز تخصصی تعمیرات ماشین‌های اداری</h2>
        <p>
            در صورتی که دستگاه شما با مشکل مواجه شده، ما صفر تا صد تعمیرات و سرویس دستگاه شما را انجام داده و مثل روز اول تحویلتان می‌دهیم
        </p>
        <div class="row jc-e" style:margin-top="1rem">
            <a
                class="btn primary"
                href="/consultation"
            >
                درخواست مشاوره رایگان
            </a>
        </div>
    </div>
</div>

<style lang="scss">
    .banner {
        @extend .col, .ai-c;
        position: relative;
        padding: 2rem 1rem;

        img {
            max-width: 300px;
            @include transition(max-width, 0.3s, ease-in-out);

            @include breakpoint(tablet) {
                max-width: 500px;
            }

            @include breakpoint(desktop) {
                max-width: 900px;
            }
        }

        .content {
            @extend .col;
            margin-top: 2rem;
            color: $on-surface;
            text-align: right;

            h2 {
                font-size: 2.3rem;
                margin-bottom: 1rem;
            }

            p {
                font-size: 1.1rem;
                max-width: 700px;
            }
        }
    }
</style>
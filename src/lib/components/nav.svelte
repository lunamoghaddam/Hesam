<div class="nav">
    <img
      src="./img/logo.png"
      height="60"
    />
    
    <div style:flex={1} />

    <ul>
        <li>صفحه اصلی</li>
        <li>خدمات ما</li>
        <li>آدرس ما</li>
        <li>مقالات</li>
        <li>استوک</li>
        <li>مشاوره رایگان</li>
        <li>HP نمایندگی پرینتر</li>
    </ul>
</div>

<style lang="scss">
  .nav {
    @extend .row;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    ul {
      @extend .row;
      flex-direction: row-reverse;

      li {
        list-style: none;
        margin-right: 1rem;
        color: $on-surface;
      }
    }
  }
</style>

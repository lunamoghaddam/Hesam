<script lang="ts">
  let toggled = false;

  const toggleMenu = () => {
    toggled = !toggled;
  };
</script>

<div class="nav">
    <img
      src="./img/logo.png"
      height="60"
    />
    
    <div style:flex={1} />
    
    <ul
      class:toggled
    >
        <li>صفحه اصلی</li>
        <li>خدمات ما</li>
        <li>آدرس ما</li>
        <li>مقالات</li>
        <li>استوک</li>
        <li>مشاوره رایگان</li>
        <li>HP نمایندگی پرینتر</li>
    </ul>

    <button
      class="menu-handler"
      on:click={toggleMenu}
    >
      <i class="material-icons">menu</i>
    </button>
</div>

<style lang="scss">
  .nav {
    @extend .row;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: $primary;

    @include breakpoint(desktop) {
      align-items: flex-start;
      background-color: transparent;
    }

    .menu-handler {
      display: flex;
      background-color: $primary;
      padding: 1rem;
      border: 2px solid darken($primary, 20);

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
      top: 92px;
      left: 0;
      right: 0;
      overflow: hidden;
      height: 0;
      -webkit-transition: height 0.3s ease-in-out;
      -moz-transition: height 0.3s ease-in-out;
      transition: height 0.3s ease-in-out;

      &.toggled {
        height: 300px;
      }

      @include breakpoint(desktop) {
        padding: 0;
        flex-direction: row-reverse;
        background-color: transparent;
        position: relative;
        top: auto;
        height: 300px;
      }

      li {
        list-style: none;
        color: $on-surface;
        margin-top: 1.5rem;
        text-align: right;

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

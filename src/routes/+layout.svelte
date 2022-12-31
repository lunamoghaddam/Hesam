<script lang="ts">
  	import '$styles';

    import { Nav } from '$components';
</script>

<Nav />
<div class="container">
  <slot />
</div>

<style lang="scss">
  .container {
    margin-top: 99px;
  }
</style>

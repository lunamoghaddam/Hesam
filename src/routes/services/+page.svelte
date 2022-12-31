<script lan="ts">
  const items = [
    {
      title: 'first t',
      subtitle: 'first s',
    },
    {
      title: 'second t',
      subtitle: 'second s',
    },
    {
      title: 'third t',
      subtitle: 'third s',
    }
  ]
</script>

<div class="service-container">
{#each items as item}
  <div class="row">
    <h3>{ item.title }</h3>
    <span>{ item.subtitle }</span>
  </div>
{/each}
</div>

<style lang="scss">
  .service-container {
    @extend .col;

    .row {
      background-color: $on-surface;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

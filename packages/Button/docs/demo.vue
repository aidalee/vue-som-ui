<template>
  <div class="large">
    <som-button large type="primary">primary</som-button>
    <som-button large type="success">success</som-button>
    <som-button large disabled type="secondary">secondary</som-button>
    <som-button large type="danger">danger</som-button>
  </div>
  <div class="mini">
    <som-button mini type="primary">primary</som-button>
    <som-button mini type="success">success</som-button>
    <som-button mini disabled type="secondary">secondary</som-button>
    <som-button mini type="danger">danger</som-button>
  </div>
</template>

<script setup>
</script>
<style scoped lang="scss">
.large {
  width: 200px;
  .som-button {
    margin-bottom: 15px;
  }
}
.mini {
  .som-button {
    margin-right: 15px;
  }
}
</style>
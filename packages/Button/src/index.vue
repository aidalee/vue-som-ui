<template>
  <button class="som-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineEmits } from 'vue';
defineEmits(['click'])
export default {
	name: 'SomButton',
  props: {}
}
</script>

<style scoped lang="less">
.som-button {
  appearance: none;
  padding: 5px 10px;
  background: lightskyblue;
  border: none;
  border-radius: 4px;
  color: #fff;
  &:active {
    background: rgb(92, 185, 243);
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
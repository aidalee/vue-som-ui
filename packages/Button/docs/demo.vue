<template>
  <div>
    <som-button @click="onClick(1)">第一个</som-button>
    <som-button @click="onClick(2)">第二个</som-button>
    <som-button @click="onClick(3)">第三个</som-button>
  </div>
</template>

<script setup>
const onClick = (num) => { console.log(`我是第 ${num} 个自定义按钮`) }
</script>
# Button 按钮

:::demo 使用 `large`、`mini`定义大小，默认是`default`。
```vue
<template>
  <div class="large">
    <som-button color="primary" shape="circle" disabled>primary</som-button>
    <som-button color="default" disabled>primary</som-button>
    <som-button color="success">success</som-button>
    <som-button color="error">error</som-button>

    <som-button size="sm" shape="circle">smsmsm</som-button>
    <som-button size="md" shape="circle">md</som-button>
    <som-button size="lg">lg</som-button>

    <som-button size="md" @click="handleClick">点击</som-button>

    <som-button shape="round" :gradients="['#0d6efd', '#19d5fd']">半圆角</som-button>
    <som-button shape="circle" :delay="2000" @click="handleClick" color="success">点击之后延迟禁点</som-button>
  </div>
  <div class="large">
    <som-button-group :right="true">
      <som-button size="md" shape="round">md</som-button>
      <som-button size="md" shape="round">md</som-button>
    </som-button-group>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const handleClick = (params) => {
      console.log(params);
    }

    return { handleClick }
  }
}
</script>

<style lang="scss">
.large {
  width: 200px;
}
.large .som-button {
  margin-bottom: 15px;
}
.mini .som-button {
  margin-right: 15px;
}
</style>
```
:::

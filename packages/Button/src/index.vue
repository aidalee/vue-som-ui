<template>
  <button class="som-button" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { validate } from '@babel/types';
import { defineEmits, defineComponent, PropType, computed, reactive, toRefs } from 'vue';
defineEmits(['click'])
interface DataProps {
  classes: any
}
export default defineComponent ({
  name: 'SomButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    delayTime: Number,
    mini: Boolean,
    large: Boolean,
    plain: Boolean,
    text: String,
    actionType: {
      type: String,
      validator(value) {
        return value == true
      }
    },
    borderWidth: {
      type: Number,
      default: 2,
      validator(value) {
        return value == true
      }
    },
    btnStyle: Object,
    radius: {
      type: [String, Number],
      default: '9em'
    },
    loading: Boolean,
    icon: String,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: (val) => {
        return validate.length === 2;
      }
    }
  },
  setup (props:any) {
    const data: DataProps = reactive ({
      classes: computed(()=>{
        return [
          {
          "disabled": !props.plain && props.disabled,
          "som-button--plain-disabled": props.plain && props.disabled,
          "som-button--mini": props.mini,
          "som-button--large": props.large,
          "som-button-no-border": props.noBorder,
          "som-button--icon": props.icon,
          },
          props.borderWidth === 1 && !props.radius && `som-button--small-border`,
          !props.plain ? `som-button--${props.type}` : "",
          props.plain ? `som-button--plain--${props.type}` : "",
        ]
      })
    })
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../styles/button.scss";
</style>
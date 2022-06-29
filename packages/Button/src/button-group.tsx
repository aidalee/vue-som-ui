import { defineComponent, toRef, provide, computed } from "vue";
import { buttonGroupProps, ButtonGroupProps, buttonGroupInjectionKey } from "./button-types";
import { useNamespace } from "../../hooks/use-namespace";
import './button-group.scss';

export default defineComponent({
  name: 'SomButtonGroup',
  props: buttonGroupProps,
  setup(props: ButtonGroupProps, { slots }) {

    const ns = useNamespace('button-group');

    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m('right')]: props.right,
      [ns.m(props.flexRank || '')]: props.flexRank
    }))
    
    return () => {
      return (
        <div class={classes.value}>{slots.default && slots.default()}</div>
      )
    }
  }
})
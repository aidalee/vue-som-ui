import { defineComponent, toRefs, reactive, ref } from "vue";
import type { SetupContext } from "vue";
import { buttonProps, ButtonProps } from "./button-types";
import useButton from "./use-button";
import './button.scss';
import { throttle } from 'throttle-debounce';

export default defineComponent({
  name: 'SomButton',
  props: buttonProps,
  emits: ['click'],
  setup(props: ButtonProps, ctx: SetupContext) {

    let { icon, disabled, loading, delay, style, gradients } = toRefs(props);
    const { classes, iconClass } = useButton(props, ctx);

    let _throttle: () => void;

    if(delay.value) {
      _throttle = throttle(delay.value, ()=>{
        ctx.emit('click', '触发点击延迟')
      })
    }

    let styleObj = style.value || {};

    if(gradients?.value) {

      styleObj = Object.assign(style, {
        background: `linear-gradient(90deg, ${gradients?.value[0]}, ${gradients?.value[1]})`,
        color: '#fff',
        borderWidth: 0
      })
      
    }

    const onClick = (e: MouseEvent) => {
      if (loading.value) {
        return;
      }
      if(_throttle) {
        _throttle()
      } else {
        ctx.emit('click', '触发点击')
      } 
    }

    return () => {
      return (
        <button style={styleObj} class={classes.value} disabled={disabled.value} onClick={onClick}>
          {/* {icon.value && <Icon name={icon.value} class={iconClass.value} />} */}
          <span class="button-content">{ctx.slots.default?.()}</span>
        </button>
      )
    }

  }
})
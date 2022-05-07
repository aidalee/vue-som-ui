declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
declare module '*.md' {
  import { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
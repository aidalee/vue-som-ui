import { App, Plugin } from 'vue';
import SomButton from './src/index.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('SomButton', SomButton);
  },
};

export { SomButton };
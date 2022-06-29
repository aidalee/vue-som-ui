import { App, Plugin } from 'vue';
import Button from './src/button';
import ButtonGroup from './src/button-group';

export * from './src/button-types';

export { Button, ButtonGroup }

console.log('ButtonGroup', ButtonGroup)

export default {
  title: 'button btns',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(ButtonGroup.name, ButtonGroup);
  }
}
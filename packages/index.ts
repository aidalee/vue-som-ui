/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';

const SomUiPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
  },
};

export default SomUiPlugin;

export * from './Button'
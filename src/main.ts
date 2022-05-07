import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/markdown.css';

import SomUi from '../packages';
import Preview from './components/Preview.vue';
import Demo from '../packages/Button/docs/demo.vue'

const app = createApp(App)
app.component('Preview', Preview)
// app.component('Demo', Demo)
app.use(SomUi).use(router).mount('#app')

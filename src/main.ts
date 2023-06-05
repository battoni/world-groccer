import { createApp } from 'vue';
import Plugins from '@Plugins';
import App from './App.vue';

const app = createApp(App);

Plugins.forEach((plugin) => app.use(plugin));

app.mount('#app');

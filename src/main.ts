import { createApp } from 'vue';
import Libraries from '@Libraries';
import Plugins from '@Plugins';
import App from './App.vue';

const app = createApp(App);

Libraries.forEach((lib) => app.use(lib));
Plugins.forEach((plugin) => app.use(plugin));

app.mount('#app');

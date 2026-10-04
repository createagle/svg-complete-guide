import { createApp } from 'vue';
import '../../../../assets/style.css';
import './app.css';

export const mount = (App) => createApp(App).mount('#app');

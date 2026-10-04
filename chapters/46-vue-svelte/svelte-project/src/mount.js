import { mount as svelteMount } from 'svelte';
import '../../../../assets/style.css';
import './app.css';

export const mount = (App) => svelteMount(App, { target: document.getElementById('app') });

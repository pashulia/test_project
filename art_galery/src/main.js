import { createApp } from 'vue';

import components from '@/components';
import directives from '@/derectives';
import router from '@/router';
import store from '@/store';

import App from './App.vue';

const app = createApp(App);

directives.forEach(directive => {
    app.directive(directive.name, directive)
});

components.forEach(component => {
    app.component(component.name, component)
});

app
.use(store)
.use(router)
.mount('#app')

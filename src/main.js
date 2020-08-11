import Vue from 'vue';

import router from './router';
import store from './store';
import {
	i18n,
	vuetify,
} from './plugins';
// import './registerServiceWorker';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	i18n,
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#root');

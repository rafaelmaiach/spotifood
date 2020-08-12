import Vue from 'vue';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

import router from './router';
import store from './store';
import {
	i18n,
	vuetify,
} from './plugins';
// import './registerServiceWorker';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.component('DateTimePicker', VueCtkDateTimePicker);

new Vue({
	i18n,
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#root');

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue.
 */

// require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('app-navbar', require('./components/AppNavbar.vue').default);
Vue.component('button-mail', require('./components/ButtonMail.vue').default);
Vue.component('button-filter', require('./components/ButtonFilter.vue').default);
Vue.component('card-basic', require('./components/CardBasic.vue').default);
Vue.component('card-image', require('./components/CardImage.vue').default);
Vue.component('link-scroll', require('./components/LinkScroll.vue').default);
Vue.component('options-dropdown', require('./components/OptionsDropdown.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

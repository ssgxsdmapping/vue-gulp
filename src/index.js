/**
 * Materilize dependences
 */
import materializeCss from '../node_modules/materialize-css/dist/css/materialize.css';
require('../node_modules/materialize-css/dist/js/materialize.js');



/**
 * Vue dependecies
 */
var Vue = require('../node_modules/vue/dist/vue')

window.onload = function(){

    /**
     * Loading vue components
     */
    var Appcomponent = require('./components/XsdComponent.js');

    /**
    var appcomponent = Vue.component('app-component', {
        template: "<div>Un composant personnalisé !</div>",
    });
    **/

    new Vue({
        el: '#app',
        components: Appcomponent
    })

}
  
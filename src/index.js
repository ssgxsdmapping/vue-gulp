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
    var myComp = require('./components/MyComponent.ts');

    new Vue({
        el: '#app',
        component: myComp
    })

}
  
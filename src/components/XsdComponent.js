const Vue = require('../../node_modules/vue/dist/vue')

const htmlTemplate = 
`<form action="#">
    <div class="file-field input-field">
        <div class="btn">
            <span>File</span>
            <input type="file" v-on:change="fileHandle" v-bind:files="files" multiple>
        </div>
        <div class="file-path-wrapper">
            <input class="file-path validate" type="text" placeholder="Upload one or more files">
        </div>
    </div>
</form>`

let component = {
    
        template: htmlTemplate,
        data: function(){
            return {
                test: '',
                files: null
            }
        },
        methods: {
            fileHandle: function(fileEvent){
                let fileList = fileEvent.target.files;
                this.files = fileList;
    
                const LOGGER = require('../util/Logger.js');
                LOGGER.logFileEvent(fileEvent);
            }
        }
    }

module.export = Vue.component("Appcomponent", component)

module.exports.component = component;
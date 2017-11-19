import {ComponentOptions} from 'vue';
import { Vue } from 'vue/types/vue';
import FileEventTarget from '../interfaces/FileEventTarget';

let componentParam: ComponentOptions<Vue>;

const htmlTemplate:string = 
    `<form action="#">
        <div class="file-field input-field">
            <div class="btn">
                <span>File</span>
                <input type="file" v-on:change="fileHandle" v-bind:files="files" multiple>
            </div>
            <div class="file-path-wrapper">
                <input class="file-path validate" type="text" placeholder="Upload one or more files">
                {{test}}
                {{files}}
            </div>
        </div>
    </form>`

componentParam = {
    template : htmlTemplate,
    data: function(){
        return {
            test: '',
            files: null
        };
    },
    methods: {
        fileHandle: function(event:Event):void{
            let fileList: FileList = (event.target as FileEventTarget).files;
            this.$data.files = fileList;
            console.log(this.$data.files)
        }
    }
}

export default componentParam
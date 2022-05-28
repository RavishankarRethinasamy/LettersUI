<template>


    <div>
        <QuillEditor 
                ref="leditor"
                style="min-height: 150px"
                theme="snow"
                :toolbar="this.toolbar_options"
                :modules="modules"
            />
        <button 
            type="button" 
            class="btn btn-primary btn-sm float-start mx-2 my-2"
            @click.prevent ="handleData"
        > Post
         </button>
    </div>



</template>




<script>

import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'

 

const modules = [{
     name: 'blotFormatter',  
     module: BlotFormatter, 
}]

export default{
    name: "Editor",
    data(){
        return{
            modules: modules,
            toolbar_options: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['code-block'],
                    [ 'link', 'image', 'formula' ],
                    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],                         // text direction
                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }]
            ]
        }
    },
    components: {
        QuillEditor
    },
    methods:{ 
        async handleData(){
            this.$emit('onPost', this.$refs.leditor.getContents().ops)
        },
    }
}



</script>

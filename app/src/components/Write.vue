<template>
<div>
    <Header />
    <div class="container" style="margin-top: 100px">
        <div v-if="isUserLogged" class="row">
            <div class="col-8">
                <div id="userHelp" class="text-dark">

                <p class="fs-2">Have a story to tell or a question to be raised ?</p> 
                Hit anything about fashion, product reviews, cinema, lifestyle, parenting, political, technology, AI, news,
                literature etc...
            </div>

            <form class="my-4">

                <div class="form-check form-check-inline">
                <input 
                    class="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions"
                    id="inlineRadio1" 
                    v-model="checkType"
                    value="story" />
                <label class="form-check-label" for="inlineRadio1">Story</label>
                </div>

                <div 
                    class="form-check form-check-inline">
                    <input class="form-check-input" 
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    v-model="checkType"
                    value="question" />
                <label class="form-check-label" for="inlineRadio2">Question</label>
                </div>
                <cite v-if="errShow.checkNull" class="error fs-6">Choose what do you want to write ?</cite>

                
                <div class="form-outline my-3 border">
                    <input 
                        type="text"
                        id="blogName"
                        class="form-control"
                        autocomplete="off"
                        @click.prevent ="errShow.nameNull = false"
                        v-model="name" />
                    <label class="form-label active" for="blogName">Name</label>
                </div>
                <cite v-if="errShow.nameNull" class="error fs-6">Name should not be empty </cite>

                 <Editor @onPost="handleWrite" />
                 <cite v-if="errShow.contentNull" class="error fs-6">Write something...</cite>
                 <div v-if="spinner" class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>                 
            </form>
            </div>
        </div>
        <div v-if="!isUserLogged">
            <cite class="text-muted fs-5">Became a member of the community by sign in to write here. To keep track of your writings and support monetization in the future
                , a member account is required.
            </cite>
        </div>

        <div style="height: 500px"></div>
    </div>
    <Footer />
</div>
</template>



<script>

import axios from 'axios';
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import Editor from "../components/Editor.vue"
import { urls } from '../helper'


export default{
    name: "Write",
    components: {
        Header,
        Footer,
        Editor
    },
    data(){
        return{
            name: "",
            spinner: 0,
            checkType: "",
            errShow: {
                checkNull: false,
                nameNull: false,
                contentNull: false
            }
        }
    },
    methods: {
        async handleWrite(value){
            try{
                if(!this.checkType){
                    this.errShow.checkNull = true
                    return
                }
                else if(!this.name){
                    this.errShow.nameNull = true
                    return
                }
                else if (value.length == 1){
                    let content = value[0].insert.replaceAll("\n", "")
                    if(!content){
                        this.errShow.contentNull = true
                        return
                    }
                }
                this.spinner = 1
                let uploadUrl = urls().CORE_BASE + urls().CORE_APP + urls().CREATE
                const response = await axios.post(uploadUrl, {
                                "name": this.name,
                                "type": this.checkType,
                                "content": value
                                })
                if ( response.data.status === "success"){
                    this.spinner = 0
                    this.$router.push(`/${ response.data.blog_id}`).then(res => this.$router.go())
                }
            }catch(err){
                alert(err)
            }
        },
    },
    computed: {
        isUserLogged(){
            return this.$store.getters.stateValue.user
        }
    }
}

</script>


<style>

</style>
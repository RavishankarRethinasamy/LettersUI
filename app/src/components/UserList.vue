<template>
    <div>
        <Header />
        <div class="container" style="margin-top: 100px">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <div class="card border">
                            <div class="card-body">
                                <button type="button" class="btn btn-danger" @click.prevent ="handleDeleteMe">Delete Me</button>
                                <div id="userHelp" class="text-dark">
                                    <ol class="my-2">
                                        <li>
                                            Monetization details for writing the letters and the consumers
                                            pays wil    l be released in the version (v2.0) TBD
                                        </li>
                                        
                                        <li>
                                            Stay writing and answering questions
                                        </li>

                                        <li>
                                            Get atleast 1000 pays overall from all letters. It will be easy to be monetized 
                                            when the complete support released.
                                        </li>

                                        <li>
                                            Each letter analytics regarding the pays, generated money will be given
                                        </li>

                                        <li>
                                            V2.0 needs critical analysis since it will be monetized version to implement that we are doing in this version
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                            <h4 class="my-4">My Letters</h4>
                            
                            <div v-for="con in contents" :key="con.blog_id">
                                <div class="card border">
                                    <div class="card-body">
                                        <a class="card-title text-dark fs-6" style="width: 60%" @click="readLetter(con.blog_id)" href="">{{ con.display_name }}</a>
                                        <a href=""  class="float-end mx-3 text-muted" @click.prevent ="handleDelete(con.blog_id)"><i class="fas fa-trash"></i></a>
                                        <p class="card-text text-muted my-3" style="width: 60%">{{ con.description }}</p>
                                    </div>
                                </div>
                            </div>

                            <div v-if="errShow.noContent" id="userHelp" class="text-dark fs-6" >
                                No personal letters available. Want to raise a question or write a story
                                <p><a href="/write" class="btn btn-primary">Write</a></p>
                            </div>
                    </div>
                </div>
                <div style="height: 300px"></div>
        </div>
         <Footer />
    </div>
</template>


<script>

import axios from 'axios'
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import { urls } from '../helper'

export default {
    name: 'List',
    components: {
        Header,
        Footer
    },
    data(){
        return {
            contents : [],
            page: 1,
            next_value: false,
            previous_value: false,
            errShow: {
                noContent: false
            }
        }
    },
   

    async beforeMount()
    {
    let listBlogsUrl = urls().CORE_BASE + urls().CORE_APP + urls().LIST
    const response = await axios.get(listBlogsUrl)
    if (response.data.data.length > 0){
        this.contents = response.data.data
    }
    else{
        this.errShow.noContent = true
    }
    },

    methods: {
        readLetter(blog_id){
            this.$router.push(`/view/${blog_id}`)
        },
        async handleDeleteMe(){
            if (confirm("Are you sure want to delete you here? You can continue as a guest. Create a new user to write letters")) {
                let deleteUrl = urls().VIM_BASE + urls().VIM_APP + urls().DELETE
                const response = await axios.delete(deleteUrl)
                this.$store.dispatch('changeUserState', null);
            }
        },
        async handleDelete(blog_id){
            if (confirm("Are you sure ? You can upload a new one if you want to.")) {
                let deleteUrl = urls().CORE_BASE + urls().CORE_APP + urls().DELETE
                const response = await axios.delete(deleteUrl, {
                data:   {
                blog_id : blog_id
                    }
                })
                this.$router.go(this.$router.currentRoute)
            }
        }
    },
}
</script>

<style>

</style>
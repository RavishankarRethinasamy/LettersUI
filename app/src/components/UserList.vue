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
                                            Monetization details for writing the letters will be released in the upcoming version (v2.0) Release date: TBD
                                        </li>

                                        <li>
                                            Get atleast 25 pays for each letters. There will be minumum required pays
                                            for an letter to be eligible for monetization. Be good at the quality of the content.
                                        </li>

                                        <li>
                                            Each letter analytics regarding the pays, generated money will be given
                                        </li>

                                        <li>
                                            What If I don't get pays ? Still, You will be getting money based on the views. Again detail in v2.0
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

                    <!-- Modal -->
                    <div class="modal fade" id="ConfirmModal" tabindex="-1" aria-labelledby="ConfirmModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-body">
                            {{ modalMessage }}
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-danger" data-mdb-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary" @click.prevent ="deleteAccount">Yes</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- ErrorModal -->
                    <div class="modal fade" 
                        id="ErrorModal" 
                        tabindex="-1" 
                        aria-labelledby="ErrorModal" 
                        aria-hidden="true"
                        style="width: 100%"
                        >
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-body">
                            {{ modalMessage }}
                        </div>
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
            modalMessage: "",
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
        handleDeleteMe(){
            this.modalMessage = "Are you sure to delete the account ? This action will permanently delete all the records related to you."
            let myModal = new mdb.Modal(document.getElementById('ConfirmModal'))
            myModal.show();
        },
        async deleteAccount(){
            let deleteUserUrl = urls().VIM_BASE + urls().VIM_APP + urls().DELETE
            const userDeleteResponse = await axios.delete(deleteUserUrl)
            let deleteLUrl = urls().CORE_BASE + urls().CORE_APP + urls().DELETE
            const lettersDeleteResponse = await axios.delete(deleteLUrl)
            this.$store.dispatch('changeUserState', null);
            this.$router.push('/').then(res => this.$router.go())
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
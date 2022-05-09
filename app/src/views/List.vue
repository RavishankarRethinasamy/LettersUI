<template>
    <div>
        <Header />
        <div class="container" style="margin-top: 100px">
            <div    v-if="showBanner"
                    id="intro"
                    class="container bg-image"
                    style="
                            background-image: url(https://mdbcdn.b-cdn.net/img/new/fluid/city/113.jpg);
                            height: 80vh;
                            "
                    >
                <div class="mask text-white" style="background-color: rgba(0, 0, 0, 0.8)">
                    <div class="container d-flex align-items-center text-start h-100">
                    <div>
                        <h1 class="mb-5">Share Letters</h1>
                        <p>
                        Pay for what you get and let others pay you. Time is the currency here. Most valuable asset
                        anyone can have. Let it flow.
                        </p>
                        
                        
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                        <div v-for="con in contents.data" :key="con.blog_id">
                            <div class="card border-0">
                                <div class="card-body">
                                    <a class="card-title text-dark fs-5"
                                    @click="readLetter(con.blog_id)" href="">{{ con.display_name }}
                                    </a>
                                    <figure>
                                        <figcaption class="blockquote-footer my-3">  
                                            <cite>
                                                <span>
                                                    <span v-if="con.type == 'story'">posted by</span>
                                                    <span v-if="con.type == 'question'">raised by</span>
                                                    <span class="mx-1 fs-6">{{ con.created_by  }} </span>
                                                    at <span class="mx-1">{{ con.created_at }}</span>
                                                </span>
                                                <span class="mx-2" style="color: blue">
                                                    {{ con.pays }} pays
                                                </span>
                                                </cite>
                                        </figcaption>
                                    </figure>

                                </div>
                            </div>
                        </div>


                         <div v-if="Err.noContent" id="userHelp" class="text-dark fs-4" style="margin-top: 10px">
                            No contents available with the searched words. Want to raise a question or write a story
                            <p><a href="/write" class="btn btn-primary">Write</a></p>
                        </div>
                </div>
                <div class="col-5">
                </div>
            </div>
            
        </div>
         <div style="height: 300px"></div>
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
            showBanner: false,
            Err : {
                noContent: ""
            }
        }
    },

    async beforeMount()
    {
    let listBlogsUrl = urls().CORE_BASE + urls().CORE_APP + urls().GLOBAL_LIST
    if ("searchValue" in this.$route.params){
        listBlogsUrl += `?search=${this.$route.params.searchValue}`
    }
    if ("pageValue" in this.$route.params){
        listBlogsUrl += `?page=${this.$route.params.pageValue}`
    }
    const response = await axios.get(listBlogsUrl)
    if (response.data.data.length > 0){
        this.contents = response.data
    }
    else{
        this.Err.noContent = 1
    }
    // let path = this.$router.currentRoute._value.path
    // if (path == "/"){
    //     this.showBanner = true
    // }
    // else{
    //     this.showBanner = false
    // }
    },
    methods: {
        readLetter(blog_id){
            this.$router.push(`/view/${blog_id}`)
        }
    }
}
</script>

<style>

.img-fluid{
    width: 100%;
}

</style>
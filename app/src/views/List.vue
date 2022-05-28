<template>
  <div>
    <Header />
    <div class="container" style="margin-top: 100px">
      <div
        v-if="showBanner"
        id="intro"
        class="container bg-image"
        style="
          background-image: url(https://mdbcdn.b-cdn.net/img/new/fluid/city/113.jpg);
          height: 80vh;
        "
      >
        <div
          class="mask text-white"
          style="background-color: rgba(0, 0, 0, 0.8)"
        >
          <div class="container d-flex align-items-center text-start h-100">
            <div>
              <h1 class="mb-5">Share Letters</h1>
              <p>
                Pay for what you get and let others pay you. Time is the
                currency here. Most valuable asset anyone can have. Let it flow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
            <div v-if="loadSpinner" class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
          <div v-for="con in contents.data" :key="con.blog_id">
            <div class="card border-0">
              <div class="card-body">
                <a
                  class="card-title text-dark fs-5"
                  @click="readLetter(con.blog_id)"
                  href=""
                  >{{ con.display_name }}
                </a>
                <p class="fs-8 text-muted"> {{ con.description }} </p>
                <figure>
                  <figcaption class="blockquote-footer my-3">
                    <cite>
                      <span>
                        <span v-if="con.type == 'story'">posted by</span>
                        <span v-if="con.type == 'question'">raised by</span>
                        <span class="mx-1 fs-6">{{ con.created_by  }} </span>
                        at <span class="mx-1">{{ con.created_at }}</span>
                      </span>
                      <span v-if="con.type == 'story'" class="mx-2" style="color: black">
                        {{ con.pays }} pays
                      </span>
                      <span v-if="con.type == 'story'" style="color: black">
                          {{ con.metadata.ettr }}
                      </span>
                      <a v-if="con.type == 'question'" 
                        class="mx-2"    
                        @click="readLetter(con.blog_id)"
                        href="#"
                        style="color: black">
                        write answer
                      </a>

                    </cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
           <pagination v-model="page" :records="contents.total" :per-page="10" @paginate="handlePaginate"/>
          <div
            v-if="Err.noContent"
            id="userHelp"
            class="text-dark fs-4"
            style="margin-top: 10px"
          >
            No Letters available. Wanna write some...
            <p><a href="/write" class="btn btn-primary">Write</a></p>
          </div>
        </div>
        <div class="col-5"></div>
      </div>
    </div>
    <div style="height: 400px"></div>
    <Footer />
  </div>
</template>

<script>

import axios from 'axios'
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import Pagination from 'v-pagination-3';
import { urls } from '../helper'


export default {
    name: 'List',
    components: {
        Header,
        Footer,
        Pagination
    },
    data(){
        return {
            contents : [],
            showBanner: false,
            page:  parseInt(this.$route.params.page) || 1,
            loadSpinner: true,
            Err : {
                noContent: ""
            }
        }
    },

    async beforeCreate()
    {
        try{
            let listBlogsUrl = urls().CORE_BASE + urls().CORE_APP + urls().GLOBAL_LIST
        if ("searchValue" in this.$route.params){
            listBlogsUrl += `?search=${this.$route.params.searchValue}`
        }
        else if ("page" in this.$route.params){
            listBlogsUrl += `?page=${this.$route.params.page}`
        }
        const response = await axios.get(listBlogsUrl)
        if (response.data.data.length > 0){
            this.contents = response.data
        }
        else{
            this.Err.noContent = 1
        }
        this.loadSpinner = false
        }
        catch(e){}
    },
    methods: {
        readLetter(blog_id){
            this.$router.push(`/${blog_id}`)
        },
        handlePaginate(e){
            this.$router.push(`/p/${e}`).then(res => this.$router.go())
        },
    },
}
</script>

<style>

</style>

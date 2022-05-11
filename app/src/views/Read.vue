<template>
  <div>
    <Header />

    <div class="container" style="margin-top: 100px">
      <div class="row">
        <div class="col-8">
          <div class="text-dark fs-2">{{ contents.display_name }}</div>
          <div class="loader" v-html="JsonToHtml(contents.data)"></div>

          <figure>
            <figcaption class="blockquote-footer my-3">
              <cite>
                <span>
                  <span v-if="contents.type == 'story'">posted by</span>
                  <span v-if="contents.type == 'question'">raised by</span>
                  <span class="mx-1 fs-6">{{ contents.created_by  }} </span>
                  at <span class="mx-1">{{ contents.created_at }}</span>
                </span>
              </cite>
            </figcaption>
          </figure>

          <div v-if="contents.type == 'story'" class="lrctrls">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click.prevent="handlePay"
            >
              pay
            </button>
            <span class="mx-2">{{ contents.updates.pays }}</span>
            <div id="userHelp" class="form-text">
              By watching an Ad video, you are paying the user for this content.
              If you found this content worth, do pay and feel good that you
              paid. You can pay any number of times if you found the user
              deserve to be paid for the content.
            </div>
          </div>

          <h4 class="my-3 fs-4 text-muted">Your view</h4>
          <Editor @onPost="handleComment" />
          <cite v-if="errShow.contentNull" class="error fs-6"
            >Write something...</cite
          >

          <div
            style="margin-top: 80px"
            v-for="comment in contents.updates.comments"
            :key="comment.id"
          >
            <figure>
              <blockquote class="blockquote">
                <div v-html="JsonToHtml(comment.data)"></div>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite
                  >by <span class="mx-1">{{  comment.user }}</span> at
                  <span class="mx-1">{{ comment.created_at }}</span>
                </cite>
                <cite>
                  <a
                    v-if="contents.type !== 'story'"
                    href=""
                    style="color: blue"
                    >pay</a
                  >
                </cite>
              </figcaption>
            </figure>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import axios from 'axios'
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import Editor from "../components/Editor.vue"
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
import { urls } from '../helper'

export default {
    name: "Read",
    components: {
        Header,
        Footer,
        Editor

    },
    data(){
        return{
            contents: [],
            commentValue: "",
            pays: 0,
            errShow: {
                contentNull: false
            }
        }
    },
    beforeMount(){
        let readBlogUrl = urls().CORE_BASE + urls().CORE_APP + urls().GLOBAL_READ
        + "?blog_id=" + this.$route.params.id
        axios.get(readBlogUrl).then(response => (this.contents = response.data))
    },
    methods: {
        JsonToHtml(data){
            let cfg = {};
            let converter = new QuillDeltaToHtmlConverter(data, cfg);
            return converter.convert();
        },
        viewUrl(blogId){
            return "/view/" + blogId
        },
        async handlePay(){
            const response = await axios.put(urls().CORE_BASE + urls().CORE_APP + urls().GLOBAL_UPDATE,
            {
                "blog_id": this.$route.params.id,
                "type": "pay"
            })
            this.$router.go(this.$router.currentRoute)
        },
        async handleComment(value){
            if (value.length == 1){
                    let content = value[0].insert.replace("\n", "")
                    if(!content){
                        this.errShow.contentNull = true
                        return
                    }
                }
            let updateBlogUrl = urls().CORE_BASE + urls().CORE_APP
            if (this.$store.getters.stateValue.user){
                updateBlogUrl += urls().UPDATE
            }
            else{
                updateBlogUrl += urls().GLOBAL_UPDATE
            }
            let updateReq = {
                "blog_id": this.$route.params.id,
                "comment": value,
                "type": "comment"
            }
            const response = await axios.put(updateBlogUrl, updateReq)
            if (response.data.status == "success"){
                this.$router.go(this.$router.currentRoute)
            }
        }
    },
}
</script>

<style>
pre {
  background-color: rgb(93, 88, 133);
  color: white;
}

.ql-align-right {
  text-align: right;
}

.ql-align-center {
  text-align: center;
}
</style>

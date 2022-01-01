<template>
    <!-- <p>{{ contents }}</p> -->
    <div>
        <div><Header /></div>
        <div class="read-container">
            <section class="side-menu-container">
                
            </section>
            <section class="blog-container">
                <h5>{{ contents.display_name }}</h5>
                <div v-for="(con, index) in contents.data" :key="index">
                    <pre>{{ con.value }}</pre>
                </div>
                <!-- <br> -->
                <div class="user-touch-div">
                    <input type="button" value="Like" @click.prevent="updateLikes()"><span>{{ contents.updated.likes }}</span>
                    <input type="button" value="Dislike" @click.prevent="updateDislikes()"><span>{{ contents.updated.dislikes }}</span>
                </div>
                <div class="user-comment-div">
                    <div>
                        <h2>Add comment..</h2>
                        <textarea type="text" class="comment" placeholder="Write a comment" v-model="commentValue"></textarea>
                        <button @click.prevent="updateComment()" type="submit">post</button>
                    </div>
                    <h2>Shared comments..</h2>
                    <div class="view-comment" v-for="(comment, index) in contents.updated.comments" :key="index">
                        <p>{{ comment }}</p>
                    </div>
                </div>
            </section>
            <section class="blog-ref-container">
                <div class="blog-letst-content">
                    <p> Latest Contents </p>
                    <div v-for="lcon in contents.latest_contents" :key="lcon.blog_id">
                        <a :href="viewUrl(lcon.blog_id)">{{ lcon.display_name  }}</a>
                    </div>
                </div>
                <!-- <div class="blog-popular-content">
                    <p>Popular contents</p>
                    <div v-for="pcon in contents.popular_contents" :key="pcon.blog_id">
                    <a :href="viewUrl(pcon.blog_id)">{{ pcon.display_name  }}</a>
                    </div>
                </div> -->
            </section>
        </div>
       
    </div>    
</template>

<script>

import axios from 'axios'
import Header from "../components/header.vue"

export default {
    name: "Read",
    components: {
        Header
    },
    data(){
        return{
            contents: [],
            commentValue: ""
        }
    },
    beforeMount(){
        let readBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_READ_URL
        let viewUrl = readBlogUrl + "?blog_id=" + this.$route.params.id
        console.log("Before Mount")
        axios.get(viewUrl).then(response => (this.contents = response.data))
        console.log(this.contents)
    },
    methods: {
        viewUrl(blogId){
            return "/view/" + blogId
        },
        updateComment(){
            let updateBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_UPDATE_URL
            let updateReq = {
                "blog_id": this.$route.params.id,
                "comment": this.commentValue,
                "type": "comment"
            }
            axios.put(updateBlogUrl, updateReq).then(response => (this.$router.go(this.$router.currentRoute)))
        },
        updateLikes(){
            let updateBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_UPDATE_URL
            let updateReq = {
                "blog_id": this.$route.params.id,
                "type": "like"
            }
            axios.put(updateBlogUrl, updateReq).then(response => (this.$router.go(this.$router.currentRoute)))
        },
        updateDislikes(){
            let updateBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_UPDATE_URL
            let updateReq = {
                "blog_id": this.$route.params.id,
                "type": "dislike"
            }
            axios.put(updateBlogUrl, updateReq).then(response => (this.$router.go(this.$router.currentRoute)))
        }
    }
}
</script>

<style>

</style>
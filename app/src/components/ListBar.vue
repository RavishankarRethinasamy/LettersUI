<template>
    <div class="list-bar"> 
        <div> 
            <a :href="viewUrl">{{ name }}</a> 
            <!-- <span class="like-post">Liked {{ likes }}</span> -->
            <!-- <span class="dislike-post">Disliked {{ dislikes }}</span> -->
        </div>
        <div>{{ description  }}</div>  
        <br>
        <br>    
    </div>
</template>


<script>

export default {
    name: "ListBar",
    props: ["name", "description", "likes", "dislikes", "blog_id"],
    data(){
        return {
         viewUrl: "/view/" + this.blog_id
        }
    },
    methods: {}
}
</script>

<style>

</style>
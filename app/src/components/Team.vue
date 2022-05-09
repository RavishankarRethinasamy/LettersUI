<template>

<div>
    <Header />

        <div class="container" style="margin-top: 10%">
            <h1>Founder details</h1>
        </div>
        <div style="height: 400px"></div>
    <Footer />
</div>

</template>
    


<script>

import Header from "../components/header.vue"
import Footer from "../components/footer.vue"

export default {
    name: "Team",
    components: {
        Header,
        Footer
    }
}

</script>

<style>

</style>
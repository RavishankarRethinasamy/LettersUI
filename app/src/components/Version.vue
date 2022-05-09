<template>
    <div>

        <Header />

        <div class="container" style="margin-top: 100px">
            <div style="width: 60%">
                <p class="fs-4">Features:</p>
                <ol class="fs-5">
                    <li>
                        Hi
                    </li>
                </ol>
            </div>
        </div>
        <Footer />

    </div>
</template>



<script>

import Header from "../components/header.vue"
import Footer from "../components/footer.vue"

export default{
    name: "Version",
    components: {
        Header,
        Footer
    }
}

</script>



<style>

</style>
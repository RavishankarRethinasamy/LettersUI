<template>
<div>
    <Header />
    <div class="container" style="margin-top: 8%">
        
        <div id="wisl">
            <h5>What is letters ?</h5>
            <ul>
                <li>
                    Letters is a yet another content sharing platform where people can write stories and asking questions
                    about anything and everything from A to Z following the <a href="/terms">Terms of service</a> and 
                    <a href="/privacy">privacy policy</a>.
                </li>
            </ul>
        </div>

        <div id="hiwks">
            <h5>How it works ?</h5>
            <ul>
                <li>
                    People who write stories or write answers will get the pay option so that the readers and questioners to pay them. Based on the number of pays, the 
                            revenue generated from ads will be shared to the respective writer.
                </li>
            </ul>
        </div>


        <div id="mbr">
            <h5>Do we need to create a account ?</h5>
            <ul>
                Yes. A member account is required to write stories and questions.
            </ul>
        </div>

        <div id="pay">
            <h5>What is a Pay option ?</h5>
            <ul>
                <li>
                    Pay is alternative to like where user click to enable the payment to the writers and answer providers.
                </li>
                <li>
                    Pays enables the user content to be monetized. If the pays increases, the share value increases. It 
                    starts from 70% when the pays reaches the threshold and it could reach upto 98%.
                    Detailed analysis of variable shares will be released in v2.0.
                </li>
                <li>
                    Do we need to sign in to pay ? Yes. To avoid mulitple pays from guest user, sign in required.
                </li>
            </ul>
        </div>

        <div id="v1.2">
            <h5>What will be the upcoming version ?</h5>
                <ul>
                    V1.2 will be the upcoming version and the support included
                    <ol>
                        <li>
                            Account creation through Google.
                        </li>
                        <li>
                            Detailed my profile and enhanced writing options.
                        </li>
                        <li>
                            More detailed analysis on ads and pays of user's letters
                        </li>
                    </ol>
                </ul>
        </div>

        <div id="v2.0">
            <h5>what will be the monetized version ?</h5>
            <ul>
                <li>
                    V2.0 will be the major and the complete monetized version. Release date yet to be decided.
                </li>
            </ul>
        </div>


    </div>
    <div style="height: 100px"></div>
    <Footer />
</div>
    
</template>



<script>
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"

export default{
    name: "Details",
    components: {
        Header,
        Footer
    }
}


</script>

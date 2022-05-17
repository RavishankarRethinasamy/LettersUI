<template>
<div>
    <Header />
    <div class="container" style="margin-top: 8%">
        
        <div id="wisl">
            <h5>What is letters ?</h5>
            <ul>
                <li>
                    Letters is a yet another content sharing platform where people can write stories and asking questions
                    about anything and everything from A to Z..Strictly follow the <a href="#">Terms of service</a>.
                </li>
            </ul>
        </div>

        <div id="hiwks">
            <h5>How it works ?</h5>
            <ul>
                <li>
                    People who write stories or write answers will get
                    <ol>
                        <li>
                            the base share of 70% from the revenue generated through ads.
                        </li>
                        <li>
                             If people pays to you, based on the amount of pays the base share value will increase and it could 
                             reach the max share of 98%.
                        </li>
                    </ol>
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
                    Pay is alternative to like where user click to increase the payment of the writers and answer providers.
                </li>
                <li>
                    Base share of 70% will be given based on the views. If the pays increases, the share value will increase.
                    Detailed analysis of variable shares will be released in v2.0.
                </li>
                <li>
                    Do we need to sign in to pay ? Yes. To avoid mulitple pays from same account, sign in required.
                </li>
            </ul>
        </div>

        <div id="v1.2">
            <h5>What is the upcoming version ?</h5>
                <ul>
                    V1.2 will be the upcoming version and the support included
                    <ol>
                        <li>
                            Account creation through Google, Facebook, Twitter, LinkedIn and Github.
                        </li>
                        <li>
                            Detailed my profile and other options.
                        </li>
                        <li>
                            More detailed analysis on ads and pays of user's letters
                        </li>
                    </ol>
                </ul>
        </div>

        <div id="v2.0">
            <h5>what is the monetized version ?</h5>
            <ul>
                <li>
                    V2.0 will be the major and the complete monetized version. It will be released after v1.2. 
                    More details will be updated regarding pays, shares and payments. Withdraw money support also will
                    be included.
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

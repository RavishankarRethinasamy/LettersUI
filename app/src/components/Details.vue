<template>
<div>
    <Header />
    <div class="container" style="margin-top: 8%">
        
        <div id="wisl">
            <h5>What is letters ?</h5>
            <ul>
                <li>
                    Letters is a yet another content sharing platform where people can write stories and asking questions
                    about anything and everything from techinical to non techinical, from parenting to politics, from cinema
                    to sports, from A to Z..
                </li>
            </ul>
        </div>

        <div id="hiwks">
            <h5>How it works ?</h5>
            <ul>
                <li>
                    People who write stories will get
                    <ol>
                        <li>
                            Google Ads be placed
                        </li>
                        <li>
                             A pay option to let the readers pay the writer.   
                        </li>
                    </ol>
                </li>
                <li>
                    People who raise questions don't get pay option but
                    <ol>
                        <li>
                            Those who answer the questions will get the option instead. So that quesioner can pay or the others
                            who wants to.
                        </li>
                    </ol>
                </li>
            </ul>
        </div>


        <div id="mbr">
            <h5>Do we need to create a account ?</h5>
            <ul>
                Yes. A member account is required to write stories and questions. And also you can read and pay as a guest.
                And answer the question as a member not as a guest or you will end up losing the pays.
            </ul>
        </div>

        <div id="pay">
            <h5>What is a Pay option ?</h5>
            <ul>
                <li>
                    On clicking the pay option, a google recaptcha will be shown to avoid bots. After that, 
                    direct video ad will be requested to google and played.
                </li>
                <li>
                    Ad at the hands of user request. We believe that the story or answers
                    deserve to be paid will get paid.
                </li>
                <li>
                    Also the reader or questioner will get the satisfaction of paying.
                </li>
                <li>
                    Payment through time.
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
                    More details will be updated regarding payments.
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

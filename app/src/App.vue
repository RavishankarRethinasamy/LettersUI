<template>
  <div>
    <router-view />
  </div>
</template>


<script>
import axios from 'axios'
import { urls } from '../src/helper'

export default {

  name: "App",
  async beforeCreate(){
        try{
            let getLoggedUserUrl = urls().VIM_BASE + urls().VIM_APP + urls().GET
            const response = await axios.get(getLoggedUserUrl);
            if ( response.data.status == "error" ){
                return
            }
            else{
                this.$store.dispatch('changeUserState', response.data);
            }
        }catch(e){}
    },
}

</script>

<style>
@import './main.css';
</style>
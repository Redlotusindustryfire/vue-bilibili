<template>
  <div id="app">
    <div class="nav">
      <input @click="search()" type="text" placeholder="点击搜索">
      <div @click="goToLogin()" class="login"><img></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Begin',
  data(){
    return{

    }
  },
  methods:{
    search(){
      if(location.pathname!='/search'){
          this.$router.push({path:'/search'});
      }
      else{
        
      }
    },
    goToLogin(){
      this.$router.push({path:'/login'});
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y:auto;
}
.nav{
  width: 100%;
  height: 5vh;
  display: inline-flex;
}
.nav input{
  font-size: 2vh;
  margin:1vh 0 1vh 20vw;
}
.login{
  width:3vh;
  height: 3vh; 
  margin:1vh 0 0 10vw;
  border-radius: 50%;
}
.login img{
   width:3vh;
  height: 3vh; 
  border-radius: 50%;
}

</style>
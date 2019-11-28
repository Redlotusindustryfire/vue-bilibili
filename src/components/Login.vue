<template>
    <div class="big">
        <navTop></navTop>
        <div class="login">
            <button @click="toLogin()">登录</button>
            <button @click="toRegistered()">注册</button>
        </div>
    </div>
</template>
<script>
import NavTop from './NavTop'
export default {
    name:'Login',
    components:{
        navTop:NavTop
    },
    methods:{
        toLogin(){
            this.$router.push({path:'/denglu'});
        },
        toRegistered(){
            this.$router.push({path:'/registered'});
        }

    }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.big{
     width: 100vw;
     height: 100vh;
     border-radius: 0;
     display: flex;
     flex-wrap: wrap;
     justify-content:center;
}
.login{
    width: 100vw;
    height: 90vh;
    border-radius: 0;
    background: url('/static/images/pic8.png') no-repeat center; 
    background-size: 100% 100%;
}
.login button{
    width:25vw;
    height: 5vh;
    font-size: 3vh;
    margin: 20vh 0 0 15vw;
}

</style>
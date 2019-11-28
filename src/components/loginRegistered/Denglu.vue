<template>
    <div class="big">
        <p class="P">登录页面</p>
        <div class="content">
            <form action="" enctype="" method="">
                    <p class="ltP center">账号：</p>
                    <p class="rtP center">
                        <input type="text" required>
                    </p>
                    <p class="ltP center">密码：</p>
                    <p class="rtP center">
                        <input type="password" required>
                    </p>
    
                <div class="btn">
                    <button type="submit">登录</button>
                    <button @click="back()" >取消</button>
                </div>
            </form>
        </div>
        <div class="last">

        </div>
    </div>
</template>
<script>
export default {
    name:'Denglu',
    data(){
        return{

        }
    },
    methods:{
        back(){
            this.$router.go(-1);
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
    display: flex;
    flex-wrap: wrap;
    justify-content:left;
}
.last{
    width: 100vw;
    height:40vh;
}
.big p.P{
    width: 100vw;
    height: 10vh;
    font-size: 4vh;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center; 
}
.content{
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
.content form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.center{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.center input{
    padding: 4vw;
}
.ltP{
    width: 30vw;
    padding: 5vw;
}
.rtP{
    width: 60vw;
}

.btn{
    width: 100vw;
    height: 5vh;
    margin-top:3vh;
    display: inline-flex;
    justify-content: space-around;

}
.btn button{
    width: 30vw;
    height: 5vh; 
    font-size: 3vh;
}
</style>
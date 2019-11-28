<template>
    <div class="big">
        <p class="P">注册页面</p>
        <div class="content">
            <form action="" enctype="" method="">
                    <p class="ltP center">手机号：</p>
                    <p class="rtP center" style="width:40vw;">
                        <input type="text" size="10" required>
                    </p>
                    <span class="Sp">获取验证码</span>

                    <p class="ltP center">验证码：</p>
                    <p class="rtP center" style="justify-content:left;align-items: center; ">
                        <input type="text" size="5" required>
                    </p>
                    <p class="ltP center">密码：</p>
                    <p class="rtP center">
                        <input type="password" required>
                    </p>
                    <p class="ltP center">确认密码：</p>
                    <p class="rtP center">
                        <input type="password" required>
                    </p>
    
                <div class="btn">
                    <button type="submit">注册</button>
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
    name:'Registered',
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
    height:20vh;
}
.big p.P{
    width: 100vw;
    height: 10vh;
    font-size:4vh;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center; 
}
.content{
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
.content form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.Sp{
    width:20vw;
    height: 10vh;
    font-size: 2vh; 
    color: red;
    display: inline-flex;
    justify-content: center;
    align-items: center; 

}
.center{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
}
.center input{
    padding: 2vw;
    font-size: 2vh;
}
.ltP{
    width: 30vw;
    padding: 3vw;

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
<template>
    <div class='content'>
        <navTop></navTop>
        <div class="navigation">
            <vScroll :lists='items' :level="level"></vScroll>
            <div @click="slide(true)" class="click_slide">
                下拉
            </div>

            <div  class="slide_div" :style="{height:H+'vh'}">
                <ul>
                        <li>首页</li>
                        <li>动画</li>
                        <li>番剧</li>
                        <li>国创</li>
                        <li>音乐</li>
                        <li>舞蹈</li>
                        <li>科技</li>
                        <li>鬼畜</li>
                </ul>
                <div @click="slide(false)"  class="slide_up">
                    拉起
                </div>
            </div>
        </div>

        <div class="vue_R">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import ScrollNavigation from './public/ScrollNavigation'
import NavTop from './NavTop'
export default {
    name:"First",
    components:{
        vScroll:ScrollNavigation,
        navTop: NavTop

    },
    data(){
        return{
            H:0,
            level:1, //level赋值为1，表示一级导航栏，level不赋值表示2级导航栏
            items:[
               {url:'/shouye',text:'首页'},
               {url:'/donghua',text:'动画'}, 
               {url:'/fanju',text:'番剧'}, 
               {url:'/guochuang',text:'国创'}, 
               {url:'/keji',text:'科技'}, 
               {url:'/music',text:'音乐'}, 
               {url:'/wudao',text:'舞蹈'}, 
               {url:'/guichu',text:'鬼畜'} 
            ]
            
        }
    },
    methods:{
        slide(pd){
            if(pd){
                this.H=20;
            }
            else this.H=0;
        }
    }
}
</script>
<style scoped>

.content{
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.navigation{
    width: 100vw;
     position: relative;
}
 ul li{
    list-style: none;
    margin:0 3vw;
    width: 10vw;
    height: 5vh;
    font-size: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.click_slide{
    width:10vw;
    height: 5vh;
    font-size:2vh;
    position: absolute;
    top:0;
    right:0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.slide_div{
    width: 100%;
    position: absolute;
    left: 0;
    top:0;
    background-color: white;
    overflow: hidden;
    transition: height 1s;
    z-index: 5;
}
.slide_div ul{
    display: flex;
    flex-wrap: wrap;
    display: flex;
    justify-content: center; 
}
.slide_div ul li{
    margin-top:1vw;
    margin-bottom: 1vw;
    font-size: 2vh;
}
.slide_div .slide_up{
    width: 100%;
    height: 5vw;
    display: flex;
    justify-content: center;
    font-size: 2vh;
    
}
</style>
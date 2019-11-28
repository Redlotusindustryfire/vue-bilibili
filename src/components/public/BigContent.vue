<template>
    <div  class="bigDiv">
        <div ref="canzhao" :style="{height:canzhaoH+'px'}" class="canzhao">
            <div ref="scroll" class="scroll" :style="{top:H+'px'}">
                <vScroll :lists="items" ></vScroll>
            </div>
        </div>
        <div  class="DhContent">
            <router-view @scrolling="scrolling($event)"></router-view>
        </div>
    </div>
</template>
<script>
import ScrollNavigation from './ScrollNavigation'
export default {
    name:'BigContent',
    components:{
        vScroll:ScrollNavigation
    },
    props:['items'],
    data(){
        return{
            H:0,
            canzhaoH:'',
            OldCanzhaoH:0
        }
    },
    methods:{
        scrolling(data){
            let Scroll=data;//得到子组件滚动距离
            let Height=this.$refs.scroll.offsetHeight;
            if(Scroll>=5*Height){
                    this.H=-this.$refs.scroll.offsetHeight;//设置二级导航栏的top
                    this.canzhaoH=0;//将二级导航栏的容器的高度设置为0
            }
            else{
                this.H=0;//设置二级导航栏的top为0，即让导航栏回到开始的位置
                this.canzhaoH=this.OldCanzhaoH;//恢复二级导航栏的容器的高度
            }
        }
    },
    created(){//在vue实例创建成功后，载入上次访问的子路由，如果是第一次则指向第一个子路由
        //vue不允许再次push到原路由，在push之前需要先判断是否已经在目标路由
        let j=sessionStorage.getItem("level2");
        let it=this.$props.items;
        
        //当从sessionStorage取到的值大于lists的长度，为了避免错误的发生，将j赋值为0
        //j从0开始取值，j==length时，lists[j]是取不到的，所以判断条件为j>=length
        if(!j||j>=it.length){
            j=0;
        }
       if(location.pathname!=it[j].url){
            this.$router.push({path:it[j].url,query:it[j].data});
        }   
    },
    mounted(){
        this.OldCanzhaoH=this.$refs.canzhao.offsetHeight;
    }
}
</script>
<style scoped>
.bigDiv{
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
.canzhao{
    position: relative;
    width: 100vw;
    height: 7vh;
}
.scroll{
   margin-top:1vh;
   width:100vw;
   height: auto;
   position: absolute;
   top:0;
   left:0;
   transition: top 1s;
}
.Dhcontent{
    width: 100vw;
    display: flex;
    flex-wrap: wrap; 
}
</style>
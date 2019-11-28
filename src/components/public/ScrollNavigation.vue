<template>
    <div class="hide">
        <div class="nav_top">
                <ul v-if="lists[0].data"> <!--通过判断是否存在data属性，生成两种不同的ul-->
                    <li v-for="(list,i) in lists" :key="i" @click="changeActive(i)" 
                        :class="{activeLi:active[i]}">
                        
                        <router-link :to="{path:list.url,query:list.data}">{{list.text}}</router-link>
                    </li>
                </ul>
                <ul v-else>
                    <li  v-for="(list,i) in lists" :key="i" @click="changeActive(i)" 
                        :class="{activeLi:active[i]}">
                        
                        <router-link  :to="{path:list.url}">{{list.text}}</router-link>
                    </li>
                </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'ScrollNavigation',
    props:['lists','level'],
    data(){
        return{
            active:[]
        }
    },
    methods:{
        changeActive(i){
            let Level=this.$props.level;
            if(Level==1){ 
                 //这是一个公共的组件，按照不同的参数生成不同的组件，一级菜单执行此项
                sessionStorage.setItem("level1",i);
                //进入一级菜单后，二级菜单默认指向它的第一个路由
                 sessionStorage.setItem("level2",0);
                
            }
            else{ //二级菜单执行此项
                sessionStorage.setItem("level2",i);
                
            }
            
            this.change();
        
        },
        change(){
            let Level=this.$props.level;
            let i=sessionStorage.getItem("level1");
            let j=sessionStorage.getItem("level2");
            for(let k=0;k<=this.$props.lists.length;k++){
                this.active[k]=false;
            }
            if(!i){
                i=0; //第一次打开页面时赋默认值，因为sessionStorage会随着页面的关闭而被清除
            }
            //当从sessionStorage取到的值大于lists的长度，为了避免错误的发生，将j赋值为0
            //j从0开始取值，j==length时，lists[j]是取不到的，所以判断条件为j>=length
            if(!j||j>=this.lists.length){ 
                j=0;
            }

            if(Level==1){
                this.active.splice(i,1,true); 
            }
            else{
                this.active.splice(j,1,true); 
            }
        }
    },
    created(){
            //页面载入或刷新后都能正确地初始化active数组
            this.change();
        
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
    color: black;
}
.hide{
    height: 5vh;
    overflow: hidden;
}
.nav_top{
    height: 8vh;
    overflow-x:auto;
    overflow-y:hidden;
}
.nav_top ul{
     display:inline-flex;
}
 .nav_top ul li{
    list-style: none;
    margin:0 1vw;
    width: 18vw;
    height: 5vh;
    font-size: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
 .nav_top ul li:last-child{
    margin-right: 10vw;
}

 .nav_top ul li.activeLi a{
    color: red;
    
}
</style>
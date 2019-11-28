<template>
    <div ref="big" class="big" @scroll="lazyToLoadImg()">
        <p>热门推荐</p>
        <vContent :items="ls1" :Indexs="Indexs.slice(0,4)"></vContent>
        <p>最新视频</p>
        <vContent 
            :items="ls2" 
            :Indexs="Indexs"
            @getTops="getChildTops($event)"
        >

        </vContent>
    </div>
</template>
<script>
import Content from '../public/Content'
import switchLoad from './switchLoad'
export default {
    name:'PublicContent',
    components:{
        vContent:Content
    },
    data(){
        return{
            ls1: [],
            ls2:[],
            kind:'',
            category:'',
            Tops:[],   //存储子组件传过来的div的offsetTop
            Indexs:[]   //储存满足判断条件的元素的索引，方便传递给子组件
        }
    },
    methods:{
        
        load(){
            let it=`/${this.kind}/${this.category}`;     
            let id=switchLoad.switchResource(it);
             
                this.$http.get(`http://jsonplaceholder.typicode.com/photos?albumId=${id}`)
                .then(data=>{
                    this.ls1=data.body.slice(0,4);
                    this.ls2=data.body.slice(4,data.body.length);
                },error=>{
                    console.error();
     
                })
        },
        
         getChildTops(data){ //从子组件获取div的offsetTop数组
            this.Tops=data;
            
            },
        lazyToLoadImg(){  //图片懒加载方法
           let DivscrollTop=this.$refs.big.scrollTop;//获取big的滚动条滚动距离
           let DivHeight=this.$refs.big.offsetHeight;//获取big的高度
           this.Tops.forEach((el,i)=> {
               if(el<DivscrollTop+DivHeight){  
    //如果子组件div的offsetTop小于父组件滚动条滚动距离与高度之和，说明是需要加载的位置
                   if(this.Indexs.indexOf(i)<0){ //避免重复添加
                       this.Indexs.push(i);  //将索引添加入Indexs数组，方便之后传递给子组件
                   }
                   
               }
           });

           let ScrollH=this.$refs.big.scrollTop; 
            this.$emit('scrolling',ScrollH);  //向父组件传递滚动消息
        }
    },
    watch:{
        $route:{
            handler(n,o){
                if(n.query.category){
                    this.kind=n.query.kind;
                    this.category=n.query.category;
                }
                this.load();   //调用load加载数据
            }
        }
    },
    created(){//在vue实例创建完成后，接受路由传递过来的数据，再进行axios请求
        this.kind=this.$route.query.kind;
        this.category=this.$route.query.category;  
        this.load();
    },
    updated(){ //由于该方法需要使用到从子组件传来的值，mounted函数无法取到，updated可以取到
        this.lazyToLoadImg();
    }

}
</script>
<style scoped>
.big{
    width: 100vw;
    border-top: 2px solid dimgray;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    overflow-x:hidden;
    overflow-y:auto;
    background-color:gainsboro;
}
.big p{
    width:90vw;
    font-size: 2vh;
    margin:2vh 0 0 5vw;
    font-weight: bold;
    
}

</style>
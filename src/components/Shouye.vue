<template>
    <div class="big" ref="big" @scroll="lazyToLoadImg()">
        <div class="pic">
            <picplay :imgs='imgs'> <!--图片轮播公共组件，在public文件夹下-->
            </picplay>
        </div> 

        <div class="content">
            <contentT 
                :items='lists'
                @getTops="getChildTops($event)" 
                :Indexs="Indexs"
            >
            </contentT>
        </div>
    </div>
</template>
<script>
import Picplay from './public/Picplay.vue'
import Content from './public/Content'
export default {
    name:'Shouye',
    data(){
        return{
            imgs:['/static/images/pic1.jpg',
            '/static/images/pic2.jpg',
            '/static/images/pic3.jpg',
            '/static/images/pic4.jpg',
            '/static/images/pic1.jpg'
            ],
            lists:[],
            Tops:[],   //存储子组件传过来的div的offsetTop
            Indexs:[]   //储存满足判断条件的元素的索引，方便传递给子组件
        }
    },
    components:{
        picplay:Picplay,
        contentT:Content
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(data=>{
            this.lists=data.body;
        },error=>{

        });
    },
    methods:{
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
            
        },
        getChildTops(data){ //从子组件获取div的offsetTop数组
            this.Tops=data;
            
        }
    },
    updated(){ //由于该方法需要使用到从子组件传来的值，mounted函数无法取到，updated可以取到
        this.lazyToLoadImg();
    }
    
}
</script>
<style scoped>
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
.big{
    width:100vw;
    height: 90vh;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
    overflow-x:hidden;
    overflow-y:auto;
}
.pic{
  width: 100vw;
  height: 20vh; 
}

</style>
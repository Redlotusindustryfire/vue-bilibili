<template>
    <div class="bigContent" >

        <router-link 
            v-for="(item,i) in items" 
            :key="i" :to="{path:'/play',query:{videoId:item.id}}"
        >

            <div class="content" ref="content">
                <div class="relative">

                    <img :align="item.thumbnailUrl" ref="img">

                    <div class="absolute">
                        <span>6666{{item.views}}</span>
                        <span>2333{{item.barrages}}</span>
                        <span>7-18{{item.date}}</span>
                    </div>
                </div>

                <p>{{item.title}}</p>
                
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'Content',
    data(){
        return{
            Tops:[]
        }
    },
    props:{
        items:{
            type:Array,
            required:true
        },
        Indexs:{
            type:Array,
            required:true
        }
    },
    methods:{
            
        
    },
    watch:{
        Indexs(n,o){
             n.forEach(it=>{ //从父组件得到需要加载的元素数组，进行图片加载
             
             if(n.length<=4){ //当Indexs数组长度为4时，跳过懒加载，直接进行图片加载
                 for(let i=0;i<4;i++){ 
                    this.$refs.img[i].src=this.$refs.img[i].align;
                 }
             }
             else{
                  this.$refs.img[it].src=this.$refs.img[it].align;
             }
                
            });
        }
    },
    updated(){  //v-for、v-if、v-show是在mounted之后运行的，需要在updated函数中去获取
                //使用了上述指令的dom元素
              
        this.$refs.content.forEach((it,i)=>{
                
                this.Tops[i]=it.offsetTop;
            });
           
        this.$emit('getTops',this.Tops);
    }
}
</script>
<style scoped>
.bigContent{
    width: 100vw;
    margin: 1vh;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
}
.bigContent a{
    text-decoration: none;
    color: black;
    display: flex;
    flex-wrap: wrap;
}
.content{
    width: 45vw;
    height: 20vh;
    margin-top:2vh;
    display: flex;
    flex-wrap: wrap;
    border:1px solid red;
    border-radius: 10%;
    overflow: hidden;
    justify-content:left;
    background:url('/static/images/cannotShow.jpg') no-repeat left top;
    background-size: 100% 60%;
}
.relative{
     width: 45vw;
    height: 15vh;
    position: relative;
}
 .absolute{
    width: 100%;
    height: 2vh;
    display: inline-flex;
    justify-content: space-around;
    position: absolute;
    left: 0;
    bottom: 1vh;
}
.absolute span{
    display: inline-block;
    flex-basis: 30%;
    font-size: 2vh;
    color: white;
}
.content img{
    width: 45vw;
    height: 15vh; 
}
.content p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
    font-size:3vh; 
}

</style>
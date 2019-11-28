<template>
    <div class="big">
        <div class="nav">
            <p @click="changeS(0)" :style="{color:active[0]}">综合排序</p>
            <p @click="changeS(1)" :style="{color:active[1]}">播放多</p>
            <p @click="changeS(2)" :style="{color:active[2]}">新发布</p>
            <p @click="changeS(3)" :style="{color:active[3]}">弹幕多</p>
        </div>
        <div class="contentDiv" @scroll="lazyLoadImg()" ref="contentDiv">
                <div class="error" v-if="isError">
                    抱歉，搜不到您想要的内容
                </div>
                <div @click="playTo(list.id)"
                        class="content" 
                        v-for="(list,i) in lists" 
                        :key="i"
                        ref="content"
                >
                    <!--title：视频名，author:up主，views：播放数量，barrages：弹幕数-->
                    <img ref="img" :align="list.thumbnailUrl" alt="缩略图">
                    <div class="cont">
                        <h3>{{list.title}}</h3>
                        <h4>{{list.albumId}}</h4>
                        <p>{{list.views}}</p>
                        <p>{{list.barrages}}</p>
                    </div>
                </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'Searchresult',
    destroyed(){ //点击返回或取消按钮，退出该组件后，该vue实例自动销毁
        this.$emit('resultDed','');//向父组件传递销毁信息，父组件需要将oldStm赋值为空
    },
    data(){
        return{
            lists:'',
            active:[],
            isError:false
        }
    },
    methods:{  
         //路由向播放页面
        playTo(id){
            this.$router.push({path:'/play',query:{videoId:id}});
        },
        changeS(index){  //更改p标签字体颜色
            this.active.forEach((it,i)=>{
                this.active[i]='black';
            });
            this.active.splice(index,1,'red');
        },
        lazyLoadImg(){   //缩略图懒加载
            let DivHeight=this.$refs.contentDiv.offsetHeight;
            let ScrollTop=this.$refs.contentDiv.scrollTop;
            this.$refs.content.forEach((it,i)=>{
                if(it.offsetTop<DivHeight+ScrollTop){
                    this.$refs.img[i].src=this.$refs.img[i].align;
                }
            });
        }
    },

    created(){
        let cond=this.$route.query.albumId;
        this.$http.get(`http://jsonplaceholder.typicode.com/photos?albumId=${cond}`)
        .then(data=>{
            this.lists=data.body;
             if(data.body.length==0){ //返回的数据为空，将向用户显示提示信息
                 this.isError=true;
            }
        },error=>{
           
            
        });
        //vue实例创建完成后，初始化active数组
        this.active=['red','black','black','black'];
    },
    updated(){
        this.lazyLoadImg();
    }
}
</script>
<style scoped>
.big{
    width:100vw;
    height:90vh;
}
.nav{
    width: 100vw;
    height: 5vh;
    display: inline-flex;
    justify-content: space-around;
}
.nav p{
    flex-basis: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:2vh;
}
.contentDiv{
    width:100vw;
    height:85vh;
    overflow-x:hidden;
    overflow-y:auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: center; 
}
.error{
    width: 100vw;
    height: 20vh;
    margin:2vh auto;
    color:brown;
    font-size:3vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    width: 90vw;
    height: 15vh;
    margin-top:1vh;
    display: flex;
}
.cont{
    width:45vw;
    height: 13vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin-left:3vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.cont p{
    width: 20vw;
    height: 3vh;
    font-size: 2vh;
}
.content img{
    width: 40vw;
    height: 13vh;
    border-radius: 10%;
}
.cont h3{
    width:50vw;
    height: 7vh;
    font-size: 3vh;
    font-weight: normal;
     overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
}
.cont h4{
    width:50vw;
    height:3vh;
    font-size: 2vh;
    font-weight: normal;
}
</style>
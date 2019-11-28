<template>
    <div class="big">
            <div class="nav">
                <navTop></navTop>
            </div>
            <div class="video">
                <div class="videoSize">
                    <video style="width:100%;height:100%;" :poster="list.url" controls>
                        <source type="video/mp4" :src="list.url">
                    </video>
                </div>
            
                <div class="message" @click="slideS()">
                    <h3>{{list.title}}</h3>
                    <h4>专辑号：{{list.albumId}}</h4>
                    <span>视频id：{{list.id}}</span>
                    <span>223{{list.barrages}}弹幕</span>
                    <span>7-18{{list.date}}</span>
                </div>
                <div ref="slideDiv" class="slideDiv" :style="{height:H+'px', transition:T}">
                    {{list.title}}
                </div>
                <div class="caozuo">
                    <p>收藏</p>
                    <p>缓存</p>
                    <p>分享</p>
                    <p>评论{{list.pinlun}}</p>
                </div>
            </div>
            <div class="xiangguan">
                <p class="P">相关推荐</p>
                <vContent :items="items" :Indexs="Indexs"></vContent>
            </div>
    </div>
</template>
<script>
import NavTop from './NavTop'
import Content from './public/Content'
export default {
    name:'Playvideo',
    components:{
        navTop: NavTop,
        vContent:Content
    },
    data(){
        return{
            H:'',
            T:'',
            oldH:'',
            videoId:'',
            list:'',
            items:[],
            Indexs:[]
        }
    },
    created(){//vue实例装载完成后，获取路由传递的数据
        this.videoId=this.$route.query.videoId;
        this.loadResource();//调用ajax获取数据
    },
    mounted(){
        //vue实例装载后，即页面加载完成后，立即取到slideDiv最初的高度
        this.oldH=this.$refs.slideDiv.offsetHeight;
        this.H=0; //将H赋值为0，即将slideDiv的高设置为0,让其隐藏
    },
    methods:{
        slideS(){
            this.T='height 2s';  //点击事件触发，将slideDiv的transition属性设置为T
            let hgt=this.$refs.slideDiv.offsetHeight;
            //为了防止slideDiv设置了border属性，导致hgt不等于0，所以判断条件设置为这样最为保险
            if(hgt<this.oldH){
                this.H=this.oldH;
            }
            else{
                this.H=0;
            }
        
        },

        loadResource(){  //定义ajax资源调用方法
            let videoId=this.videoId;
            this.$http.get(`http://jsonplaceholder.typicode.com/photos?id=${videoId}`)
            .then(data=>{
                    //返回的数据是json数组，而且只有一个元素，需要使用下标获取
                    this.list=data.body[0];  
                
                    let albumId=this.list.albumId; //获取专辑号，然后进行ajax请求获取“相关推荐”的数据

                    return this.$http.get(`http://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                },error=>{
                    console.error();   
                }).then(response=>{
                    
                    this.items=response.body;  //将返回数据赋值给items，即“相关推荐”

                },error=>{console.error();}
                );
        }
    },
    watch:{
        $route:{  //由于vue最大的特点就是减少页面的加载，所以当要用到的组件与当前组件相同时，
                //vue将不会重新创建新的实例，也就是页面数据不会更新，为了达到数据更新的目的，
                //需要监听$route对象的变化，再重新赋值，并调用相关加载方法。
            handler(n,o){  //n:当前的值，o：原来的值
                this.videoId=n.query.videoId;
                this.loadResource();
            }
        }
    }

}
</script>
<style scoped>
.big{
    width:100vw;
    display: flex;
    flex-wrap: wrap;

}
.nav{
    width:100vw;
    height: 5vh;
}
.video{
    width: 100vw;
    height: auto;
}
.videoSize{
    width: 100vw;
    height:32vh;
}
.message{
    width: 100vw;
    height: 18vh;
    padding: 3vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
}
.message h3{
    width: 95vw;
    height: 12vh;
    font-size: 3vh;
    word-wrap: break-word;
    letter-spacing:0;
     margin-bottom:2vh;
     overflow: hidden;
}
.message h4{
     width: 30vw;
    height: 3vh;
    font-size: 2vh;
}
.message span{
     width: 20vw;
    height: 3vh;
    font-size: 1vh;
}
.slideDiv{
    width: 100vw;
    height: 20vh;
    padding: 0 2vh;
    word-wrap:break-word;
    font-size: 2vh;
    font-weight: normal;
    color:black;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.caozuo{
    width: 100vw;
    height: 5vh;
    display: inline-flex;
}
.caozuo p{
    width: 20vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
}

.xiangguan{
    width: 100vw;
    height: 40vh;
    border-top:1px solid slategray;
    overflow-x:hidden;
    overflow-y:auto;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
}
.xiangguan p.P{
    width: 100vw;
    height: 1vh;
    font-size: 2vh;
    padding-left:5vw;
    margin-top:1vh;
}
</style>
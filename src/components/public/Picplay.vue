<template>
    <div class="picPlay" ref="picPlay" @mouseover="stopP()" @mouseout="playP()">
            <ul :style="{left:Left+'px',transition:T}">
                <li ref="Li" v-for="(img,i) in imgs" :key="i">
                    <img :src="img">
                </li>
            </ul>
            <div class="small">
                <p :class="{smallP:smallPactive[i]}" v-for="(img,i) in imgs" :key="i"></p>
            </div>
    </div>
</template>
<script>
export default {
    name:'Picplay',
    data(){
        return{
            Left:0,
            j:0,
            smallPactive:[],
            T:'left 2s',
            Timer:'',
            Li:'',
            Imgw:0
        }
    },
    props:{
        imgs:{
            type:Array,
            required:true
        }
    },
    methods:{
        playPic(pd){

            if(pd){
                this.j++;
                this.Left-=this.ImgW;
                if(this.j==this.Li.length){
                    this.j=0;
                }
                if(this.Left==-this.Li.length*this.ImgW){
                    this.Left=0;
                    this.T='';
                }
                else{
                    this.T='left 2s';
                }
            }
            else{
                this.j--;
                this.Left+=this.ImgW;
                if(this.j==-1){
                    this.j=this.Li.length-1;
                }
                if(this.Left==this.ImgW){
                    this.Left=-(this.Li.length-1)*this.ImgW;
                }
            }
            this.smallPactive=[false,false,false,false];
            this.smallPactive.splice(this.j,1,true);    
        },
        prev(){
            this.playPic(false);
        },
        next(){
            this.playPic(true);
        },
        stopP(){
            clearInterval(this.Timer);
        },
        playP(){
            this.Timer=setInterval(()=>{
                this.playPic(true);
            },3000);
        }
    },
    created(){
        this.smallPactive[0]=true;
    },
    mounted(){
            this.Li=this.$refs.Li;
            this.ImgW=this.Li[0].offsetWidth;
        for(let i=1;i<this.$refs.Li.length;i++){
                 this.smallPactive[i]=false;
        }
        this.Timer=setInterval(()=>{
                this.playPic(true);
            },3000);
        
    }
}
</script>
<style scoped>
.picPlay{
    width: 100vw;
    margin:1vw auto;  
    position: relative;
}
.small{
    display: inline-flex;
    position: absolute;
    top: 16vh;
    left:40vw;
}
.small p{
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
    border:1px solid darkkhaki;
    margin-left:1vw;
}
.small p.smallP{
    background-color: brown;
}
 ul{
    display: inline-flex;
    position: absolute;
    top:0px;
    left:0px;
}
 ul li{
    list-style: none;
}
 ul li img{
    width:100vw;
    height: 20vh;;
}
</style>
<template>
    <div class="big">
        <div class="content1">
            <h3>大家都在搜</h3>
            <div class="div1">
                <p @click="loadTo(it)" v-for="(it,i) in items" :key="i">{{it}}</p>
            </div>
        </div>
        <div class="content2">
            <h3>历史记录  <span @click="deleteAll()" class="DeleteAll">清除所有</span></h3>
            <div class="div2">
                <p @click="loadTo(is)" v-for="(is,i) in histories" :key="i">
                    {{is}}
                    <span @click.stop="deleteOne(i)">&times</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Searchdefault',
    data(){
        return{
            items:['1','2','3','4','5','6','7','8'],
            histories:[]
        }
    },
    created(){
        //从磁盘获取数据，初始化histories数组,localStorage存储的是字符串，需要进行转换才能使用
        let his=localStorage.getItem('his');
        if(his){
            this.histories=his.split(',');
        }
        else{
            this.histories=[];
        }
    },
    methods:{
        deleteOne(index){
            //删除指定的元素，持久化修改后的数组
            this.histories.splice(index,1);
            localStorage.setItem('his',this.histories);
        },
        deleteAll(){
            //删除所有的元素
            this.histories.splice(0,this.histories.length);
            localStorage.clear('his');
        },
        loadTo(text){
            this.$emit('searchTo',text);
        }
    }

}
</script>
<style scoped>
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    overflow: hidden;
}
.big{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    
}
.content1{
    width: 100vw;
    height: 25vh;
    display: flex;
    flex-wrap: wrap;
}
.big h3{
    width: 100vw;
    height: 4vh;
    margin:1vh 0 1vh 5vw;
    font-size:2vh;
    color:black;
    font-weight: normal;
    position: relative;
}
.div1{
    width: 100vw;
    height: 25vh;
    display: flex;
    flex-wrap: wrap;
}
.content1 .div1 p{
    width: auto;
    height: 2vh;
    border:1px solid silver;
    border-radius: 20%;
    margin-left:2vw;
    padding: 3vw;
    font-size:3vh;
    border-radius: 20%/50%;
     display: flex;
    justify-content:center;
    align-items: center;
}
.content2{
    width: 100vw;
    height: 60vh;
    border-top:1px solid darkgrey;
}
.content2 .DeleteAll{
    display: inline-block;
    width: 15vw;
    height: 3vh;
    color: aqua;
    position: absolute;
    right: 20vw;
    top:1vh;
     
}
.div2{
    width: 100vw;
    height:auto;
    margin-top:1vh;
    display: flex;
    flex-direction: column;
}
.div2 p{
    width: 100vw;
    height: 5vh;
    margin-left:2vw;
     font-size:3vh;
    border-bottom:1px solid slategrey;
    display: flex;
    align-items: center;
    position: relative;
}
.div2 p span{
    display: inline-block;
    width:5vw;
    height: 3vh; 
    position: absolute;
    right: 10vw;
    top:1vh;
}
</style>
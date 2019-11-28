<template>
    <div class="big">
        <div class="search">
            <div class="text">
                <input type="text" v-model="stm" placeholder="请输入搜索内容">
                <div class="x" @click="clear()">&times;</div>
            </div>
            <p @click="search()">搜索</p>
            <p @click="back()" style="color:red;">取消</p>
        </div>

        <div class="content">
            <router-view @searchTo="searchTo($event)" 
            @resultDed="resultDestroyed($event)"
            >

            </router-view>
        </div>

    </div>
</template>
<script>
export default {
    name:'Sousuo',
    data(){
        return{
            stm:'',
            oldStm:'',//记录上一次搜索的内容
            finished:[],//已搜索内容的数组
            pd:true,
            max:10 //最大存储记录的条数
        }
    },
    methods:{
        search(){
            this.pd=true;//每搜索一次，将pd初始化为true
            //this.oldStm!=this.stm  拒绝在Searchresult组件再次搜索相同的内容
            if(this.stm&&this.stm.trim().length>0&&this.oldStm!=this.stm){
                this.$router.push({path:'/search/result',query:{albumId:this.stm}});
                this.oldStm=this.stm;//记录这次搜索的内容
                this.finished.forEach(fin=>{
                    if(fin==this.stm){ //遍历数组，如果已经存在，将pd赋值为false
                        this.pd=false;
                    }   
                });
                if(this.pd){ //pd为true，说明该内容不是重复的数据，需要添加到数组中
                    if(this.finished.length<this.max){
                        this.finished.push(this.stm);//直接添加数据
                    }
                    else{
                        this.finished.shift(0); //删除数组的第一个元素
                        this.finished.push(this.stm);
                    }
                }
                localStorage.setItem('his',this.finished);//持久化历史访问数组
                
            }
            else{
                console.log('ssss');
            }
        },
        searchTo(data){  //从子组件Searchdefault中点击搜索内容后，接受搜索关键字
            this.stm=data;
            this.search();
        },
        resultDestroyed(data){ //接受子组件Searchresult实例销毁后（即点击返回后）传递过来的值''
            this.oldStm=data;//将oldStm赋值为空，允许在组件Searchdefaullt页面再次搜索相同的内容
        }
        ,
        back(){
            this.$router.go(-1);
        },
        clear(){
            this.stm='';
        }
    },
    created(){
        //创建vue实例后，初始化历史访问数组
        let his=localStorage.getItem('his');
        if(!his){  //his为null，初始化finished为空数组
            this.finished=[];
        }
        else{  //在his非的情况下进行取值操作，不然会报错
            this.finished=his.split(',');
        }
        
    }
}
</script>
<style scoped>

.big{
    width:100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
.search{
    width: 100vw;
    height: 5vh;
    margin-top:1vh;
    display: inline-flex;
    justify-content:center;
    font-size: 2vh;

}
.search .text{
    width: 50vw;
    height: 5vh;
    position: relative;
    font-size: 2vh;
}
.search .text input{
    box-shadow: none;
    padding: 1vw;
     font-size: 2vh;
}
.search .x{
    width: 2vh;
    height: 2vh;
    border:1px solid black;
    border-radius: 50%;
    background-color:gray;
    position: absolute;
    top:1.5vh;
    right: 3vh;
     display: flex;
    justify-content: center;
    align-items: center;
}
.search p{
    width: 10vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.content{
    width: 100vw;
    height: 90vh;
    margin-top:1vh;
}
</style>
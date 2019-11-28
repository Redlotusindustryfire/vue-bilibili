<template>
    <div >
        <bigContent :items="scrollNavs"></bigContent>
    </div>
</template>
<script>
import BigContent from './public/BigContent'
export default {
    name:'Music',
    components:{
        bigContent:BigContent
    },
    data(){
        return{
            scrollNavs:[
                {url:'/music/tuijian',text:'推荐',data:{kind:'music',category:'tuijian'}},
                {url:'/music/yuanchuang',text:'原创音乐',data:{kind:'music',category:'yuanchuang'}},
                {url:'/music/fanchang',text:'翻唱',data:{kind:'music',category:'fanchang'}},
                {url:'/music/dianyin',text:'电音',data:{kind:'music',category:'dianyin'}},
                {url:'/music/mv',text:'MV',data:{kind:'music',category:'mv'}},
                {url:'/music/xianchang',text:'现场',data:{kind:'music',category:'xianchang'}},
            ]
        }
    }   
}
</script>
<style scoped>
    
</style>

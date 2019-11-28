<template>
    <div >
        <bigContent :items="scrollNavs"></bigContent>
    </div>
</template>
<script>
import BigContent from './public/BigContent'
export default {
    name:'Keji',
    components:{
        bigContent:BigContent
    },
    data(){
        return{
            scrollNavs:[
                {url:'/keji/tuijian',text:'推荐',data:{kind:'keji',category:'tuijian'}},
               {url:'/keji/renwen',text:'科普人文',data:{kind:'keji',category:'renwen'}},
               {url:'/keji/xinghai',text:'星海',data:{kind:'keji',category:'xinghai'}},
                {url:'/keji/jixie',text:'机械',data:{kind:'keji',category:'jixie'}},
              {url:'/keji/qiche',text:'汽车',data:{kind:'keji',category:'qiche'}}
            ]
        }
    }   
}
</script>
<style scoped>
    
</style>

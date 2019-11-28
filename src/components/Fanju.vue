<template>
    <div >
        <bigContent :items="scrollNavs"></bigContent>
    </div>
</template>
<script>
import BigContent from './public/BigContent'
export default {
    name:'Fanju',
    components:{
        bigContent:BigContent
    },
    data(){
        return{
            scrollNavs:[
               {url:'/fanju/tuijian',text:'推荐',data:{kind:'fanju',category:'tuijian'}},
               {url:'/fanju/lianzai',text:'连载动画',data:{kind:'fanju',category:'lianzai'}},
               {url:'/fanju/wanjie',text:'完结动画',data:{kind:'fanju',category:'wanjie'}},
               {url:'/fanju/zixun',text:'资讯',data:{kind:'fanju',category:'zixun'}},
               {url:'/fanju/yansheng',text:'官方延伸',data:{kind:'fanju',category:'yansheng'}}
            ]
        }
    }   
}
</script>
<style scoped>
    
</style>

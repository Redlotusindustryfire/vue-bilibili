<template>
    <div >
        <bigContent :items="scrollNavs"></bigContent>
    </div>
</template>
<script>
import BigContent from './public/BigContent'
export default {
    name:'Guochuang',
    components:{
        bigContent:BigContent
    },
    data(){
        return{
            scrollNavs:[
                {url:'/guochuang/tuijian',text:'推荐',data:{kind:'guochuang',category:'tuijian'}},
               {url:'/guochuang/guochuangdonghua',text:'国产动画',data:{kind:'guochuang',category:'guochan'}}, 
               {url:'/guochuang/guochanyuanchuang',text:'国产原创',data:{kind:'guochuang',category:'yuanchuang'}}, 
               {url:'/guochuang/budaixi',text:'布袋戏',data:{kind:'guochuang',category:'budaixi'}}, 
               {url:'/guochuang/zixun',text:'资讯',data:{kind:'guochuang',category:'zixun'}}
            ]
        }
    }   
}
</script>
<style scoped>
    
</style>

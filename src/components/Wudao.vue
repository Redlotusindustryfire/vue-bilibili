<template>
    <div >
        <bigContent :items="scrollNavs"></bigContent>
    </div>
</template>
<script>
import BigContent from './public/BigContent'
export default {
    name:'Wudao',
    components:{
        bigContent:BigContent
    },
    data(){
        return{
            scrollNavs:[
                {url:'/wudao/tuijian',text:'推荐',data:{kind:'wudao',category:'tuijian'}},
                {url:'/wudao/zhaiwu',text:'宅舞',data:{kind:'wudao',category:'zhaiwu'}},
                {url:'/wudao/jiewu',text:'街舞',data:{kind:'wudao',category:'jiewu'}},
                {url:'/wudao/gufengwu',text:'古风舞',data:{kind:'wudao',category:'gufengwu'}},
                {url:'/wudao/wudaojiaocheng',text:'舞蹈教程',data:{kind:'wudao',category:'wudaojiaocheng'}}
            ]
        }
    }   
}
</script>
<style scoped>
    
</style>

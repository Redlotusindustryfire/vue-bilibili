<template>
    <div >
        <bigContent :items="scrollNavs"></bigContent>
    </div>
</template>
<script>
import BigContent from './public/BigContent'
export default {
    name:'Guichu',
    components:{
        bigContent:BigContent
    },
    data(){
        return{
            scrollNavs:[
                {url:'/guichu/tuijian',text:'推荐',data:{kind:'guichu',category:'tuijian'}},
               {url:'/guichu/guichutiaojiao',text:'鬼畜调教',data:{kind:'guichu',category:'guichutiaojiao'}},
               {url:'/guichu/yinmad',text:'音MAD',data:{kind:'guichu',category:'yinmad'}},
               {url:'/guichu/jiaochengyanshi',text:'教程演示',data:{kind:'guichu',category:'jiaochengyanshi'}}
               
            ]
        }
    }   
}
</script>
<style scoped>
    
</style>

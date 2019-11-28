<template>
    <div >
        <bigContent :items="scrollNavs"></bigContent>
    </div>
</template>
<script>
import BigContent from './public/BigContent'
export default {
    name:'Donghua',
    components:{
        bigContent:BigContent
    },
    data(){
        return{
            scrollNavs:[
                 {url:'/donghua/tuijian',text:'推荐',data:{kind:'donghua',category:'tuijian'}},
               {url:'/donghua/amv',text:'AMV',data:{kind:'donghua',category:'amv'}}, 
               {url:'/donghua/3d',text:'3D',data:{kind:'donghua',category:'3d'}}, 
               {url:'/donghua/duanpian',text:'短片',data:{kind:'donghua',category:'duanpian'}}, 
               {url:'/donghua/shoushu',text:'手书',data:{kind:'donghua',category:'shoushu'}}, 
               {url:'/donghua/peiyin',text:'配音',data:{kind:'donghua',category:'peiyin'}}, 
               {url:'/donghua/zonghe',text:'综合',data:{kind:'donghua',category:'zonghe'}}
            ]
        }
    }   
}
</script>
<style scoped>
    
</style>
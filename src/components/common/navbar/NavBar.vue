<template>
    <!-- 顶栏进行组件封装 -->
    <div class="nav-bar">
       <div class="left"><slot name='left'></slot></div>
       <div class="center"><slot name='center'></slot></div>
       <div class="right"><slot name='right'></slot></div> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height:44px;
    text-align: center;
    /*设置盒低阴影*/
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
}
.left,.right{
    width:60px;
}
.center{
    flex: 1;
}
</style>
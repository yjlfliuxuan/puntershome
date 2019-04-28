<template>
  <div class="liuhelongestnotopen">
    <Liuhequeryhead></Liuhequeryhead>
    <div class="tablelist">
      <h2>最久不开</h2>
      <div class="list">
         <div>当前特码最久不开</div>
         <div>当前波色最久不开</div>
         <div>当前头数最久不开</div>
         <div>当前尾数最久不开</div>
         <div>当前五行最久不开</div>
         <div>当前生肖最久不开</div>
      </div>
    </div>
    </div>
</template>

<script>
import Liuhequeryhead from '../Liuhequeryhead/index.vue'
export default {
  name: 'index',
  components: {
    Liuhequeryhead
  }
}
</script>

<style lang="scss">
.liuhelongestnotopen{
  .tablelist{
    width: 85%;
    height: 500px;
    margin: 15px auto;
    border-left: 1px solid #E5E5E5;
    border-top:1px solid #E5E5E5 ;
    padding: 6px 0 0 20px;
    h2{
      height:30px;
      line-height: 30px;
      margin: 10px;
      font-size: 20px;
    }
    .list{
      width: 45%;
      border-top: 1px solid #E5E5E5;
      padding: 20px 0 0 10px;
      div{
        width: 176px;
        height: 60px;
        margin: 0 50px 30px 0;
        line-height: 60px;
        text-align: center;
        border: 1px solid black;
        float: left;
        cursor: pointer;
      }
    }
  }
}
</style>

<template>
  <div class="liuhecommonsense">
    <Liuhequeryhead></Liuhequeryhead>
    <div style="width: 90%;margin: 30px auto;" id="tab">
      <h2 class="title">
        <span class="tab">生肖号码</span>
        <span>波色号码</span>
        <span>五行属性</span>
      </h2>
      <div class="content" style="background: greenyellow;">内容一</div>
      <div style="background: cyan;">内容二</div>
      <div style="background: goldenrod;">内容三</div>
    </div>
   </div>
</template>

<script>
import $ from 'jquery'
import Liuhequeryhead from '../Liuhequeryhead/index.vue'
export default {
  name: 'index',
  components: {
    Liuhequeryhead
  },
  mounted () {
    $('#tab').find('span').click(function () {
      $(this).addClass('tab').siblings('span').removeClass('tab')
      $('#tab').find('div').eq($(this).index()).addClass('content').siblings('div').removeClass('content')
    })
  }
}
</script>

<style lang="scss">
  .liuhecommonsense{
    #tab{
      .title{
        width: 48%;
        height: 42px;
        color: #3498DB;
        border: 1px solid #3498DB;
        margin: 0;
        display: flex;
        span{
          height: 40px;
          line-height: 40px;
          text-align: center;
          float: left;
          font-family: "微软雅黑";
          font-size: 16px;
          flex: 1;
          border-right: 1px solid #3498DB;
          cursor: pointer;
        }
        span:nth-child(3){
          border-right: none;
        }
        .tab {
          color: white;
          background-color: #3498DB;
          cursor: pointer;
        }
      }
      div {
        width: 48%;
        height: 400px;
        display: none;
        text-align: center;
        line-height: 400px;
        font-family: "微软雅黑";
        font-size: 24px;
      }
      .content {
        display: block;
      }
    }
  }
</style>

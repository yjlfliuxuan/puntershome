<template>
    <div class="homepage">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../images/20190410151211.jpg"/></div>
          <div class="swiper-slide"><img src="../../images/20190410190437.png"/></div>
          <div class="swiper-slide"><img src="../../images/20190413171855.png"/></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane label="特码走势">
          <div id="myChart1" :style="{width: '1200px', height: '400px'}"></div>
        </el-tab-pane>
        <el-tab-pane label="生肖走势">
          <div id="myChart2" :style="{width: '1200px', height: '400px'}"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'index',
  mounted () {
  /* eslint-disable */
      let mySwiper=new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:{      //自动播放，里面有很多参数可以根据需求进行调试
          delay:3000,
        },
        effect : 'coverflow',   //翻转方式
      })
     this.drawLine();
    },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      // 绘制图表
      myChart1.setOption({
        tooltip: {},
        xAxis: {
          axisLine: {
            onZero: false,
            lineStyle: {
              color:'#0FA7EA'
            }
          },
          data: ["001","002","003","004","005","006","007","008","009","010","011"]
        },
        yAxis: {},
        series: [{
          name:"期数",
          type:'line',
          smooth: true,
          color:'#0FA7EA',
          data: [5, 20, 36, 10, 50, 20, 15, 45, 26, 32, 58]
        }]
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      myChart2.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '期数',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<style lang="scss">
  @import "../../../node_modules/swiper/dist/css/swiper.css";
  .homepage{
    width: 100%;
    .swiper-container {
      width: 100%;
      height: 100px;
      margin: 0 auto;
      padding:20px 0;
      .swiper-wrapper{
        .swiper-slide{
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .swiper-pagination-bullets{
        bottom: 20px;
        left: 0;
        width: 100%;
      }
    }
  }
</style>

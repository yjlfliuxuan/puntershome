<template>
  <div class="queryhead">
    <div class="bread">
      <p>
        <router-link :to="{ path: '/' }" class="breadaone">彩票大厅</router-link>
        <span>/</span>
        <span>六合彩</span>
        <span>/</span>
        <router-link :to="{name: currentpath,params:{curpath: currentpath, title: currentname}}" class="breadatwo">{{currentname||currentpathname}}</router-link>
      </p>
    </div>
    <div class="list">
    <ul>
      <li @mouseover="addactive($event)" @mouseout="removeactive($event)" @click="changeroute('liuhelotteryrecord', '历史开奖记录')">开奖记录查询</li>
      <li @mouseover="addactive($event)" @mouseout="removeactive($event)" @click="changeroute('liuhecondition','历史开奖条件查询')">按条件查询</li>
      <li @mouseover="addactive($event)" @mouseout="removeactive($event)" @click="changeroute('liuhecommonsense','六合常识查询')">六合常识查询</li>
      <li @mouseover="addactive($event)" @mouseout="removeactive($event)" @click="changeroute('liuhelotterydate','搅珠日期查询')">开奖日期查询</li>
      <li @mouseover="addactive($event)" @mouseout="removeactive($event)" @click="changeroute('liuhelongestnotopen','最久不开')">最久不开</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      currentpath: '',
      currentname: '',
      currentpathname: ''
    }
  },
  beforeCreate () {
    var canshu = this.$router.apps[0].$route.params
    if (canshu) {
      this.currentpath = canshu.curpath
      this.currentname = canshu.title
    }
  },
  created () {
    this.currentpathname = localStorage.getItem('currentpathname')
  },
  methods: {
    changeroute (path, name) {
      this.currentname = name
      if (path === 'liuhelotteryrecord') {
        localStorage.setItem('currentpathname', '历史开奖记录')
        this.$router.push({ name: 'liuhelotteryrecord', params: { curpath: 'liuhelotteryrecord', title: '历史开奖记录' } })
      } else if (path === 'liuhecondition') {
        localStorage.setItem('currentpathname', '历史开奖条件查询')
        this.$router.push({ name: 'liuhecondition', params: { curpath: 'liuhecondition', title: '历史开奖条件查询' } })
      } else if (path === 'liuhecommonsense') {
        localStorage.setItem('currentpathname', '六合常识查询')
        this.$router.push({ name: 'liuhecommonsense', params: { curpath: 'liuhecommonsense', title: '六合常识查询' } })
      } else if (path === 'liuhelotterydate') {
        localStorage.setItem('currentpathname', '搅珠日期查询')
        this.$router.push({ name: 'liuhelotterydate', params: { curpath: 'liuhelotterydate', title: '搅珠日期查询' } })
      } else if (path === 'liuhelongestnotopen') {
        localStorage.setItem('currentpathname', '最久不开')
        this.$router.push({ name: 'liuhelongestnotopen', params: { curpath: 'liuhelongestnotopen', title: '最久不开' } })
      }
    },
    addactive ($event) {
      $event.currentTarget.className = 'bground'
    },
    removeactive ($event) {
      $event.currentTarget.className = ''
    }
  }
}
</script>

<style lang="scss">
 .queryhead{
   padding: 10px 0;
   .bread{
     width: 90%;
     background: #F5F5F5;
     margin: 0 auto;
     padding:16px 0;
     font-size: 14px;
     p{
       width: 100%;
       .breadaone{
         text-decoration: none;
         color:#9B9B9B;
         margin-right: 10px;
         font-size: 14px;
       }
       span{
         color:#9B9B9B;
         margin-right: 10px;
       }
       .breadatwo{
         text-decoration: none;
         color:#CA4C49;
         font-size: 14px;
       }
     }
   }
   .list{
     width: 90%;
     margin: 0 auto;
     ul{
       width: 100%;
       display: flex;
       justify-content: flex-start;
       align-items: center;
       .bground{
         background:#F2F2F2;
         color:black;
       }
       li{
         width: 120px;
         margin-right:4px;
         background:#CA4C49;
         text-align: center;
         height: 30px;
         line-height: 30px;
         color:white;
         font-size: 14px;
         cursor:pointer;
       }
     }
   }
 }
</style>

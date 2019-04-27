<template>
  <div class="mystery">
    <el-tabs tab-position="left" style="height: 640px;">
      <el-tab-pane>
        <span slot="label">每期玄机<i class="icon-arrow-fill-right" style="float:right;color:#F5F5F5;font-size: 12px;"></i></span>
        <div class="contentarea">
          <span class="listtitle">每期玄机</span>
          <ul class="listul">
            <li class="listli" v-for="(item,index) in totalobj.list" :key="index">{{item}}</li>
          </ul>
          <el-pagination
            background
            :pager-count="pagercount"
            prev-text="上一页"
            next-text="下一页"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="totalobj.total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">全年玄机<i class="icon-arrow-fill-right" style="float:right;color:#F5F5F5;font-size: 12px;"></i></span>
        <div class="contentarea">
          <span class="listtitle">全年玄机</span>
          <ul class="listul">
            <li class="listli" v-for="(item,index) in totalobj.list" :key="index">{{item}}</li>
          </ul>
          <el-pagination
            background
            :pager-count="pagercount"
            prev-text="上一页"
            next-text="下一页"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="totalobj.total">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      currentPage1: 1,
      totalobj: {}, // totalobj是需要以currentPage1和 pageSize为参数向后台发送请求来返回的一个对象,对象里必须有total数据总条数和当前页的条数（数据集合）
      pageSize: 5,
      pagercount: 5
    }
  },
  created () {
    // 这里应该是有一个向后端发送的ajax请求来返回totalobj
    this.totalobj = {
      list: ['008期：妖魔买特码/传密一肖诗/特码爆一爆/手机短信王/智力金壤',
        '009期：妖魔买特码/传密一肖诗/特码爆一爆/手机短信王/智力金壤',
        '010期：妖魔买特码/传密一肖诗/特码爆一爆/手机短信王/智力金壤',
        '011期：妖魔买特码/传密一肖诗/特码爆一爆/手机短信王/智力金壤',
        '012期：妖魔买特码/传密一肖诗/特码爆一爆/手机短信王/智力金壤',
        '013期：妖魔买特码/传密一肖诗/特码爆一爆/手机短信王/智力金壤'],
      total: 38
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss">
  .mystery{
    width: 90%;
    padding: 30px 0;
    margin:0 auto;
    .el-tabs{
      border:2px solid #E4E4E4;
      .el-tabs__header{
        width: 160px;
        border:2px solid #E4E7ED;
        background: #F5F5F5;
        .el-tabs__nav-wrap{
          width: 90%;
          .el-tabs__nav-scroll{
            width: 100%;
            .el-tabs__nav{
              .el-tabs__item{
                border: 2px solid #E4E7ED;
              }
              #tab-0,#tab-1{
                text-align: left;
              }
              .el-tabs__active-bar{
                display: none;
              }
              .is-active{
                background: #CA4C49;
                color:white;
              }
            }
          }
        }
        .el-tabs__nav-wrap::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: #E4E7ED;
          z-index: 1;
        }
      }
      .el-tabs__content{
        .el-tab-pane{
          .contentarea{
            .listtitle{
              color:#CC5452;
              padding: 10px 0;
              width: 98%;
              display: block;
              text-align: left;
              border-bottom:2px solid #F7F7F7;
            }
            .listul{
              width: 98%;
              margin-bottom: 70px;
              .listli{
                width: 100%;
                border-bottom:2px solid #F7F7F7;
                text-align: left;
                cursor: pointer;
                padding: 6px 0;
                color:#4E4E4E;
                font-size: 14px;
              }
            }
            .el-pagination{
             text-align: center;
              .el-pagination__total{
                color:#397EB9;
              }
              button{
                span{
                  color:#397EB9;
                }
              }
              .el-pager{
                .number{
                  color:#397EB9;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
    <div class="applydisclaimer">
      <el-tabs tab-position="left" style="height: 600px;">
        <el-tab-pane>
          <span slot="label">关于应用<i class="icon-arrow-fill-right" style="float:right;color:#F5F5F5;font-size: 12px;"></i></span>
          <div>
            <span>关于应用</span>
            <p>本app是一款由香港科技有限公司研发的，一款面向香港地区提供六合彩咨询的免费软件。是基于公平公正公开的原则下，提供一个共享的平台。</p>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">免责声明<i class="icon-arrow-fill-right" style="float:right;color:#F5F5F5;font-size: 12px;"></i></span>
          <div>
          <span>免责声明</span>
          <p>本app是一款供香港地区人士提供六合彩参考咨询的平台，对于使用本应用内喜讯出现的任何问题，本公司不承担责任。</p>
         </div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss">
 .applydisclaimer{
   width: 90%;
   padding: 50px 0 0 0;
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
         div{
           span{
             color:#CC5452;
             margin: 10px 0;
             display: block;
           }
           p{
             font-size: 14px;
           }
         }
       }
     }
   }
 }
</style>

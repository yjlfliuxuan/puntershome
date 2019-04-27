<template>
  <div class="home">
      <div class="puntershead">
        <div class="container">
        <div class="puntersheadleft">
          <div class="logoimg"><img src="@/images/logo.png"></div>
          <span class="logotitle">彩民之家</span>
        </div>
        <div class="puntersheadright">
          <div class="downloadbtn">安卓下载</div>
          <div class="downloadIOS">IOS下载</div>
          <div class="exchangearea">
            <div class="notlogin">
            <ul>
               <li><a>聊彩大厅</a></li>
               <li><span>|</span></li>
               <li @click="clicklogin"><a>登录</a></li>
               <li><span>|</span></li>
               <li @click="clickregister"><a>注册</a></li>
            </ul>
            </div>
            <div class="islogin">
            <ul>
              <li><img src="@/images/weixin.png"><b>聊彩大厅</b></li>
              <li><span>|</span></li>
              <li><img src="@/images/personcenter.png"><b>个人中心</b></li>
              <li><span>|</span></li>
              <li><img src="@/images/redbag.png"><b>红包</b></li>
              <li><span>|</span></li>
              <li><img src="@/images/info.png"><b>站内消息</b></li>
            </ul>
            </div>
          </div>
          <div class="helpcenter">
             <img src="@/images/wen.png">
             <span>帮助中心</span>
          </div>
        </div>
        </div>
      </div>
      <div class="puntersnav">
        <div class="container">
         <ul class="navleft">
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a @click="switchList('homepage')" id="homeweb">首页</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/forum'}" @click="switchList('forum')">高手论坛</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/datatransfer'}" @click="switchList('datatransfer')">精料转帖</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/mystery'}" @click="switchList('mystery')">每期玄机</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/formula'}" @click="switchList('formula')">公式规律</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/gallery'}" @click="switchList('gallery')">六合图库</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/humor'}" @click="switchList('humor')">幽默猜测</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/rundog'}" @click="switchList('rundog')">跑狗社区</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/fourunlike'}" @click="switchList('fourunlike')">四不像</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/stuff'}" @click="switchList('stuff')">老黄历</a></li>
            <li @mouseover="addclass($event)" @mouseout="removeclass($event)"><a :class="{'x-act': $route.path === '/hotwebmanger'}" @click="switchList('hotwebmanger')">热门网站</a></li>
         </ul>
          <div class="navright" @mouseover="changeblock" @mouseout="changenone">
            <div class="selectnav" @mouseover="addclassname($event)" @mouseout="removeclassname($event)">
              <span :class="{'x-act': $route.path === '/liuhelotteryrecord'||$route.path === '/liuhecondition'||$route.path === '/liuhecommonsense'||$route.path === '/liuhelotterydate'||$route.path === '/liuhelongestnotopen'}" class="iconfont">六合资料查询&#xe6f3;</span></div>
            <ul class="fixednav">
              <li @mouseover="addactive($event)" @mouseout="removeactive($event)"><a @click="switchList('liuhelotteryrecord')">开奖记录查询</a></li>
              <li @mouseover="addactive($event)" @mouseout="removeactive($event)"><a @click="switchList('liuhecondition')">按条件查询</a></li>
              <li @mouseover="addactive($event)" @mouseout="removeactive($event)"><a @click="switchList('liuhecommonsense')">六合常识查询</a></li>
              <li @mouseover="addactive($event)" @mouseout="removeactive($event)"><a @click="switchList('liuhelotterydate')">开奖日期查询</a></li>
              <li @mouseover="addactive($event)" @mouseout="removeactive($event)"><a @click="switchList('liuhelongestnotopen')">最久不开</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="puntersmain">
        <div class="container">
          <div class="liaocai">
              <img src="@/images/liaocai.png">
          </div>
         <router-view></router-view>
        </div>
      </div>
      <div class="puntersfooter">
        <div class="container">
        <ul>
          <li @click="switchList('applydisclaimers')">关于应用</li>
          <li @click="switchList('applydisclaimers')">免责声明</li>
          <li @click="switchList('contactus')">联系我们</li>
          <li @click="switchList('faq')">常见问题</li>
        </ul>
          <div class="imglink">
            <img src="@/images/googleplay.png">
            <img src="@/images/appstore.png">
            <img src="@/images/mobile.png">
          </div>
        </div>
      </div>
    <Loginalert class="loginwindow"></Loginalert>
    <Registeralert class="registerwindow"></Registeralert>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import $ from 'jquery'
import Loginalert from '@/components/Login/index.vue'
import Registeralert from '@/components/Register/index.vue'
export default {
  name: 'home',
  components: {
    Loginalert: Loginalert,
    Registeralert: Registeralert
  },
  mounted () {
    var hash = location.href.split('#/')[1]
    if (hash === 'applydisclaimers' || hash === 'contactus' || hash === 'faq' || hash === 'homepage') {
      $('#homeweb').addClass('bgcolor')
    }
  },
  methods: {
    changeblock () {
      $('.fixednav').css('display', 'block')
    },
    changenone () {
      $('.fixednav').css('display', 'none')
    },
    clicklogin () {
      $('.loginwindow').css('display', 'block')
      $('.logindialog').show()
    },
    clickregister () {
      $('.registerwindow').css('display', 'block')
    },
    addclass ($event) {
      $event.currentTarget.className = 'active'
    },
    removeclass ($event) {
      $event.currentTarget.className = ''
    },
    addclassname ($event) {
      $event.currentTarget.className = 'selectnav active'
    },
    removeclassname ($event) {
      $event.currentTarget.className = 'selectnav'
    },
    addactive ($event) {
      $event.currentTarget.className = 'bground'
    },
    removeactive ($event) {
      $event.currentTarget.className = ''
    },
    switchList (type) {
      if (type === 'homepage') {
        this.$router.push({ path: '/homepage' })
        $('#homeweb').addClass('bgcolor')
      } else if (type === 'forum') {
        this.$router.push({ path: '/forum' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'datatransfer') {
        this.$router.push({ path: '/datatransfer' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'mystery') {
        this.$router.push({ path: '/mystery' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'formula') {
        this.$router.push({ path: '/formula' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'gallery') {
        this.$router.push({ path: '/gallery' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'humor') {
        this.$router.push({ path: '/humor' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'rundog') {
        this.$router.push({ path: '/rundog' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'fourunlike') {
        this.$router.push({ path: '/fourunlike' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'stuff') {
        this.$router.push({ path: '/stuff' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'hotwebmanger') {
        this.$router.push({ path: '/hotwebmanger' })
        $('#homeweb').removeClass('bgcolor')
      } else if (type === 'liuhelotteryrecord') {
        this.$router.push({ name: 'liuhelotteryrecord', params: { curpath: 'liuhelotteryrecord', title: '历史开奖记录' } })
        $('#homeweb').removeClass('bgcolor')
        $('.fixednav').hide()
        localStorage.setItem('currentpathname', '历史开奖记录')
      } else if (type === 'liuhecondition') {
        this.$router.push({ name: 'liuhecondition', params: { curpath: 'liuhecondition', title: '历史开奖条件查询' } })
        $('.fixednav').hide()
        $('#homeweb').removeClass('bgcolor')
        localStorage.setItem('currentpathname', '历史开奖条件查询')
      } else if (type === 'liuhecommonsense') {
        this.$router.push({ name: 'liuhecommonsense', params: { curpath: 'liuhecommonsense', title: '六合常识查询' } })
        $('.fixednav').hide()
        $('#homeweb').removeClass('bgcolor')
        localStorage.setItem('currentpathname', '六合常识查询')
      } else if (type === 'liuhelotterydate') {
        this.$router.push({ name: 'liuhelotterydate', params: { curpath: 'liuhelotterydate', title: '搅珠日期查询' } })
        $('.fixednav').hide()
        $('#homeweb').removeClass('bgcolor')
        localStorage.setItem('currentpathname', '搅珠日期查询')
      } else if (type === 'liuhelongestnotopen') {
        this.$router.push({ name: 'liuhelongestnotopen', params: { curpath: 'liuhelongestnotopen', title: '最久不开' } })
        $('#homeweb').removeClass('bgcolor')
        $('.fixednav').hide()
        localStorage.setItem('currentpathname', '最久不开')
      } else if (type === 'applydisclaimers') {
        $('#homeweb').addClass('bgcolor')
        this.$router.push({ path: '/applydisclaimers' })
      } else if (type === 'contactus') {
        $('#homeweb').addClass('bgcolor')
        this.$router.push({ path: '/contactus' })
      } else if (type === 'faq') {
        $('#homeweb').addClass('bgcolor')
        this.$router.push({ path: '/faq' })
      }
    }
  }
}
</script>
<style lang="scss">
  .home{
    position: relative;
      .bgcolor{
       background: white;
       color: #CC0033;
      }
      .puntershead{
        .container{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .puntersheadleft {
            height: 44px;
            width: 110px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .logoimg{
              width: 36px;
              height:36px;
              border-radius: 18px;
              overflow: hidden;
            }
            .logotitle{
              font-weight: 700;
              font-size: 18px;
            }
          }
          .puntersheadright{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .downloadbtn{
              border: 1px solid black;
              height: 36px;
              line-height: 36px;
              border-radius: 5px;
              text-align: center;
              margin-right: 8px;
              font-size: 14px;
              padding:0 10px;
              cursor:pointer;
            }
            .downloadIOS{
              border: 1px solid black;
              height: 36px;
              line-height: 36px;
              border-radius: 5px;
              text-align: center;
              font-size: 14px;
              padding:0 10px;
              cursor:pointer;
            }
            .exchangearea{
              .notlogin{
                  ul{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    li{
                      display: flex;
                      align-items: center;
                      cursor: pointer;
                      a{
                        display: block;
                        padding: 0 15px;
                        height: 18px;
                        line-height: 18px;
                        text-decoration: none;
                      }
                      span{
                        display: block;
                        height: 12px;
                        line-height: 12px;
                        align-self: center;
                        overflow: hidden;
                      }
                    }
                  }
              }
              .islogin{
                display: none;
                ul{
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  li{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    justify-content: space-between;
                    padding: 0 6px;
                    b{
                      font-weight: normal;
                      margin-left: 3px;
                    }
                    span{
                      display: block;
                      height: 12px;
                      line-height: 12px;
                      align-self: center;
                      overflow: hidden;
                    }
                  }
                }
              }
            }
            .helpcenter{
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              cursor:pointer;
            }
          }
        }
      }
      .puntersnav{
        background:#CC0033;
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color:white;
          font-weight: bold;
          .x-act{
            background:white;
            color:#CC0033;
          }
          .active{
            color:black;
          }
          .navleft{
            display: flex;
            justify-content: space-between;
            align-items: center;
            li{
              a{
                text-decoration: none;
                display: block;
                padding:0 10px;
                height: 44px;
                line-height: 44px;
                cursor:pointer;
                text-align: center;
              }
            }
          }
          .navright{
            position: relative;
            right:50px;
            .selectnav{
              display: flex;
              justify-content: space-between;
              align-items: center;
              span{
                height: 44px;
                line-height: 44px;
                display: block;
              }
            }
            .fixednav{
              position: absolute;
              right:0;
              top:45px;
              font-weight: normal;
              display: none;
              z-index: 2;
              .bground{
                background:#FDF5E6;
                color:black;
              }
              li{
                a{
                  text-decoration: none;
                  width: 109px;
                  display: block;
                  line-height: 26px;
                  height:26px;
                  text-align: center;
                  margin-bottom: 2px;
                  background: #CC0033;
                  font-size: 12px;
                  cursor:pointer;
                }
              }
            }
          }
        }
      }
      .puntersmain{
        .container {
          min-height: 710px;
          position: relative;
          .liaocai{
            position: absolute;
            right: 0;
            top:200px;
            width: 40px;
            img{
              width: 100%;
              cursor:pointer;
            }
          }
        }
      }
      .puntersfooter{
        background: #4A4A4A;
        .container {
          ul{
            margin: 0 auto;
            width: 500px;
            display: flex;
            justify-content: space-between;
            height: 44px;
            align-items: center;
            color:white;
            margin-bottom: 10px;
            li{
              cursor:pointer;
            }
          }
          .imglink{
            margin: 0 auto;
            padding:20px 0;
            width: 500px;
            height: 44px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    .loginwindow{
      display: none;
      position: absolute;
      left:0;
      top:0;
      width: 100%;
      height: 100%;
    }
    .registerwindow{
      display: none;
      position: absolute;
      left:0;
      top:0;
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="alert_p">
     <div class="logindialog">
        <div class="dialogheader">
          <h3>登录</h3>
          <span @click="closealert">×</span>
        </div>
        <div class="dialogmain">
          <div class="formeleone">
          <label>用户名</label>
            <div class="formcont">
            <div class="formbox"><input type='text' placeholder="输入手机号/用户名"></div>
            </div>
          </div>
          <div class="formeletwo">
            <label>密&emsp;码</label>
            <div class="formcont">
            <div class="formbox"><input type='password' placeholder="输入密码"></div>
            </div>
          </div>
          <p @click="clickforgetpwd">忘记密码？</p>
        </div>
        <div class="dialogfooter">
          <p>没有账户？<span @click="clickregister">免费注册</span></p>
          <div>登录</div>
        </div>
     </div>
    <Forgetpwd class="forgetpwdwindow"></Forgetpwd>
    <Register class="registerwindow"></Register>
  </div>
</template>

<script>
import $ from 'jquery'
import Forgetpwd from '@/components/Forgetpwd/index.vue'
import Register from '@/components/Register/index.vue'
export default {
  name: 'loginindex',
  components: {
    Forgetpwd: Forgetpwd,
    Register: Register
  },
  methods: {
    closealert () {
      $('.alert_p').hide()
    },
    clickforgetpwd () {
      $('.logindialog').hide()
      $('.forgetpwdwindow').show()
    },
    clickregister () {
      $('.logindialog').hide()
      $('.registerwindow').show()
    }
  }
}
</script>

<style lang="scss">
  .alert_p{
    background: rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 30;
    .logindialog{
      position: absolute;
      left:0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: white;
      width: 520px;
      height: 320px;
      .dialogheader{
        height:44px;
        border-bottom: 2px solid #F4F4F4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3{
          flex:8.5;
          height:44px;
          text-align: center;
          line-height: 44px;
          font-size: 22px;
          color:#585858;
        }
        span{
          display: block;
          flex: 1.5;
          height:44px;
          line-height: 44px;
          text-align: center;
          font-size: 28px;
          cursor: pointer;
        }
      }
      .dialogmain{
        .formeleone{
          margin:30px 0 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          label{
             flex: 1.5;
             text-align: right;
             font-size: 18px;
           }
          .formcont{
            flex: 8.5;
            margin-left: 16px;
            .formbox{
              width: 90%;
              border:2px solid #9B9B9B;
              border-radius: 5px;
              overflow: hidden;
              input{
                height: 45px;
                width: 100%;
                font-size: 18px;
                border: none;
                outline: none;
              }
            }
          }
        }
        .formeletwo{
          display: flex;
          justify-content: space-between;
          align-items: center;
          label{
            flex: 1.5;
            text-align: right;
            font-size: 18px;
          }
          .formcont{
            flex: 8.5;
            margin-left: 16px;
            .formbox{
              width: 90%;
              border:2px solid #9B9B9B;
              border-radius: 5px;
              overflow: hidden;
              input{
                height: 45px;
                width: 100%;
                font-size: 18px;
                border: none;
                outline: none;
              }
            }
          }
        }
        p{
          margin: 0 auto;
          width: 86%;
          text-align: right;
          color:#9B9B9B;
          cursor:pointer;
        }
      }
      .dialogfooter{
        margin: 36px;
        display: flex;
        width: 86%;
        justify-content: space-between;
        align-items: center;
        p{
          flex:7;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          span{
            color:#5597E1;
            margin:0 20px;
            cursor: pointer;
          }
        }
        div{
          flex:3;
          border:1px solid grey;
          border-radius: 5px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          background: #CA4C49;
          color:#fff;
        }
      }
    }
    .forgetpwdwindow{
      display: none;
    }
  }
</style>

<template>
   <div class="forgetpwddialog">
     <div class="dialogheader">
       <h3>忘记密码</h3>
       <span @click="closealert">×</span>
     </div>
     <div class="dialogmain">
       <div class="formeleone">
         <label>手机号</label>
         <div class="formcont">
           <div class="formbox"><input type='text' placeholder="输入手机号码"></div>
         </div>
       </div>
       <div class="formeletwo">
         <label>验证码</label>
         <div class="formcont">
           <div class="formbox"><input type='text' placeholder="输入验证码"></div>
           <div class="audiobtn">获取语音验证码</div>
         </div>
       </div>
       <div class="formelethree">
         <label>密&emsp;码</label>
         <div class="formcont">
           <div class="formbox"><input type='password' placeholder="密码(长度6-16位)"></div>
         </div>
       </div>
       <div class="formelefour">
         <label>确认密码</label>
         <div class="formcont">
           <div class="formbox"><input type='password' placeholder="请再次输入密码"></div>
         </div>
       </div>
       <div class="submitbtn">提交</div>
     </div>
   </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'forgetindex',
  methods: {
    closealert () {
      $('.alert_p').hide()
      $('.forgetpwddialog').hide()
    }
  }
}
</script>

<style lang="scss">
  .forgetpwddialog{
    position: absolute;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: white;
    width: 520px;
    height: 400px;
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
      label{
        color:#CA4C49;
      }
      .formeleone{
        margin:30px 0 0 0;
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
        margin:20px 0 0 0;
        label{
          flex: 1.5;
          text-align: right;
          font-size: 18px;
        }
        .formcont{
          flex: 8.5;
          margin-left: 16px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .formbox{
            width: 55%;
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
          .audiobtn{
            margin-left: 16px;
            width: 30%;
            height: 45px;
            border: 2px solid grey;
            border-radius: 5px;
            background: #169BD5;
            color:#fff;
            text-align: center;
            line-height: 45px;
          }
        }
      }
      .formelethree{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:20px 0 0 0;
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
      .formelefour{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:20px 0;
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
      .submitbtn{
        width: 30%;
        border:1px solid grey;
        border-radius: 5px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        background: #169BD5;
        color:#fff;
        margin:0 auto;
      }
    }
  }
</style>

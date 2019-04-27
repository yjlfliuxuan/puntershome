<template>
  <div class="alert_p">
  <div class="registerdialog">
    <div class="dialogheader">
      <h3>用户注册</h3>
      <span @click="closealert">×</span>
    </div>
    <div class="dialogmain">
      <el-steps :active="active" space='200' simple>
        <el-step title="创建用户" icon="newel-icon-xuhao-1">1</el-step>
        <el-step title="填写身份信息" icon="newel-icon-xuhao1">2</el-step>
        <el-step title="完成" icon="newel-icon-xuhao">3</el-step>
      </el-steps>
      <div class="createuser" v-if="active===0">
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
        <div class="nextstep" @click="next">下一步</div>
      </div>
      <div class="addinfo" v-if="active===1">
        <div class="formelefour">
          <label>用户昵称</label>
          <div class="formcont">
            <div class="formbox"><input type='text' placeholder="请输入用户昵称"></div>
          </div>
        </div>
        <div class="formelethree">
          <label>密&emsp;码</label>
          <div class="formcont">
            <div class="formbox"><input type='password' placeholder="密码(长度6-16位)"></div>
          </div>
        </div>
        <div class="formelefive">
          <label>邀请码</label>
          <div class="formcont">
            <div class="formbox"><input type='text' placeholder="请输入邀请码"></div>
          </div>
        </div>
        <p>填写邀请码，可获得5.88元注册奖励。</p>
        <div class="submitbutton" @click="next">提交</div>
      </div>
      <div class="done" v-if="active===2">
        <div>
           <img src="@/images/registersuccess.png">
        </div>
        <p>恭喜您，注册成功！</p>
        <p>3S后自动跳转至首页页面……</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'registerindex',
  data () {
    return {
      active: 0,
      timer: ''
    }
  },
  methods: {
    closealert () {
      this.active = 0
      clearTimeout(this.timer)
      $('.alert_p').hide()
    },
    next () {
      if (this.active++ > 2) this.active = 0
      if (this.active === 1) {
        $('.registerdialog').height('430')
      } else {
        $('.registerdialog').height('400')
      }
      if (this.active === 2) {
        this.timer = setTimeout(function () {
          $('.alert_p').hide()
          this.$router.push('/homepage')
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
  .alert_p {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: relative;
    .registerdialog {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: white;
      width: 520px;
      height: 400px;
      overflow: hidden;
      .dialogheader {
        height: 44px;
        border-bottom: 2px solid #F4F4F4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          flex: 8.5;
          height: 44px;
          text-align: center;
          line-height: 44px;
          font-size: 22px;
          color: #585858;
        }
        span {
          display: block;
          flex: 1.5;
          height: 44px;
          line-height: 44px;
          text-align: center;
          font-size: 28px;
          cursor: pointer;
        }
      }
      .dialogmain{
        width: 100%;
        margin:20px auto 40px;
        .el-steps--simple {
          padding: 13px 2%;
          border-radius: 4px;
          background: #f5f7fa;
        }
        .el-step__title.is-process {
          font-weight: 700;
          color: #CA4C49;
        }
        .el-step__head.is-process {
          color: #CA4C49;
          border-color: #CA4C49;
        }
        .el-step.is-simple:nth-of-type(1) {
           display: -webkit-box;
           display: -ms-flexbox;
           display: flex;
           -webkit-box-align: center;
           -ms-flex-align: center;
           align-items: center;
           position: relative;
           -ms-flex-negative: 1;
           flex-shrink: 1;
           flex-basis: 33% !important;
           margin-left: 20px;
         }
        .el-step.is-simple:nth-of-type(2) {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          position: relative;
          -ms-flex-negative: 1;
          flex-shrink: 1;
          flex-basis: 45% !important;
        }
        .createuser{
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
                cursor: pointer;
              }
            }
          }
        }
        .addinfo{
          label{
            color:#CA4C49;
          }
          .formelethree{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin:20px 0 0 0;
            label{
              flex: 2;
              text-align: right;
              font-size: 18px;
            }
            .formcont{
              flex: 6.5;
              margin-left: 16px;
              .formbox{
                width: 80%;
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
              flex: 2;
              text-align: right;
              font-size: 18px;
            }
            .formcont{
              flex: 6.5;
              margin-left: 16px;
              .formbox{
                width: 80%;
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
          .formelefive{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin:20px 0;
            label{
              flex: 2;
              text-align: right;
              font-size: 18px;
            }
            .formcont{
              flex: 6.5;
              margin-left: 16px;
              .formbox{
                width: 80%;
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
            margin:0 auto 20px;
            width: 70%;
            text-align: center;
          }
          .submitbutton{
            width: 30%;
            border:1px solid grey;
            border-radius: 5px;
            height: 38px;
            line-height: 38px;
            text-align: center;
            background: #169BD5;
            color:#fff;
            margin:0 auto;
            cursor: pointer;
          }
        }
        .done{
          div{
            text-align: center;
            width: 50%;
            margin:30px auto;
          }
          p{
            width: 100%;
            text-align: center;
          }
        }
        .nextstep{
          margin: 30px 7.5% 0 0;
          float:right;
          border:1px solid grey;
          border-radius: 5px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          background: #CA4C49;
          color:#fff;
          width:30% ;
          cursor: pointer;
        }
      }
    }
  }
</style>

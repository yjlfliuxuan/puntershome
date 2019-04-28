<template>
  <div class="faq">
    <div class="faqbox">
    <div class="faqhead">
      <p class="faqheadleft">
        <span>帮助中心-</span>
        <span class="enableval">常见问题</span>
      </p>
      <span class="faqclose">×</span>
    </div>
    <div id="tab">
      <h2 class="title">
        <span class="tab01"><i class="newel-icon-arrow-fill-right defaultcolor"></i>常见问题</span>
        <hr>
        <span class="tab02"><i class="newel-icon-arrow-fill-right"></i>在线客服</span>
        <p class="tab02list">
          <i class="kefu01">客服1</i>
          <i class="kefu02">客服2</i>
        </p>
      </h2>
      <div class="contentarea">
      <div class="content">
        <pre style="font-size: 14px;padding-top: 20px;">
    什麼是心水?
    指用戶分享的當期購彩組合或資料。
    什麼是專家?
    指在六合彩方面有專門研究或特長的人,利用經驗為廣大彩民朋友提供精準好料。
    怎樣成為專家?
    通過在“人人料”模塊每期發佈心水,最近10場勝利7場或以上,即可申請成為專家。
    成為專家有什麼好處?
    成為專家之後,可參加每月專家大獎賞,贏取豐厚獎
    什麼是人人料?
    指除專家以外的會員可在本欄目分享心水,達到條件的可贏取成為專家的機會
    什麼是查詢助手?
    指開獎記錄查詢’,‘條件査詢’,冷熱號查詢等相關資訊查詢。
    什麼是六合圖庫?
    指免費提供全年六合彩圖庫。
    什麼是趣味遊戲?
    指一些玩遊戲抽取每期靚碼。
    什麽是幽默猜测?
    指用戶可參與每期幽默猜测投票,知己知彼
    什麼是老黃歷?
    指中國傳統農曆曆法,帶有六合吉數和波色。
    什麼是全年玄機?
    指全年固定的六合玄機破解。
    什麼是聊碼大廳?
    用戶可以針對當期心水進行聊天室的溝通。
    如在使用的過程中遇到任何問題,請登錄賬戶后在個人中心的站內信聯繫我們,感謝支持!*
        </pre>
      </div>
      <div>
        <p class="charcat"></p>
        <textarea></textarea>
        <button>发送</button>
      </div>
      <div>
        <p class="charcat"></p>
        <textarea></textarea>
        <button>发送</button>
      </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'index',
  mounted () {
    $('.faqclose').click(function () {
      $('.faq').hide()
    })
    $('.tab01').click(function () {
      $('.enableval').html($(this).text())
      $('.tab02list').hide()
      $(this).children('i').addClass('defaultcolor')
      $('.tab02').children('i').removeClass('defaultcolor')
      $('.contentarea').children('div').eq(0).addClass('content').siblings('div').removeClass('content')
    })
    $('.tab02').click(function () {
      $('.enableval').html($(this).text())
      $(this).children('i').addClass('defaultcolor')
      $('.tab01').children('i').removeClass('defaultcolor')
      $('.tab02list').show()
      $('.kefu01').css({ 'background': 'white', 'color': 'black' })
      $('.kefu02').css({ 'background': '#2D2D2D', 'color': 'white' })
      $('.contentarea').children('div').eq(1).addClass('content').siblings('div').removeClass('content')
    })
    $('.kefu01').click(function () {
      $('.enableval').html($('.tab02').text())
      $(this).css({ 'background': 'white', 'color': 'black' })
      $('.kefu02').css({ 'background': '#2D2D2D', 'color': 'white' })
      $('.contentarea').children('div').eq(1).addClass('content').siblings('div').removeClass('content')
    })
    $('.kefu02').click(function () {
      $('.enableval').html($('.tab02').text())
      $(this).css({ 'background': 'white', 'color': 'black' })
      $('.kefu01').css({ 'background': '#2D2D2D', 'color': 'white' })
      $('.contentarea').children('div').eq(2).addClass('content').siblings('div').removeClass('content')
    })
  }
}
</script>

<style lang="scss">
 .faq{
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,0.2);
   padding:60px 0;
   .faqbox{
     width: 80%;
     margin: 0 auto;
     .faqhead{
       display: flex;
       justify-content: space-between;
       align-items: center;
       background: #CC4B45;
       height: 70px;
       .faqheadleft{
         margin-left: 30px;
         font-size: 24px;
         color:white;
       }
       .faqclose{
         margin-right: 20px;
         font-size: 32px;
         cursor: pointer;
       }
     }
     #tab{
       height: 520px;
       display: flex;
       justify-content: space-between;
       overflow: hidden;
       border: 1px solid black;
       .title{
         flex: 2;
         background:#2D2D2D;
         color:white;
         hr{
           color:#727272;
           width: 80%;
           margin-left: 10%
         }
         span{
           height: 54px;
           display: block;
           line-height: 54px;
           padding-left: 10%;
           cursor: pointer;
           i{
             color:#2D2D2D;
             font-size: 14px;
           }
           .defaultcolor{
             color:#CC4B45;
           }
         }
         p{
           display: none;
           i{
             font-style: normal;
             display: block;
             height: 40px;
             line-height: 40px;
             text-align: center;
             cursor: pointer;
           }
         }
       }
       .contentarea{
         flex: 8;
         div{
           display: none;
           position: relative;
           .charcat{
             width: 100%;
             height: 80%;
             background: rgba(0,0,0,0.2);
             overflow-y: auto;
             border-bottom: 3px solid black;
           }
           textarea{
             width: 100%;
             height: 20%;
             resize:none;
           }
           button{
             position: absolute;
             right: 0;
             bottom: 0;
           }
         }
         .content{
           background: white;
           height: 520px;
           display: block;
         }
       }
     }
   }
 }
</style>

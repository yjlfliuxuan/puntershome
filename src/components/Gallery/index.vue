<template>
  <div class="gallery">
    <div class="galleryhead">
      <h3>六合图库</h3>
      <div>我的收藏</div>
    </div>
    <div class="hottuijian">
      <h3>热门推荐</h3>
      <ul>
        <li>独家爆料1</li>
        <li>独家爆料2</li>
      </ul>
    </div>
    <div v-for="(item,index) in gallerylist" :key="index" class="gallerydetail">
      <h3>{{item.title}}</h3>
      <ul>
        <li v-for="(items,indexs) in item.list" :key="indexs">{{items}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      gallerylist: []
    }
  },
  created () {
    axios.get('http://localhost:8080/static/gallerylist.json').then(res => {
      console.log(res)
      this.gallerylist = res.data
    })
  }
}
</script>

<style lang="scss">
.gallery{
  width: 90%;
  margin: 10px auto;
  padding: 0 20px;
  background: #F2F2F2;
  .galleryhead{
    border-bottom: 1px solid #E9E9E9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    h3{
     width: 110px;
      height: 34px;
      line-height: 34px;
      text-align: left;
      color:#CA4C49;
    }
   div{
     width: 110px;
     height: 34px;
     line-height: 34px;
     text-align: center;
     border: 1px solid #CA4C49;
     background: #CA4C49;
     border-radius: 5px;
     color: white;
     cursor: pointer;
     font-size: 14px;
   }
  }
  .hottuijian{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #F2F2F2;
    h3{
      font-size: 20px;
      color:#FF0000;
      height: 24px;
      line-height: 24px;
    }
    ul{
      display: flex;
      justify-content: flex-start;
      justify-items: center;
      margin-left: 20px;
      padding: 10px 0;
       li{
         margin-right: 10px;
         height: 24px;
         line-height: 24px;
       }
    }
  }
  .gallerydetail{
    display: flex;
    justify-content: space-between;
    padding:15px 0;
    border-bottom: 1px solid #E9E9E9;
    h3{
      flex: 0.6;
      text-align: center;
    }
    ul{
      flex: 9.4;
      li{
        float:left;
        width: 15%;
      }
    }
  }
}
</style>

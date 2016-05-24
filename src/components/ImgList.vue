<template>
  <div class="img-list-wrapper">
    <ul class="img-list">
      <li class="img-item" v-for="img in imgArr" track-by="$index">
        <img v-bind:src="exUrl + img.url" />
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      imgArr:{//表单内容
        coerce: function(val){
          return val;
        }
      },
      exUrl:{
        type: String,
        default: function (){
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  ul {
    margin: 10px auto;
    padding: 0;
    width: 600px;
    overflow: hidden;
  }
  li{
    float: left;
    width:100px;
    height:100px;
    overflow: hidden;
  }
  li img {
    height:100%
  }
</style>

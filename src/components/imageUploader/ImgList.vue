<template>
  <div class="img-list-wrapper">
    <ul class="img-list">
      <li class="img-item" v-for="img in imgArr" track-by="$index">
        <img v-bind:src="img.url" />
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      imgArr: {
        coerce: function (val) {
          return val
        }
      },
      exUrl: {
        type: String,
        default: function () {
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
    margin: 0;
    padding: 0;
  }
  li{
    float: left;
    height:100px;
    max-width: 110px;
    overflow: hidden;
  }
  li img {
    margin: 0;
    padding: 0;
    height:100%
  }
</style>

<template>
  <div class="show-wrapper" v-show="isShow">
    <div class="name">
      <p>{{ name }}</p>
    </div>
    <div class="url" v-on:click="copyUrl(url)">
      <p>{{ url }}</p>
    </div>
  </div>
</template>
<script>
import Electron from '../mixins/electron'
export default {
  props: {
    name: String,
    url: String,
    info: String,
    isShow: Boolean
  },
  methods: {
    copyUrl: function (text) {
      Electron.copyUrl(text)
      window.alert('已复制到黏贴板')
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/base.scss";
.show-wrapper{
  line-height: 30px;
  color: $clouds;
  font-style: Montserrat;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: $clouds;
  z-index: 1100;
  box-shadow:0 1px 1px rgba(0, 0, 0, 0.7);
}
.show-wrapper::after,
.show-wrapper::before {
  content:"";
  position:relative;
  z-index:-1;
  bottom:15px;
  left:5px;
  width:50%;
  height:20%;
  box-shadow:0 15px 10px rgba(0, 0, 0, 0.7);
  transform:rotate(-3deg);
}
.show-wrapper::before {
  transform:rotate(2deg);
  left:auto;
}
.name,.url {
  overflow: hidden;
}
.name{
  background-color: $peterRiver;
  height: 25px;
  font-size: 14px;
}
.url{
  background-color: $belizeHole;
  height: 25px;
  font-size: 12px;
}
</style>

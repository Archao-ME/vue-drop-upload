<template>
  <div class="window-buttons">
    <ul class="window-buttons-ul">
      <li class="close-button" v-on:click = "onClose()"></li>
      <li class="min-button" v-on:click = "onMin()"></li>
      <li class="zoom-button" v-on:click = "onZoom()"></li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    onClose: function () {
      this.$dispatch('onCloseWindow', true)
    }
  }
}
</script>
<style lang="scss">
@import "../assets/base.scss";
.window-buttons-ul{
  li {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin: 0 5px;
    padding: 0;
    overflow: hidden;
    float: left;
  }
  li.close-button {
    background-color: $alizarn;
  }
  li.min-button {
    background-color: $sunFlower;
  }
  li.zoom-button {
    background-color: $emerald;
  }
}
.close-button{
}
</style>

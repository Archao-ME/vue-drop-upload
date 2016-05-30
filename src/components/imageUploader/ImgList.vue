<template>
  <div class="img-list-wrapper">
    <ul class="img-list">
      <li class="img-item" v-for="img in imgArr" track-by="$index" v-on:click="onItemClick(img)">
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
    },
    methods: {
      onItemClick: function (item) {
        this.$dispatch('onItemClick', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";
  ul {
    margin: 10px auto;
    padding: 0;
    height: 500px;
    overflow-y: scroll;
    margin: 0;
    padding: 0;
  }
  li{
    background-color: $belizeHole;
    width:100px;
    max-height: 100px;
    overflow: hidden;
    float:left;
  }
  li img {
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
  }
</style>

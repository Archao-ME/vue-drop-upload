<template>
  <div id="app">
    <!-- TODO: 关闭按钮  -->
    <div class="window-buttons">
      <window-buttons></window-buttons>
    </div>
    <div id="logo">
      <logo></logo>
    </div>
    <image-uploader-index></image-uploader-index>
</template>
<script>
import Logo from './components/VueLogo'
import ImageUploaderIndex from './components/ImageUploaderIndex'
import WindowButtons from './components/WindowButtons'
const {ipcRenderer} = window.require('electron')
export default {
  components: {
    Logo,
    ImageUploaderIndex,
    WindowButtons
  },
  events: {
    onCloseWindow: function (msg) {
      ipcRenderer.send('close-main-window', true)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/base.scss";
* {
  padding:0;
  margin:0;
}
#logo {
  z-index: 1002;
}
html,body {
  -webkit-app-region: drag;
}
html {
  overflow: hidden;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $wetAsphalt;
}
#app {
  color: $midNightBlue;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  height:100vh;
}
#app a {
  color: #42b983;
  text-decoration: none;
}
.logo {
  width: 100px;
  height: 100px
}
.window-buttons {
  height: 10px;
  margin: 5px 3px;
}
</style>

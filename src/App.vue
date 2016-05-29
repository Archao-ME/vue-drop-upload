<template>
  <div id="app">
    <logo></logo>
    <image-uploader-index></image-uploader-index>
</template>
<script>
import Logo from './components/VueLogo'
import ImageUploaderIndex from './components/ImageUploaderIndex'
export default {
  components: {
    Logo,
    ImageUploaderIndex
  }
}
</script>
<style lang="scss">

$wetAsphalt: #34495e;
$midNightBlue: #2c3e50;
$wisteria: #8e44ad;
$amethyst: #9b59b6;
$clouds: #ecf0f1;
$sliver: #bdc3c7;
$concrete: #95a5a6;
$asbestos: #7f8c8d;
$belizeHole: #2980b9;
$peterRiver: #3498db;
* {
  padding:0;
  margin:0;
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
  color: #2c3e50;
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
</style>

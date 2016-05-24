<template>
  <div id="app">
    <logo></logo>
    <image-uploader id='imgUploader' name='ImageUploader' form-data='{"token":"e2Ag_f0qlB42zWMJ8T-ekW1u7wGCCKo2vLMaJeOz:ZgH9VuRVEK1eGVwgbSOmc4W43eA=:eyJzY29wZSI6ImV4aGliaXRpb24iLCJkZWFkbGluZSI6MTQ2NDM1OTQ1Mn0="}' action='http://up.qiniu.com/' buttontext='上传'>
      <textarea slot="drop-main" v-model="uploadedFiles | json"  placeholder="Write a comment or drag your files here..."></textarea>
        <p class="drag-info" slot="drop-info" v-if="fileProgress">
          上传进度:{{fileProgress}}
        </p>
        <p class="drag-info" slot="drop-info" v-else>
          拖入文件进行上传
        </p>
    </image-uploader>
    <img-list :img-arr="uploadedFiles" ex-url="http://7xjzrl.com2.z0.glb.qiniucdn.com/">
    </img-list>
</template>
<script>
import Logo from './components/VueLogo'
import ImageUploader from './components/ImageUploader'
import ImgList from './components/ImgList'
export default {
  components: {
    Logo,
    ImageUploader,
    ImgList
  },
  data: function (){
    return {
      fileProgress: 0,
      fileName: '',
      uploadedFiles: []
    }
  },
  events: {
    //进度和完成监听事件
    'onFileProgress': function (msg) {
      this.fileProgress = msg.percent
    },
    'onComplete': function (msg) {
      this.fileName = msg.key
      var fileItem  = {name:msg.key,url:msg.key}
      this.uploadedFiles.push(fileItem)
      this.fileProgress = 0
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
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

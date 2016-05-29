<template>
  <image-uploader id='imgUploader' name='ImageUploader' :form-data="formData" action='http://up.qiniu.com/'>
    <div class="whole-app" slot="drop-main">
      <img-list :img-arr="uploadedFiles"></img-list>
    </div>
  </image-uploader>
  <!-- TODO: 提示上传样式  -->
  <div class="pin-hover" v-show="dragover"></div>
  <div :style="loadingStyle">
  </div>

</template>
<script>
import ImageUploader from './ImageUploader/ImageUploader'
import ImgList from './ImageUploader/ImgList'
export default {
  components: {
    ImageUploader,
    ImgList
  },
  data: function () {
    return {
      dragover: false,
      fileProgress: 0,
      fileName: '',
      uploadedFiles: [],
      exUrl: 'http://7xj0ss.com1.z0.glb.clouddn.com/',
      formData: {
        token: 'e2Ag_f0qlB42zWMJ8T-ekW1u7wGCCKo2vLMaJeOz:ZgH9VuRVEK1eGVwgbSOmc4W43eA=:eyJzY29wZSI6ImV4aGliaXRpb24iLCJkZWFkbGluZSI6MTQ2NDM1OTQ1Mn0='
      },

      // TODO:阴影
      loadingStyle: {
        width: '0%',
        height: '3px',
        backgroundColor: '#3498db',
        position: 'fixed',
        top: 0
      }
    }
  },
  events: {
    'onItemClick': function (msg) {
      console.log(msg)
    },
    'onFileProgress': function (msg) {
      this.fileProgress = msg.percent
      this.loadingStyle.width = this.fileProgress + '%'
    },
    'onComplete': function (msg) {
      if (msg.error) {
        window.alert(msg.error)
      } else {
        this.fileName = msg.key
        var fileItem = {name: msg.key, url: this.exUrl + msg.key}
        this.uploadedFiles.push(fileItem)
        this.fileProgress = 0
        this.loadingStyle.width = '0%'
      }
    },
    _onDrop: function (msg) {
      this.dragover = false
      this.$http.get('http://api.pikach.com/qiniu').then(response => {
        msg.formData.token = response.data.body
        msg.fileUpload()
      })
    },
    '_onDragover': function (msg) {
      this.dragover = true
    },
    '_onDragleave': function (msg) {
      this.dragover = false
    }
  }
}
</script>
<style lang="scss">
.whole-app{
  position: fixed;
  top:20vh;
  left:0;
  height: 80vh;
  width: 100vw;
}
.pin-hover{
  width: 30px;
  height: 30px;
  background-color: #ccc;
  position: fixed;
  top:30px;
  left: 30px;
}
</style>

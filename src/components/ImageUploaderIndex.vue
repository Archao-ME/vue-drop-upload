<template>
  <image-uploader id='imgUploader' name='ImageUploader' :form-data="formData" action='http://up.qiniu.com/'>
    <div class="whole-app" slot="drop-main">
      <img-list :img-arr="uploadedFiles"></img-list>
    </div>
  </image-uploader>
  <!-- TODO: 提示上传样式  -->
  <div class="pin-hover" v-show="dragover">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 25 25" fill="#27ae60" preserveAspectRatio="xMidYMid"><path d="M17.812 23c-7.812 0-7.812-8-7.812-8h-3l4.979-4 5.021 4h-3s-.812 6.094 3.812 8zm1.667-14.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.302c-.275-.717-.46-1.404-.578-2h-2.724c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-2.518c.062.62.21 1.329.499 2h2.019c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z"/></svg>
  </div>
  <div :style="loadingStyle">
  </div>
  <item-show :is-show="itemShow" :name ="itemInfo.name" :url ="itemInfo.url"></item-show>
</template>
<script>
import ImageUploader from './ImageUploader/ImageUploader'
import ImgList from './ImageUploader/ImgList'
import itemShow from './ImageUploader/ItemShow'
export default {
  components: {
    ImageUploader,
    ImgList,
    itemShow
  },
  data: function () {
    return {
      itemShow: false,
      itemInfo: {},
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
        zIndex: 9999,
        width: '0%',
        height: '3px',
        backgroundColor: '#1abc9c',
        position: 'fixed',
        top: 0
      }
    }
  },
  events: {
    'onItemClick': function (msg) {
      // msg -> name url
      this.itemInfo = msg
      this.itemShow = true
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
@import "../assets/base.scss";
.whole-app{
  position: relative;
  z-index: 1002;
  left:0;
  height: 80vh;
  width: 100vw;
}
.pin-hover{
  z-index: 1001;
  position: relative;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

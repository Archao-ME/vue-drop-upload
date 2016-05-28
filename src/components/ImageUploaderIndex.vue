<template>
  <image-uploader id='imgUploader' name='ImageUploader' :form-data="formData" action='http://up.qiniu.com/' buttontext='上传'>
    <textarea slot="drop-main" v-model="uploadedFiles | json"  placeholder="Write a comment or drag your files here..."></textarea>
      <p class="drag-info" slot="drop-info" v-if="fileProgress">
        上传进度:{{fileProgress}}
      </p>
      <p class="drag-info" slot="drop-info" v-else>
        拖入文件进行上传
      </p>
  </image-uploader>
  <img-list :img-arr="uploadedFiles" ex-url="7xj0ss.com1.z0.glb.clouddn.com">
  </img-list>
</template>
<script>
import ImageUploader from './ImageUploader/ImageUploader'
import ImgList from './ImageUploader/ImgList'
export default {
  components:{
    ImageUploader,
    ImgList
  },
  data: function (){
    return {
      fileProgress: 0,
      fileName: '',
      uploadedFiles: [],
      formData: {
        token: 'e2Ag_f0qlB42zWMJ8T-ekW1u7wGCCKo2vLMaJeOz:ZgH9VuRVEK1eGVwgbSOmc4W43eA=:eyJzY29wZSI6ImV4aGliaXRpb24iLCJkZWFkbGluZSI6MTQ2NDM1OTQ1Mn0='
      }
    }
  },
  events: {
    /**
     * [msg export 2 object , formData and fileUpload(),you can upload files after dragDrop the file in the ImageUploader]
     * @param  {[type]} msg [description]
     * @return {[type]}     [description]
     */
    _onDrop: function(msg){
      this.$http.get('http://127.0.0.1:3000/qiniu').then(response=>{
        msg.formData.token = response.data.body
        msg.fileUpload()
      })
    },
    'onFileProgress': function (msg) {
      console.log(msg)
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

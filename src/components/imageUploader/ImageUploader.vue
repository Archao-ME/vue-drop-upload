<template>
  <div v-bind:class="classObject" @drop="handleDrop" @dragover="handleDragover" @dragleave="handleDragleave">
    <div v-bind:class="{'is-drag-over':isDragOver}">
      <slot name="drop-main">
        <textarea  placeholder="Write a comment or drag your files here..."></textarea>
      </slot>
      <slot name="drop-info">
          <p class="drag-info">
            拖入文件进行上传
          </p>
      </slot>
    </div>
  </div>
</template>
<script>
import dragDrop from '../mixins/dragDrop'
export default{
  mixins: [dragDrop],
  props: {
    name: String,
    id: String,
    classObject: {
      type:Object,
      default: function () {
        return {
          'drop-wraper': true,
        }
      }
    },
    action: String,//上传地址
    formData: Object
  },
  data: function () {
    return {
      myFiles: [],
      isDragOver: false
    }
  },
  methods: {
    inputChanged: function () {
      this.myFiles = document.getElementById(this.id).files
    },
    fileUpload: function () {
      this._handleUplaod()
    },
    _handleUplaod: function () {
      var form = new window.FormData()
      var XHR = new window.XMLHttpRequest()
      form.append('Content-Type', 'multipart/form-data')
      form.append('file', this.myFiles)
      form.append("key",this.myFiles[0].name);
      for(var x in this.formData){
        form.append(x,this.formData[x]);
      }
      XHR.upload.addEventListener("progress",this._onProgress,false);
      XHR.addEventListener("load", this._onComplete, false);
      XHR.addEventListener("error", this._onFailed, false);
      XHR.addEventListener("abort", this._onCanceled, false);
      XHR.open("POST", this.action)
      XHR.send(form)
    },
    _onProgress: function(e) {
      e.percent = (e.loaded / e.total) * 100
      this.$dispatch('onFileProgress', e)
    },
    _onComplete: function(e){
      var fileObject = JSON.parse(e.srcElement.response)
      this.$dispatch('onComplete',fileObject)
    }
  },
  events: {
    onDrop: function(msg){
      this.myFiles = msg
      this.isDragOver = false
      this.classObject['is-drag-over'] = false
      var that = this
      this.$dispatch('_onDrop',{
        formData: that.formData,
        fileUpload: that.fileUpload.bind(this,msg),
      })
    },
    onDragover: function(msg){
      this.isDragOver = true
      this.classObject['is-drag-over'] = true
    },
    onDragleave: function(msg){
      this.isDragOver = false
      this.classObject['is-drag-over'] = false
    }
  }
}
</script>


<style>
*{
  box-sizing: border-box;
}
.drop-wraper{
  margin: 0;
  width: 100%;
}
.drop-wraper textarea{
  margin: 0;
  width: 100%;
  min-height:200px;
  border: 1px solid #ddd;
  border-bottom: 1px dashed #ddd;
  font-size: 14px;
  background-color: #fafafa;
  display: block;
}
.is-drag-over {
  box-shadow: #c9ff00 0 0 3px;
}
.drag-info {
  padding: 7px 10px;
  color: #767676;
  line-height: 16px;
  margin: 0;
  font-size: 12px;
  border: 1px solid #ddd;
  border-top: 0;
  background-color: #fafafa;
}
</style>

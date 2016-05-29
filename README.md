# vue 拖拽上传组件

ImageUploader.Vue

## DEMO
  [DEMO](http://blog.pikach.com/vue-drop-upload/)

## 使用方法

### 组件模板

```
<image-uploader id='imgUploader' name='ImageUploader' form-data="formData" action='http://up.qiniu.com/'>
  <textarea slot="drop-main" v-model="uploadedFiles | json"  placeholder="Write a comment or drag your files here..."></textarea>
    <p class="drag-info" slot="drop-info" v-if="fileProgress">
      上传进度:{{fileProgress}}
    </p>
    <p class="drag-info" slot="drop-info" v-else>
      拖入文件进行上传
    </p>
</image-uploader>

```
### 可配置
 - form-data : 表单数据,在Object类型
 - action : 服务端地址
 - slot : 目前两个，分别为 `drop-main`和`drop-info`
 - 可在父级调用的监听事件: 、
   - `$dispatch('onComplete',fileObject)` fileObject : 为服务返回的 JSON
   - `$dispatch('onFileProgress', e)` e : 上传进度监听
   - `$dispatch('_onDrop',msgObject)` msgObject = {formData: that.formData,fileUpload: that.fileUpload.bind(this,msg)}
 其中 `formData` 为暴露的提交表单，因此可以在上传前处理, `fileUpload` 为调用上传接口

### 父级事件调用例子:

```
events: {
  /**
   * [msg export a object include formData and fileUpload function ,you can modify formData and upload files after dragDrop the file in the ImageUploader]
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
```
## Update:
 - 拖拽文件后暴露接口给上级组件，提高复用性

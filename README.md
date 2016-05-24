# vue 拖拽上传组件

ImageUploader.Vue

## 使用方法

```
<image-uploader id='imgUploader' name='ImageUploader' form-data='{"token":"YOUR TOKEN"}' action='http://up.qiniu.com/'>
  <textarea slot="drop-main" v-model="uploadedFiles | json"  placeholder="Write a comment or drag your files here..."></textarea>
    <p class="drag-info" slot="drop-info" v-if="fileProgress">
      上传进度:{{fileProgress}}
    </p>
    <p class="drag-info" slot="drop-info" v-else>
      拖入文件进行上传
    </p>
</image-uploader>
```

 - form-data : 表单数据
 - action : 服务端地址
 - slot : 目前两个，分别为 `drop-main`和`drop-info`
 - 监听事件，在父级组件调用 : 目前两个，`$dispatch('onComplete',fileObject)`、`$dispatch('onFileProgress', e)`
   - fileObject : 为服务返回的 JSON
   - e : 上传进度监听

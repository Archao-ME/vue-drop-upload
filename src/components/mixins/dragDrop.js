export default {
  methods: {
    handleDrop (e) {
      // 获取文件列表
      var fileList = e.dataTransfer.files
      this.$dispatch('onDrop', fileList)
      e.preventDefault()
    },
    handleDragover (e) {
      this.$dispatch('onDragover', true)
      e.preventDefault()
    },
    handleDragleave (e) {
      this.$dispatch('onDragleave', true)
      e.preventDefault()
    }
  }
}

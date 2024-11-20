function saveAllImagesInPage() {
  var images = document.getElementsByTagName('img'); // 获取页面中的所有<img>元素

  // 遍历图片元素并保存图片
  for (var i = 0; i < images.length; i++) {
    var imageUrl = images[i].src; // 获取图片的URL

    // 调用保存图片的函数
    saveImageToGallery(imageUrl);
  }
}

// 保存图片到相册
function saveImageToGallery(imageUrl) {
  plus.gallery.save(
    imageUrl,
    function() {
      console.log('图片保存成功');
      // 在这里执行保存成功后的逻辑
      // ...
    },
    function(error) {
      console.log('图片保存失败: ' + JSON.stringify(error));
      // 在这里执行保存失败后的逻辑
      // ...
    }
  );
}

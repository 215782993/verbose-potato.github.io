
document.getElementById('photoUpload').addEventListener('change', function(e) {
    var files = e.target.files;
    var previewArea = document.getElementById('previewArea');

    // 检查文件数量
    if (previewArea.querySelectorAll('.preview-img').length + files.length > 6) {
        alert('您选择的照片数量超过了6张，请减少后再试。');
        e.target.value = ''; // 清空文件选择
        return;
    }

    // 遍历文件并预览
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        // 确保文件是图片
        if (!file.type.match('image.*')) {
            continue;
        }

        reader.onload = (function(theFile) {
            return function(e) {
                var img = document.createElement("img");
                img.classList.add('preview-img');
                img.src = e.target.result;
                previewArea.appendChild(img);
            };
        })(file);

        // 读取文件
        reader.readAsDataURL(file);
    }
});
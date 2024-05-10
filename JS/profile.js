$(document).ready(function() {
    $('#photoUpload').on('change', function (e) {
        // 确保用户选择了文件
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // 将读取到的文件内容设置为预览图片的src
                $('#previewArea').attr('src', e.target.result);
            };

            // 读取用户选择的第一个文件
            reader.readAsDataURL(e.target.files[0]);
        }
    });
});

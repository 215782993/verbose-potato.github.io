
document.getElementById('photoUpload').addEventListener('change', function(e) {
    var files = e.target.files;
    var previewArea = document.getElementById('previewArea');
    var addControl = document.getElementById('add');
    // 检查文件数量
    if(previewArea.querySelectorAll('.preview-img').length + files.length === 6){
        addControl.style.visibility = 'hidden';
    }
    if (previewArea.querySelectorAll('.preview-img').length + files.length >6) {
            alert('您选择的照片数量超过了6张，请减少后再试。');
            e.target.value = '';// 清空文件选择
            return ;
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
                var imgWrapper = document.createElement("span");// 创建包裹 span
                var img = document.createElement("img");
                imgWrapper.classList.add('del-img');
                img.classList.add('preview-img');
                img.src = e.target.result;
                // 添加删除按钮
                var deleteBtn = document.createElement("button");
                var btn_img = new Image();
                btn_img.src="img/图片4.png";
                btn_img.classList.add('btn-img');
                deleteBtn.classList.add('delete-btn');

                $(document).ready(function() {
                    $('#photoUpload').on('change', function() {
                        var fileCount = this.files.length; // 获取选择的文件数量

                        // 根据文件数量显示或隐藏上传按钮
                        if (fileCount >= 6) {
                            $('#add').hide(); // 如果文件数量大于等于6，隐藏上传按钮
                        } else {
                            $('#add').show(); // 否则显示上传按钮
                        }

                        // 可以在这里添加更多逻辑来处理文件变化
                    });
                });

                deleteBtn.addEventListener('click', function() {
                    previewArea.removeChild(imgWrapper); // 删除整个包裹 span
                    var addControl = document.getElementById('add');
                    if (addControl) {
                        addControl.style.display = 'block'; //
                        addControl.style.visibility = 'visible'; //

                    }
                });

                deleteBtn.appendChild(btn_img);
                imgWrapper.appendChild(img);
                imgWrapper.appendChild(deleteBtn);
                previewArea.appendChild(imgWrapper);
            };
        })(file);
        // 读取文件
        reader.readAsDataURL(file);

    }
});


document.addEventListener('DOMContentLoaded', function() {
    var textArea = document.getElementById('description');
    var textCount = document.querySelector('.text-count');

    textArea.addEventListener('input', function() {
        var textLength = textArea.value.length;
        var maxLength = textArea.getAttribute('maxlength');
        textCount.textContent = textLength + '/' + maxLength;
    });
});

$(document).ready(function() {
    $('#photoUpload').on('change', function() {
        var fileCount = this.files.length; // 获取选择的文件数量

        // 根据文件数量显示或隐藏上传按钮
        if (fileCount >= 6) {
            $('#add').hide(); // 如果文件数量大于等于6，隐藏上传按钮
        } else {
            $('#add').show(); // 否则显示上传按钮
        }

        // 可以在这里添加更多逻辑来处理文件变化
    });
});

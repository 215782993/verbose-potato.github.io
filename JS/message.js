$(document).ready(function() {
    $('#phone').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 11);
    });
});

document.getElementById('area').addEventListener('input', function(e) {
    var input = e.target;
    var value = parseInt(input.value, 10);

    // 如果输入的不是数字或者小于0，则设置为0
    if (isNaN(value) || value < 0) {
        input.value = '';
    }
});

$(document).ready(function() {
    // 定义一个函数来限制输入只能为数字或中文数字
    function restrictInputToNumbersOrChineseNumbers(e) {
        var input = $(e.target);
        var value = input.val().replace(/[^\d一二三四五六七八九十]/g, '') // 移除非数字和中文数字字符，并限制长度
        input.val(value); // 设置新的值
    }
    // 为每个需要限制的输入框添加事件监听器
    $('#rooms, #halls, #baths, #kitchen').on('input', restrictInputToNumbersOrChineseNumbers);
});


$(document).ready(function() {
    $(document).ready(function() {
        $('.toggle-link').click(function(e) {
            e.preventDefault(); // 阻止默认链接行为（如页面跳转）
            $(this).find('.rotate-img').toggleClass('flipped'); // 切换翻转类

        var $container = $('.container-more');
        var $link = $(this);

        // 切换链接的旋转状态
    $link.toggleClass('flipped');

        // 直接显示或隐藏容器，不使用动画
        if ($container.is(':visible')) {
            $container.hide();
        } else {
            $container.show();
        }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // 获取select和用于自定义的input元素
    var selectElement = document.getElementById('style2');
    var customInputElement = document.getElementById('customInput');
    var customOption; // 用于存储自定义option

    // 初始添加自定义option（隐藏）
    customOption = document.createElement('option');
    customOption.value = 'custom';
    customOption.text = '自定义';
    customOption.style.display = 'none'; // 但在DOM中option没有display属性，这里仅作示意
    selectElement.appendChild(customOption);

    // 为select元素添加事件监听器
    selectElement.addEventListener('change', function () {

        // 检查是否选择了自定义
        if (this.value === 'custom') {

            // 显示输入框
            customInputElement.style.display = 'block';
            // 隐藏select
            selectElement.style.display = 'none';

            // 清除可能存在的旧自定义option
            var oldCustomOption = selectElement.querySelector('option[value="custom"]');
            if (oldCustomOption) {
                selectElement.removeChild(oldCustomOption);
            }

            // 重新添加自定义option（用于之后的选择）
            customOption = document.createElement('option');
            customOption.value = 'custom';
            customOption.text = '自定义'; // 可以显示一个占位符文本
            selectElement.appendChild(customOption);

        } else {
            // 显示select
            selectElement.style.display = 'block';
            // 隐藏输入框
            customInputElement.style.display = 'none';
            // 清除输入框的内容
            customInputElement.value = '';

        }
    });

    // 为input元素添加失去焦点事件监听器
    customInputElement.addEventListener('blur', function () {
        if (this.value.trim() !== '') {
            // 如果输入框有值，则创建一个新的option并添加到select中
            var newOption = document.createElement('option');
            newOption.value = 'custom_' + Date.now(); // 使用时间戳或其他唯一值作为value
            newOption.text = this.value;
            selectElement.appendChild(newOption);

            // 选择新添加的option
            selectElement.value = newOption.value;

        }

        var select = document.getElementById('style2');

        // 找到自定义的option元素
        var customOption = null;
        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].value === 'custom') {
                customOption = select.options[i];
                break;
            }
        }

        // 如果找到了自定义的option元素，则将其移动到最底部
        if (customOption) {
            select.remove(i); // 从当前位置移除
            select.add(customOption, null); // 添加到最后（null表示添加到末尾）
        }

        // 隐藏输入框并显示select
        this.style.display = 'none';
        selectElement.style.display = 'block';

        // 清除输入框的内容
        this.value = '';
    });
});
$('#saveBtn').click(function(e) {
    e.preventDefault(); // 阻止默认的表单提交行为

    // 验证表单（如果需要）
    // ...

    // 假设验证通过，模拟表单提交
    // 这里你可以使用AJAX提交表单数据到服务器
    // 这里我们简单模拟一下，假设提交成功，然后重定向

    // 模拟提交成功后的回调
    setTimeout(function() {
        // 重定向到另一个页面
        window.location.href = '../profile.html'; // 替换为你的重定向URL
    }, 1000); // 延迟1秒，模拟异步操作
});
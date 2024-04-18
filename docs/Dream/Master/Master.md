# 考研

<body>
<center>
<font color="#4351AF" size=6 >
  <h1>25考研初试倒计时：</h1>
  <div id="countdown"></div>

  <script>
    //设置倒计时时间为2024年12月23号结束
    var countDownDate = new Date("Dec 23, 2024 00:00:00").getTime();

    // 更新倒计时
    var x = setInterval(function() {

      // 获取当前时间
      var now = new Date().getTime();

      // 计算剩余时间
      var distance = countDownDate - now;

      // 计算天数、小时、分钟和秒
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // 显示倒计时
      document.getElementById("countdown").innerHTML = days + "天 " + hours + "小时 "
      + minutes + "分钟 " + seconds + "秒";

      // 当倒计时结束时，停止更新
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "倒计时结束";
      }
    }, 1000);
  </script>
  </font>
  </center>
</body>
<head>
  <!-- 其他内容 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</head>

<style>

/* Moments 区块容器 */
.moments-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* 单个 Moment 卡片 */
.moment-card {
  width: 400px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

/* 用户信息区域 */
.moment-user-info {
  display: flex;
  align-items: center;
  padding: 10px;
}

/* 用户头像 */
.moment-avatar {
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0; /* 防止被压扁 */
}

/* 用户名 */
.moment-username {
  font-weight: bold;
}

/* 更多选项（三个点）*/
.moment-more-options {
  margin-left: auto; /* 右对齐 */
}

/* 图标区域 */
.moment-icons {
  display: flex;
  align-items: center;
  padding: 10px;
}

/* 图标 */
.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

/* 爱心、评论、分享图标 */
.heart-icon,
.comment-icon,
.share-icon {
  margin-right: 15px; /* 调整图标之间的间距 */
  stroke: black; /* 设置黑色边框 */
  fill: none; /* 无填充 */
}

/* 收藏图标 */
.bookmark-icon {
  margin-left: auto; /* 将收藏图标推至右侧 */
}



.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 100,
    'GRAD' 0,
    'opsz' 48;
  font-size: 32px; /* Adjust the font size as needed */
  margin-right: 15px; /* Add margin between icons */
}

/* Adjust the position of the bookmark icon */
.material-symbols-outlined-bookmark {
  margin-right: 0; /* Remove margin for bookmark icon */
}


/* 文字内容 */
.moment-content {
  padding: 10px;
}

/* 时间戳 */
.moment-timestamp {
  color: #888;
}


</style>


<div class="moments-container">
  <div class="moment-card">
    <!-- User Info -->
    <div class="moment-user-info">
      <img class="moment-avatar" src="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png" alt="Avatar">
      <p class="moment-username">LennyChen</p>
      <div class="moment-more-options">...</div>
    </div>
    <!-- Moment Image -->
    <!-- Moment Icons -->
    <div class="moment-icons">
      <!-- Material Symbols Outlined -->
      <span class="material-symbols-outlined">favorite</span>
      <span class="material-symbols-outlined">chat</span>
      <span class="material-symbols-outlined">send</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">bookmark</span>
    </div>
    <!-- Moment Content -->
    <div class="moment-content">
      <p class="moment-text">何がふざけて</p>
      <p class="moment-timestamp">2025-08-09</p>
    </div>
  </div>
</div>


<div class="moments-container">
  <div class="moment-card">
    <!-- User Info -->
    <div class="moment-user-info">
      <img class="moment-avatar" src="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png" alt="Avatar">
      <p class="moment-username">LennyChen</p>
      <div class="moment-more-options">...</div>
    </div>
    <!-- Moment Image -->
    <img class="moment-image" src="https://s2.loli.net/2025/08/01/987RIiUeXA5KSpg.jpg" alt="Moment 1">
    <!-- Moment Icons -->
    <div class="moment-icons">
      <!-- Material Symbols Outlined -->
      <span class="material-symbols-outlined">favorite</span>
      <span class="material-symbols-outlined">chat</span>
      <span class="material-symbols-outlined">send</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">bookmark</span>
    </div>
    <!-- Moment Content -->
    <div class="moment-content">
      <p class="moment-text">英雄见参！英雄见参！英雄见参！</p>
      <p class="moment-timestamp">2025-08-01</p>
    </div>
  </div>
</div>



<div class="moments-container">
  <div class="moment-card">
    <!-- User Info -->
    <div class="moment-user-info">
      <img class="moment-avatar" src="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png" alt="Avatar">
      <p class="moment-username">LennyChen</p>
      <div class="moment-more-options">...</div>
    </div>
    <!-- Moment Image -->
    <img class="moment-image" src="https://s2.loli.net/2025/07/13/nySNT1rQW4kJmtq.png" alt="Moment 1">
    <!-- Moment Icons -->
    <div class="moment-icons">
      <!-- Material Symbols Outlined -->
      <span class="material-symbols-outlined">favorite</span>
      <span class="material-symbols-outlined">chat</span>
      <span class="material-symbols-outlined">send</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">bookmark</span>
    </div>
    <!-- Moment Content -->
    <div class="moment-content">
      <p class="moment-text">大王, if you see this, stop视监me。</p>
      <p class="moment-timestamp">2025-07-13</p>
    </div>
  </div>
</div>

<div class="moments-container">
  <div class="moment-card">
    <!-- User Info -->
    <div class="moment-user-info">
      <img class="moment-avatar" src="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png" alt="Avatar">
      <p class="moment-username">LennyChen</p>
      <div class="moment-more-options">...</div>
    </div>
    <!-- Moment Icons -->
    <div class="moment-icons">
      <!-- Material Symbols Outlined -->
      <span class="material-symbols-outlined">favorite</span>
      <span class="material-symbols-outlined">chat</span>
      <span class="material-symbols-outlined">send</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">bookmark</span>
    </div>
    <!-- Moment Content -->
    <div class="moment-content">
      <p class="moment-text">一步一步来，慢就是快。</p>
      <p class="moment-timestamp">2024-11-11</p>
    </div>
  </div>
</div>

<div class="moments-container">
  <div class="moment-card">
    <!-- User Info -->
    <div class="moment-user-info">
      <img class="moment-avatar" src="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png" alt="Avatar">
      <p class="moment-username">LennyChen</p>
      <div class="moment-more-options">...</div>
    </div>
    <!-- Moment Image -->
    <img class="moment-image" src="https://s2.loli.net/2024/06/02/tfFb6yL3jGPld9a.jpg" alt="Moment 1">
    <!-- Moment Icons -->
    <div class="moment-icons">
      <!-- Material Symbols Outlined -->
      <span class="material-symbols-outlined">favorite</span>
      <span class="material-symbols-outlined">chat</span>
      <span class="material-symbols-outlined">send</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">bookmark</span>
    </div>
    <!-- Moment Content -->
    <div class="moment-content">
      <p class="moment-text">去爱具体的人，而不是抽象的人；去理解包容人们的缺点，而不是只能接受完美。</p>
      <p class="moment-timestamp">2024-06-02</p>
    </div>
  </div>
</div>

<div class="moments-container">
  <div class="moment-card">
    <!-- User Info -->
    <div class="moment-user-info">
      <img class="moment-avatar" src="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png" alt="Avatar">
      <p class="moment-username">LennyChen</p>
      <div class="moment-more-options">...</div>
    </div>
    <!-- Moment Image -->
    <img class="moment-image" src="https://s2.loli.net/2024/05/10/D8AHisIQmjngZTO.png" alt="Moment 1">
    <!-- Moment Icons -->
    <div class="moment-icons">
      <!-- Material Symbols Outlined -->
      <span class="material-symbols-outlined">favorite</span>
      <span class="material-symbols-outlined">chat</span>
      <span class="material-symbols-outlined">send</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">bookmark</span>
    </div>
    <!-- Moment Content -->
    <div class="moment-content">
      <p class="moment-text">累了的话，就来蓝湖坐坐吧。</p>
      <p class="moment-timestamp">2024-05-10</p>
    </div>
  </div>
</div>

<div class="moments-container">
  <div class="moment-card">
    <!-- User Info -->
    <div class="moment-user-info">
      <img class="moment-avatar" src="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png" alt="Avatar">
      <p class="moment-username">LennyChen</p>
      <div class="moment-more-options">...</div>
    </div>
    <!-- Moment Image -->
    <img class="moment-image" src="https://s2.loli.net/2024/05/10/uQ7TMiUZErGl9PB.png" alt="Moment 1">
    <!-- Moment Icons -->
    <div class="moment-icons">
      <!-- Material Symbols Outlined -->
      <span class="material-symbols-outlined">favorite</span>
      <span class="material-symbols-outlined">chat</span>
      <span class="material-symbols-outlined">send</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">bookmark</span>
    </div>
    <!-- Moment Content -->
    <div class="moment-content">
      <p class="moment-text">虽然很多人都会觉得这句话在表达张之维的强大、狂傲，但我始终觉得这里在表现之维的“不争”，正应了《道德经》中的那句“夫唯不争，故无尤”。老天师超凡入圣，在“圣”上做的好，却难以凡的眼光理解他人，走的是圣人道，无根生在“凡”上做的好，知道别人想要的，走的是凡人道。</p>
      <p class="moment-timestamp">2024-05-10</p>
    </div>
  </div>
</div>

<div class="moments-container">
  <div class="moment-card">
    <!-- User Info -->
    <div class="moment-user-info">
      <img class="moment-avatar" src="https://s2.loli.net/2024/03/31/Ht3QBqhgLYNAuwj.png" alt="Avatar">
      <p class="moment-username">LennyChen</p>
      <div class="moment-more-options">...</div>
    </div>
    <!-- Moment Image -->
    <img class="moment-image" src="https://s2.loli.net/2024/05/02/iZDlNauhvQ1dHPk.jpg" alt="Moment 1">
    <!-- Moment Icons -->
    <div class="moment-icons">
      <!-- Material Symbols Outlined -->
      <span class="material-symbols-outlined">favorite</span>
      <span class="material-symbols-outlined">chat</span>
      <span class="material-symbols-outlined">send</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">bookmark</span>
    </div>
    <!-- Moment Content -->
    <div class="moment-content">
      <p class="moment-text">把这当朋友圈发(○｀ 3′○)</p>
      <p class="moment-timestamp">2024-04-30</p>
    </div>
  </div>
</div>



<style>
.diary-wrapper {
    flex: 1;
    overflow-y: auto;
    padding: 20px 20px 30px 0;
}
.diary-wrapper::before {
    content: "";
    position: absolute;
    width: 1px;
    top: 0;
    left: 20px;
    bottom: 0;
    height: 100%;
    background-image: linear-gradient(
        to top,
        var(--md-default-bg-color),
        var(--md-default-fg-color--lighter) 100px 
    );
}
.diary-item {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
}

.diary-dot-wrapper {
    width: 60px;
}
.diary-dot {
    left: 12px;
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #d3d3d3;
    box-shadow: 0 0 0 5px var(--md-default-bg-color);
    /* text-align: center; */
    top: 0;
}

.diary-time {
    font-size: .64rem;
    color: #777777;
    margin-top: 5px;
    margin-left: 5px;
}

.diary-card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fffbfb;
    background-clip: border-box;
    border-radius: 1rem;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 10px;
    box-shadow: 0 0px 20px rgba(0,0,0,0.1);
}
[data-md-color-scheme="slate"] .diary-card {
    background-color: #333333;
}

.diary-content {
    width: 100%;
    position: relative;
    margin-left: 5px;
/*    margin-right: 10px;*/
    margin-top: 0px;
}
.diary-content img {
    border-radius: 10px !important;
    height: 110px !important;
    margin-top: 5px !important;
    margin-right: 8px !important;
    transition: opacity 0.4s ease !important;
}
.diary-content img:hover {
    opacity: .7 !important;
}

.diary-content h6 img {
    font-size: 1em !important;
    font-weight: bold !important;
    margin-top: 0.67em !important;
    margin-right: 0.67em !important;
}

.diary-content p {
    margin-block-start: 5px;
    margin-block-end: 5px;
}



</style>

<div>
    <div class="diary-item">
    <div class="diary-dot-wrapper"><div class="diary-dot"></div></div>
    <div class="diary-content"><div class="diary-card">
      <div class="diary-content">
        <p style="font-weight: 800;">Lenny's Web v0.0.1</a></p>
        </p>
        <ul>Done
          <li>基本的框架搭建完成了</li>
          <li>更新了<a href="https://lennychen.top/Dream/Notes/Others/PsychologyExceptMOOC/SisyphusDoYouWantToBeLoved.html">do you want to be loved or do you want to be yourself</a>, <a href="https://lennychen.top/Dream/Notes/Others/PsychologyExceptMOOC/SisyphusTheMythofProductivity.html">The Myth of Productivity</a>等文章</li>        
        </ul>
        <ul>To Do
          <li>如果这里一级标题能折叠，看起来应该会更清晰，<a href="https://s2.loli.net/2024/04/25/bTQoq5yGdEScYIn.png">图示</a>。
          </li>
          <li>这两边的空要改的更小一点，蓝框里那么大就差不多了，中间阅读内容的空要更大一些，<a href="https://s2.loli.net/2024/04/25/TdrJZ4Aw7YQ6N1a.png">图示</a>。</li>
          <li>两边空白处加上①花，或者②季节性内容，如夏天的蝉鸣，秋天的落叶，冬天的雪，或者③加上节日性内容，如春节的对联，元宵节的灯笼等等，比较有氛围感，<a href="https://s2.loli.net/2024/04/25/gE6xwozNqdLWsUR.png">图示</a>。
          </li>
        </ul>        
      </div>
      <div class="diary-time">
        <span class="twemoji"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10C6.47 22 2 17.5 2 12S6.5 2 12 2m.5 11H11V7h1.5v4.26l3.7-2.13.75 1.3L12.5 13Z"></path></svg></span>
        <b>2024.04.25</b></div></div></div>
  </div>

</div>
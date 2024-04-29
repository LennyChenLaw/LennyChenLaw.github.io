<!-- <style>
.timeline {
  margin: 20px 0;
}

.timeline-item {
  position: relative;
  padding: 20px 0;
}

.timeline-date {
  font-weight: bold;
}

.timeline-content {
  padding-left: 30px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 15px;
  width: 2px;
  height: 100%;
  background-color: #007bff; /* 时间线的颜色 */
}
</style> -->

<style>

/* .timeline-wrapper {
    flex: 1;
    overflow-y: auto;
    padding: 15px 5px 30px 0;
}

.timeline-wrapper::before {
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

.timeline {
    position: relative;;
    width: 100%;
}

.timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
}

.timeline-dot-wrapper {
    width: 60px;
}

.timeline-dot {
    left: 12px;
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #d3d3d3;
    box-shadow: 0 0 0 5px var(--md-default-bg-color);
    top: 0;
}

.timeline-content {
    width: 100%;
    position: relative;
}

.timeline-content::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: var(--md-primary-fg-color);
    left: -10px;
    top: calc(50% - 10px);
}

.timeline-card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: var(--md-primary-fg-color);
    background-clip: border-box;
    border-radius: .25rem;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 10px;
}

.changelog-time {
    font-size: 1.2em;
}

.changelog-time::before {
    content: "🕙 ";
}

.changelog-type {
    background-color: #3f6ec6b0;
    border-radius: 3px;
    font-size: 85%;
    padding: 3px;
}
.changelog-type::before {
    content: "更新";
}

.changelog-content {
    margin-top: 10px;
}

.changelog-content p {
    margin-top: 0;
    margin-bottom: 5px;
}

.changelog-content a {
    color: var(--md-default-fg-color);
}


.changelog-type-function {
    background-color: #e6695bb0;
}
.changelog-type-function::before {
    content: "功能性更新";
}

.changelog-type-pageupdate {
    background-color: #3f6ec6b0;
}
.changelog-type-pageupdate::before {
    content: "页面更新";
}

.changelog-type-newpage {
    background-color: #e6ad5bb0;
}
.changelog-type-newpage::before {
    content: "新增页面";
} */

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
<div>
<div>
  <h6>    
    <img alt="HTML" src="https://img.shields.io/badge/HTML-Markup-orange?logo=html5&logoColor=fff" /> 
    <img alt="CSS" src="https://img.shields.io/badge/CSS-Style-blue?logo=css3&logoColor=fff" /> 
    <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-Language-yellow?logo=javascript&logoColor=fff" />
  </h6>
</div>

  <div class="diary-item">
    <div class="diary-dot-wrapper"><div class="diary-dot"></div></div>
    <div class="diary-content"><div class="diary-card">
      <div class="diary-content">
        <p style="font-weight: 800;">开始进一步学习<a href="https://www.youtube.com/watch?v=nu_pCVPKzTk">HTML, CSS, JavaScript</a></p>
        </p>
      </div>
      <div class="diary-time">
        <span class="twemoji"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10C6.47 22 2 17.5 2 12S6.5 2 12 2m.5 11H11V7h1.5v4.26l3.7-2.13.75 1.3L12.5 13Z"></path></svg></span>
        <b>2024.04.25</b></div></div></div>
  </div>
<div>
<h6>
<img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-Linux-orange?logo=ubuntu&logoColor=fff" >
<img alt="Docker" src="https://img.shields.io/badge/Docker-Container-blue?logo=docker&logoColor=fff" >
</h6>
</div>

  <div class="diary-item">
    <div class="diary-dot-wrapper"><div class="diary-dot"></div></div>
    <div class="diary-content"><div class="diary-card">
      <div class="diary-content">
        <p style="font-weight: 800;">开始在Ubuntu虚拟机里学习<a href="https://www.youtube.com/watch?v=pTFZFxd4hOI">Docker</a></p>
        </p>
      </div>
      <div class="diary-time">
        <span class="twemoji"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10C6.47 22 2 17.5 2 12S6.5 2 12 2m.5 11H11V7h1.5v4.26l3.7-2.13.75 1.3L12.5 13Z"></path></svg></span>
        <b>2024.04.15</b></div></div></div>
</div>
<div>
<h6>
<img alt="Vim" src="https://img.shields.io/badge/Vim-Editor-brightgreen?logo=vim&logoColor=fff" >
<img alt="Git" src="https://img.shields.io/badge/Git-Version%20Control-lightgrey?logo=git&logoColor=fff" />
<img alt="Python" src="https://img.shields.io/badge/Python-Programming-blue?logo=python&logoColor=fff" />
<img alt="Shell" src="https://img.shields.io/badge/Shell-Bash-green?logo=gnu-bash&logoColor=fff" />
</h6>
</div>
  </div>
  <div class="diary-item">
    <div class="diary-dot-wrapper"><div class="diary-dot"></div></div>
    <div class="diary-content"><div class="diary-card">
      <div class="diary-content">
        <p style="font-weight: 800;">开始学习<a href= "https://www.youtube.com/watch?v=Z56Jmr9Z34Q">The Missing Semester</a> and <a href="https://www.youtube.com/@JohnDeNero">CS61A</a></p>
      </div>
      <div class="diary-time">
        <span class="twemoji"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10C6.47 22 2 17.5 2 12S6.5 2 12 2m.5 11H11V7h1.5v4.26l3.7-2.13.75 1.3L12.5 13Z"></path></svg></span>
        <b>2024.03.30</b> </div></div></div>
  </div>
<div>
<h6>
<img alt="npm" src="https://img.shields.io/badge/npm-Package%20Manager-red?logo=npm&logoColor=fff" ><img alt="Git" src="https://img.shields.io/badge/Pygame-Library-yellow?logo=pygame&logoColor=fff" /><img alt="Matplotlib" src="https://img.shields.io/badge/Matplotlib-Visualization-orange?logo=python&logoColor=fff" /><img alt="NLTK" src="https://img.shields.io/badge/NLTK-Natural%20Language%20Toolkit-green?logo=nltk&logoColor=fff" />
<img alt="Mathematica" src="https://img.shields.io/badge/Mathematica-Computational%20Software-dd1100?logo=wolfram-mathematica&logoColor=fff" >
<img alt="Java" src="https://img.shields.io/badge/Java-Programming-orange?logo=java&logoColor=fff" />
<img alt="Sublime" src="https://img.shields.io/badge/Sublime%20Text-Editor-yellow?logo=sublime-text&logoColor=fff" />
<img alt="Figma" src="https://img.shields.io/badge/Figma-Design-purple?logo=figma&logoColor=fff" />
<img alt="PR" src="https://img.shields.io/badge/Adobe%20Premiere%20Pro-Video%20Editing-blue?logo=adobe-premiere-pro&logoColor=fff" >
<img alt="Emulator" src="https://img.shields.io/badge/Emulator-Tool-orange?logo=android&logoColor=fff" />
<img alt="Rstudio" src="https://img.shields.io/badge/RStudio-IDE-blue?logo=rstudio&logoColor=fff" />
</h6>
</div>
  </div>
  <div class="diary-item">
    <div class="diary-dot-wrapper"><div class="diary-dot"></div></div>
    <div class="diary-content"><div class="diary-card">
      <div class="diary-content">
        <p style="font-weight: 800;">学了一些杂项</p>
      </div>
      <div class="diary-time">
        <span class="twemoji"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10C6.47 22 2 17.5 2 12S6.5 2 12 2m.5 11H11V7h1.5v4.26l3.7-2.13.75 1.3L12.5 13Z"></path></svg></span>
        <b>2021.03.01-2024.3.30</b> 
      </div>
    </div>
    </div>
  </div>
<div><h6>      	
    <img alt="MarkDown" src="https://img.shields.io/badge/Markdown-Markup-lightgrey?logo=markdown&logoColor=fff" >
    <img alt="LaTeX" src="https://img.shields.io/badge/LaTeX-Typesetting-blue?logo=latex&logoColor=fff" >
</h6></div>
  <div class="diary-item">
    <div class="diary-dot-wrapper"><div class="diary-dot"></div></div>
    <div class="diary-content"><div class="diary-card">
      <div class="diary-content">
        <p style="font-weight: 800;">开始学习Markdown和LaTeX</p>
      </div>
      <div class="diary-time">
        <span class="twemoji"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10C6.47 22 2 17.5 2 12S6.5 2 12 2m.5 11H11V7h1.5v4.26l3.7-2.13.75 1.3L12.5 13Z"></path></svg></span>
        <b>2021.03.01</b></div></div></div>
  </div>
</div>
</div>
</div>


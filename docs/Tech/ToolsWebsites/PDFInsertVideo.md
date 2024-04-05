# PDF内嵌入视频
!!! info
    [视频教程点我](https://www.bilibili.com/video/BV16X4y1H7Xy/?spm_id_from=333.999.0.0) or [我](https://www.youtube.com/watch?v=BspamyoyjUk)

## 背景
出于安全性、新技术兴起、移植性不好等原因，Adobe于2020年12月31日停止了对Flash Player的支持，LaTeX中media9宏包中的一些操作在更高版本的Acrobat Reader DC中无法实现，比如内嵌视频，但一些大佬设计了一些方案，能够成功在PDF里嵌入视频。

## 声明
实际上如果想把PDF发给目标客户，然后在一些文字难以说明的场合让客户看到操作视频，目前比较好的解决方案是引用链接，而不是内嵌视频，即把视频上传到b站等视频网站上，然后再PDF引用跳转链接。

## 需要的东西

1. Foxit PDF Reader
2. Tex发行版
3. VScode（安装latex workshop插件）或者其他编辑器如jetbrain系列（安装texify插件）等
4. embed_video.tex
5. enablePlayerControls.reg

-------------------------------------

<style>
code {
  background-color: #f3f3f3;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
}
</style>

<h6 id="code_file"><code>embed_video.tex</code>文件中的代码</h6>


```latex
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% \embedvideo{<poster or text>}{<video file (MP4+H264)>}
% \embedvideo*{...}{...}                     % auto-play
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\usepackage[bigfiles]{pdfbase}
\ExplSyntaxOn
\NewDocumentCommand\embedvideo{smm}{
  \group_begin:
  \leavevmode
  \tl_if_exist:cTF{file_\file_mdfive_hash:n{#3}}{
    \tl_set_eq:Nc\video{file_\file_mdfive_hash:n{#3}}
  }{
    \IfFileExists{#3}{}{\GenericError{}{File~`#3'~not~found}{}{}}
    \pbs_pdfobj:nnn{}{fstream}{{}{#3}}
    \pbs_pdfobj:nnn{}{dict}{
      /Type/Filespec/F~(#3)/UF~(#3)
      /EF~<</F~\pbs_pdflastobj:>>
    }
    \tl_set:Nx\video{\pbs_pdflastobj:}
    \tl_gset_eq:cN{file_\file_mdfive_hash:n{#3}}\video
  }
  %
  \pbs_pdfobj:nnn{}{dict}{
    /Type/RichMediaInstance/Subtype/Video
    /Asset~\video
    /Params~<</FlashVars (
      source=#3&
      skin=SkinOverAllNoFullNoCaption.swf&
      skinAutoHide=true&
      skinBackgroundColor=0x5F5F5F&
      skinBackgroundAlpha=0
    )>>
  }
  %
  \pbs_pdfobj:nnn{}{dict}{
    /Type/RichMediaConfiguration/Subtype/Video
    /Instances~[\pbs_pdflastobj:]
  }
  %
  \pbs_pdfobj:nnn{}{dict}{
    /Type/RichMediaContent
    /Assets~<<
      /Names~[(#3)~\video]
    >>
    /Configurations~[\pbs_pdflastobj:]
  }
  \tl_set:Nx\rmcontent{\pbs_pdflastobj:}
  %
  \pbs_pdfobj:nnn{}{dict}{
    /Activation~<<
      /Condition/\IfBooleanTF{#1}{PV}{XA}
      /Presentation~<</Style/Embedded>>
    >>
    /Deactivation~<</Condition/PI>>
  }
  %
  \hbox_set:Nn\l_tmpa_box{#2}
  \tl_set:Nx\l_box_wd_tl{\dim_use:N\box_wd:N\l_tmpa_box}
  \tl_set:Nx\l_box_ht_tl{\dim_use:N\box_ht:N\l_tmpa_box}
  \tl_set:Nx\l_box_dp_tl{\dim_use:N\box_dp:N\l_tmpa_box}
  \pbs_pdfxform:nnnnn{1}{1}{}{}{\l_tmpa_box}
  %
  \pbs_pdfannot:nnnn{\l_box_wd_tl}{\l_box_ht_tl}{\l_box_dp_tl}{
    /Subtype/RichMedia
    /BS~<</W~0/S/S>>
    /Contents~(embedded~video~file:#3)
    /NM~(rma:#3)
    /AP~<</N~\pbs_pdflastxform:>>
    /RichMediaSettings~\pbs_pdflastobj:
    /RichMediaContent~\rmcontent
  }
  \phantom{#2}
  \group_end:
}
\ExplSyntaxOff
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
```
`enablePlayerControls.reg`文件中的代码

```
REGEDIT4

[HKEY_LOCAL_MACHINE\Software\Wow6432Node\Adobe\Acrobat Reader\DC\FeatureState]
"HonorControls"=dword:00000001
```
`Foxit PDF Reader下载链接`点[这里](https://www.foxit.com/pdf-reader/)
`Texlive`下载链接点[这里](https://tug.org/texlive/windows.html)
## 操作步骤
1. 上述文件（软件）准备齐全后，新建一个文件夹，用来存放嵌入文件`embed_video.tex`、测试文件`test.tex`、`图片文件`、`pdf文件`等等，为了方便说明，比如说新建了一个叫`example`的文件夹，路径是`D:\example`
2. 在`D:\example`路径下创建`enablePlayerControls.reg`文件和`embed_video.tex`文件，`embed_video.tex`文件创建相对简单，在VScode里选择New File, 命名为`embed_video.tex`, 然后把上面的<a href="code_file">代码</a>复制粘贴进去就可以了，或者用百度网盘链接下载embed_video.tex到`example`文件夹里；`enablePlayerControls.reg`文件创建和运行要麻烦一些，跟随以下步骤
>1. 打开记事本，将enablePlayerControls.reg文件中的内容复制粘贴进去，点击保存，尽量选择一个英文路径保存，保存时文件名为`enablePlayerControls.reg`，`文档类型`注意选择`所有文件（all file）`而不是`文本文档（txt file）`
>2. 双击运行`enablePlayerControls.reg`文件，应该会弹出一个窗口说需要授予管理员权限，点确定

## 写测试文件
VScode（或其他编辑器）新建一个文件test.tex，复制粘贴如下代码：
```latex
\documentclass{article}
\usepackage{graphicx} /*play on click的时候会有一个封面，这个包用来加载封面图*/
\input{embed_video.tex} 
\begin{document}
\section{autoplay}
\embedvideo*{\includegraphics[page=1]{example.png}}{example_video.mp4}
\newpage
\section{play on click}
\embedvideo{\includegraphics[page=1]{example2.png}}{example_video2.mp4}
\end{document}
```
注意把`example.png` `example2.png` `example_video.mp4` `example_video2.mp4`替换成自己真实的文件名，同时`embed_video.tex`和`example.png` `example2.png` `example_video.mp4` `example_video2.mp4`都在同一个文件夹下，最后编译，再用Foxit PDF Reader打开就可以了
## 参考网址
1[StackExchange](https://tex.stackexchange.com/questions/516029/media9-is-becoming-obsolete-dec-2020-any-alternatives-for-embedding-video-audio)

声明：以上的代码来自于StackExchange大佬AlexG，本人只是做了整理说明
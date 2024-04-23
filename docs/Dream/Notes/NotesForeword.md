# Foreword
!!! info
    + 说明一下`学习笔记`的分类思路，不然有人看到左边目录一堆长串英文名可能会有点懵逼。`学习笔记`记录的是MOOC，而MOOC频道我看的最多的是[Crash Course](https://www.youtube.com/@crashcourse)、[edX](https://www.edx.org/)、[MITOpenCourseWare](https://ocw.mit.edu/)、[FreeCodeCamp](https://www.youtube.com/@freecodecamp)、[Coursera](https://www.coursera.org/)，所以这几个被单列出来了。除了这几个我有时还会看些其他频道，如心理学的[Sisyphus 55](https://www.youtube.com/@Sisyphus55)、[TED-Ed](https://www.youtube.com/@TEDEd)和计算机的[SuperSimpleDev](https://www.youtube.com/@SuperSimpleDev)、[Programming with Mosh](https://www.youtube.com/@programmingwithmosh)等等，但看他们频道的频次和系统学习的程度和Crash Course、edX、MITOpenCourseWare等单列的MOOC频道比起来要低一些，所以把他们放在了Others里面，在此Others下再用二级文件夹名区分开。比如`./Others/PsychologyExceptMOOC`，该文件夹就是放Psychology内容的，但放的是除了单列的MOOC频道的Psychology内容。For example, [Crash Course Psychology](https://www.youtube.com/watch?v=eal4-A89IWY&list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6)，这门课的笔记会被放到单列的`./Crash Course/Psychology`文件夹下，而Sisyphus 55的[do you want to be loved or do you want to be yourself?](https://www.youtube.com/watch?v=3Y81L_CUV3M)这个视频的学习笔记会被放到`./Others/PsychologyExceptMOOC`文件夹下。

 树状图如下
```
$   tree -a
    .学习笔记
    ├── .Crash Course
    │   ├── .World History
    │   └── .Philosophy
    │   ├── .Biology
    │       └── New Crash Course Biology
    │       └── Biology#1
    │       └── ...
    │   └── .Psychology
    │   ├── ...
    ├── .edX
    │   ├── .CS50's Introduction to Computer Science
    │   └── .How To Write An Essay
    │   ├── ...
    ├── .MITOpenCourseWare
    │   ├── .Linear Algebra 18.06
    │   └── .Philosophy Of Law 24.235J 
    │   ├── ...
    ├── .FreeCodeCamp
    │   ├── .HTML and CSS Tutorials
    │       └── Learn HTML & CSS – Full Course for Beginners
    │       └── CSS Tutorial - Zero to Hero (Complete Course)
    │       └── ...
    │   └── .JavaScript Tutorials
    │   ├── .Python
    ├── .Coursera
    │   ├── .Code Yourself! An Introduction to Programming
    │   └── .Computer Organization
    ├── Others
    │     └── .CSExceptMOOC
    │       └── How Do Computers Read Code
    │       └── ...
    │    └── .PsychologyExceptMOOC
    │       └── Do you want to be loved or do you want to be yourself?
    │       └── ...
    ├──...
```


## Crash Course
Crash Course的课程种类非常丰富，是我目前看的最多的MOOC频道，记得当初是看了[Crash Course Computer Science](https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo)，感觉讲解老师好有激情（￣︶￣）↗　，而且讲课方式也很有趣，然后就入坑Crash Course了( •̀ ω •́ )y。Crash Course的优点是

+ 课程种类很多，比如有World History、World Mythology、Biology、Psychology、Philosophy、Linguistics、Intellectual Property等等，甚至还有Crash Course Games :material-information-outline:{ title="Card Games、Board Games、MMORPGs等等" }，是的，你没看错，讲解游戏历史的Crash Course。Amazing! Isn't it(☆▽☆) ?!

![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//CrashCourseGames.png)
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//CrashCourseGames2.png)

+ 老师很有激情，讲解条理清晰同时也兼顾了趣味性，比如Hank Green和John Green，两位的讲解风格很适合我这种喜欢逻辑和幽默的学生。

+ 能在短时间内给你某门课的概览，毕竟是Crash Course嘛，很多细节不可能面面俱到，但当你对某门课毫无概念时，比如Philosophy，那拿Crash Course Philosophy来入门，获得对Philosophy的大体认知是很好的。很适合用来拓展知识面和预习。

当然，说完优点，缺点也是要谈谈的

+ 没有Textbook、Transcript、Slides和Quiz，虽然Transcript可以用Youtube自带的，但整理起来就比较麻烦了，至于Textbook和Slides，我觉得复习的时候还是蛮重要的，这对于喜欢看教材和Slides的同学可能算是一个不太好解决的缺点。复习的时候只能看自己的笔记，想要拓展的时候因为没有Textbook就需要自己去查论文，反过来也算培养了自主能力吧。对我来说算是比较小的缺点。




## edX
edX的课程种类同样非常丰富，甚至还有AP课程，比如[AP Physics 1](https://www.edx.org/learn/physics/rice-university-ap-physics-1?index=product&queryID=f7da335137c3bbc759bd21f88f89f6bf&position=1&linked_from=autocomplete&c=autocomplete)，edX也是我现在非常喜欢的MOOC频道，优点除了刚才提到的课程种类丰富，还有以下几点

+ 老师专业性较强，有很多大学Director、Professor，比如教How To Write An Essay的[Maggie Sokolik](https://www.edx.org/bio/maggie-sokolik)，就是Director, College Writing Programs at University of California, Berkeley.
+ 课程简介部分信息给的很足，`About this course`、`Prerequisites`、`What you'll learn`等等信息一应俱全，能够很好的帮助你找到想要学习的课
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//edXAPPhysics1About.png)
+ 课程资料丰富，教学视频提供了`Download video file`链接，Transcripts提供了`.srt file`和`.txt file`；有Quiz，很多练习题，帮你巩固知识点；同时还有Readings和Discussion Section
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//edXAPPhysics1quiz.png)
+ 加入付费课程能够`Earn a certificate`，虽然不知道这个verified certificate会不会被企业承认，但应该、也许、maybe、probably~能为找工作提供点帮助吧
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//edXContractLaw.png)
+ 即便加入的是免费的课程，学完后也可能会送你个电子书签🔖什么的，比如之前学完How To Write An Essay课程后，就送了个`Congratulations!BerkeleyX`的书签，超级有成就感(～￣▽￣)～
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//edXHowToWriteAnEssayBookmark.png)

目前没感觉到什么缺点，硬要说的话可能就是好像没法直接bookmark课程for later study，一个简单的做法是直接enroll course，但这样后续可能会遇到audit access expired的情况。一个很小的问题，用OneNote或者Obsidian等笔记软件自己创建一个edX Course Wishlist，然后记录一下就能解决了。


## MITopenCourseWare
最开始接触到MITOpenCourseWare是在B站看3Blue1Brown[线性代数的本质](https://www.bilibili.com/video/BV1ys411472E/)的时候，评论区有人提到“配合MIT 18.06 Linear Algebra食用更佳”，于是在B站找到了这门课刷了一遍，借着这个契机后来进一步了解到了MITOpenCourseWare。当时名校情结比较重，觉得上了MITOpenCourseWare的课，我就是线上丐版MIT人了(^///^)。不过后来随着时间流逝，身心成熟了一些，慢慢的就重视到课程本身了，不是冲着MIT的名头，而是真的为了追求知识，追求真理而参加MITOpenCourseWare的课程。“尽早对title祛魅，努力探寻真理，title是科学之路上的掌声与鲜花，但我们要追求的是没有掌声与鲜花也能心定的走在这条路上，因为走在路上本身就是种欢愉，不是吗？”——沃兹基硕德

关于MITOpenCourseWare我最喜欢的点是可以根据Departments进行分类，并且每门课都标有Undergraduate或者Graduate，配合上:material-information-outline:{ title="类似国内的专业人才培养方案" }[MIT Undergraduate Programs](https://catalog.mit.edu/interdisciplinary/undergraduate-programs/)或者[MIT Graduate Programs](https://catalog.mit.edu/interdisciplinary/graduate-programs/)，如果有足够的毅力，根据培养方案系统地自学完全套课程，感觉真的能算上半个MIT人。另外MIT的Lecture Notes、Assignments和Exams文件很丰富，而且PDF文件应该也都是用LaTeX排版的，读起来赏心悦目。
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//MITDepartments.png)
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//MITLectureNotes.png)
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//MITMathematicStatisticmidterm.png)

还有Syllabus要单独提一嘴，我真的超喜欢这种Syllabus！非常清晰明了，排版也干净漂亮！
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//MITSyllabus.png)


## FreeCodeCamp
FreeCodeCamp是在Youtube刷了比较多CS相关的视频后给我自动推荐的，然后看了一点Python for Data Science课后，发现是个宝藏频道，里面CS相关的内容特别丰富，而且大多是手把手带做项目，虽然还是有点像Tutorials，但已经是相当好的，能学到东西的Tutorials了。之所以要cue一下Tutorials，是因为一些CS博主如[John Fish](https://www.youtube.com/@thejohnfish)认为Project-Oriented才是学习CS最好的方法，Youtube上也有很多视频在说Stop Watching Tutorials，例如[Coding Tutorial Hell - STOP Wasting Time Learning to Code](https://www.youtube.com/watch?v=Er20e3tIBaY)、[STOP watching tutorials. Code like this instead.](https://www.youtube.com/watch?v=d01vkk3CYi0)、[Stop Watching Coding Tutorials in 2021](https://www.youtube.com/watch?v=n7JhRDRK3Gg)，因为本人也有比较多学习CS的“失败”经验，所以也越来越同意Project-Oriented这种学习方式，就是要先想好要做什么样的项目，然后边Googling边学，直到把这个Project搭建起来，比如目标是`建一个Flower网站`（你的Project），然后去`学HTML&CSS&JavaScript`（Project-Oriented Learning），然后再学怎么在Github上用github.io免费域名发布网站，接着再了解Domain、DNS相关的内容等等，或者想用Python做一个打外星人的游戏，然后去学Python的基础语法，怎么创建Class创建，已有的Python Game Library比如Pygame等，之后再可以学习怎么把做好的游戏打包成.exe文件，这种方式更符合CS的学习习惯，而不是一直看Tutorials。说这些是为了提醒：FreeCodeCamp的Tutorials很多而且很酷，但不要一味的陷入Tutorials，我觉得如果自己看书注意力不集中的话Tutorials还是要看的，只不过心里要一直清楚，Tutorials只是手段，不是目的，它是指着月亮的手，不是月亮本身。学完Tutorials一定要自己动手敲代码，写项目，这样才会有大的进步。

只要心中记好Project-Oriented理念，我觉得FreeCodeCamp是一个很好的学习平台，它甚至还考虑到了语言需求，有几个不同语言的分帐号（虽然内容少一些），比如[freeCodeCamp Español](https://www.youtube.com/@freecodecampespanol)、[freeCodeCamp Japanese](https://www.youtube.com/@freeCodeCampJapanese)、[freeCodeCamp Chinese](https://www.youtube.com/@freecodecampchinese)

freeCodeCamp还提供了一个Github项目，就叫[freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)，可以在这个[网站](https://www.freecodecamp.org/learn/)，践行了Project-Oriented理念，利用项目来学习Programming。类似的还有一个项目叫[project-based-learning](https://github.com/practical-tutorials/project-based-learning)，也是利用项目来学习Programming。
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//freecodecamp.png)


## Coursera
Coursera是我很早期用的一个MOOC平台，甚至是我早期唯一用的一个MOOC平台，但那个时候比较懒，在Coursera上面的两门课都没坚持下来(；′⌒`)，后面稍微勤快点了，但因为接触到了Crash Course、edX、MITOpenCourseWare等新平台，Coursera反而用的越来越少了。最近在慢慢回归使用Coursera，因为听说Coursera是和edX分庭抗礼的存在，上面也有很多优秀的特色课程。

Coursera和edX相互间有些不同，总体来讲各有优势，但他们课程界面上又十分相似，Coursera也提供很多课程学习资料，Videos、Transcripts、Readings、Quiz等等。
![](https://gitee.com/yagamilighttsuki/blog-picture/raw/master/Notes//Coursera.png)

## Others

Others这里就放一些“个人”频道了，倒也不一定非要是“个人”，但他们一般没有像Crash Course、edX等MOOC那样提供大量种类丰富的线上课程，他们一般是独立的个人Youtuber，专注于每个领域，产出了比较优秀的内容比如Sisyphus 55的Psychology内容，针对这些优秀内容我也会进行学习并做笔记，因为给他们每个人都单独开一个文件夹显得太杂乱，所以把他们统一归纳到了Others这个文件夹下，对标Crash Course、edX等MOOC，在Others下再根据内容开二级文件夹如`PsychologyExceptMOOC`、`CSExceptMOOC`等。
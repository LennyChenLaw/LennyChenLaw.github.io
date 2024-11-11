---
comments: True
statistics: True
---

# Technophile周刊（第15期）

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/494483715&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/brella-n-i" title="ブレラ" target="_blank" style="color: #cccccc; text-decoration: none;">ブレラ</a> · <a href="https://soundcloud.com/brella-n-i/sakura-tears-feat-kie-katagi" title="SAKURA Tears (feat. Kie Katagi from jizue)" target="_blank" style="color: #cccccc; text-decoration: none;">SAKURA Tears (feat. Kie Katagi from jizue)</a></div>

!!! info
    作者：Lenny<br>
    日期：2024年7月14日<br>
    内容：记录分享视频等<br>
    更新时间：周日更新<br>
    本杂志[开源](https://github.com/LennyChenLaw/Weekly)，欢迎[投稿](https://github.com/LennyChenLaw/Weekly/issues)


![00006-2963973796.png](https://s2.loli.net/2024/11/07/smkzgPU6AdOXQE4.png)

## 视频
+ [But what is a neural network? | Chapter 1, Deep learning](https://www.youtube.com/watch?v=aircAruvnKk)
>Neuron->Thing that holds a number between (0,1) ![intro.png](https://s2.loli.net/2024/11/07/lhHICS9jXGxZoKp.png)// Example 28 pixels × 28 pixels image generate 784 neurons // This number inside the neuron is called its activation // So all of these 784 neurons make up the first layer of our network. Now jumping over to the last layer, this has 10 neurons, each representing one of the digits. There's also a couple layers in between called the hidden layers. ![multilayer.png](https://s2.loli.net/2024/11/07/RunWghyU2Ez6o8T.png)// The way the network operates, activations in one layer determine the activations of the next layer. // So a common thing to do is to pump this weighted sum into some function that squishes the real number line into the range between 0 and 1. And a common function that does this is called the sigmoid function, also known as a logistic curve. $\sigma\left(x\right) = \frac{1}{1 + e^{-x}}$ // But maybe it's not that you want the neuron to light up when the weighted sum is bigger than 0. Maybe you only want it to be active when the sum is bigger than say 10. That is, you want some bias for it to be inactive. What we'll do then is just add in some other number like negative 10 to this weighted sum before plugging it through the sigmoid squishification function. That additional number is called the bias.![bias.png](https://s2.loli.net/2024/11/07/fCMFq9QneHAoi6y.png) So the weights tell you what pixel pattern this neuron in the second layer is picking up on, and the bias tells you how high the weighted sum needs to be before the neuron starts getting meaningfully active. // Remember how earlier I said these neurons are simply things that hold numbers? Well of course the specific numbers that they hold depends on the image you feed in, so it's actually more accurate to think of each neuron as a function, one that takes in the outputs of all the neurons in the previous layer and spits out a number between 0 and 1. ![function.png](https://s2.loli.net/2024/11/07/SMCxZIsETf94X68.png)// <br> 
-But relatively few modern networks actually use sigmoid anymore. It's kind of old school right? <br>
-Yeah or rather ReLU seems to be much easier to train. $ReLU\left(a\right) = max\left(0, a\right)$ <br>
-And ReLU stands for rectified linear unit? <br>
-Yes it's this kind of function where you're just taking a max of zero and a where a is given by what you were explaining in the video and what this was sort of motivated from I think was a partially by a biological analogy with how neurons would either be activated or not. ![ReLU.png](https://s2.loli.net/2024/11/07/NtkJxgo45ZbXqd8.png)

+ [how starting a small business changed my life (& it can change yours too!) ✿ let's be vulnerable](https://www.youtube.com/watch?v=VkZsD17Axks)
>在开始创业前，博主就已经做了很多part-time job，所以对Design等工作比较了解 // 得到了朝九晚五的工作，但不喜欢zoom，not passionate about graphic design, 不喜欢这种工作生活，所以想创业 // 虽然上面说博主not passionate about graphic design, but that's not very accurate.Actually she loves the storytelling part and brand building part of graphic design // {==Courage==}, 这段博主讲了挺多的，总结起来就是be curious, have fun，像孩子一样去学习尝试创业需要的各种事情，但是同时也要calculate risks, 别不管现实埋头猛冲 // {==Confidence==}, 博主自认为是个Introvert, 打造自己的自媒体的过程中让博主的表达能力提高了很多 // 一个重要的mindset转变->I don't have to be the best. Even though I am not the best I am still valuable // {==Mindset==}, 心态转变pessimist -> optimist(博主还提了一嘴自己是Capricorn，所以这个转变很不容易，潜台词是Capricorn很容易是pessimist吗？没研究过(⌐■_■)), anxiousness -> excitement // {==Flexibility==} "starting my small business has also given me the immense gift of flexibility" (好羡慕o(TヘTo)) "I value myself the most" // {==Discipline and self-love==}, 自己创业博主学会了更加自律，也学会了更加爱自己

+ [【Simple Japanese Listening】 Persimmon Harvest - Japanese Vlog](https://www.youtube.com/watch?v=4JPydWHuhfI)
>记录摘柿子、分拣柿子的日语教学Vlog，有摘出重要单词，很好的学习素材 // 摘几个句子打个样： {++手伝って++}くれた{++友人家族++}や{++知り合いのおじさん++}にも心から{++感謝++}ですね。　//　こうした{++温かい++}{++協力関係++}の中で行われる収穫は、{++日本++}の{++田舎++}{++ならでは++}ですね。


+ [EASY Listening 🇯🇵 Daily Japanese - Chat about trips 日本語　聴解　JLPT](https://www.youtube.com/watch?v=AioQtuw8ZDo)
>练听力的好素材 // 博主经常把同一种意思用不同方式重复表达出来，能够比较好的巩固理解，举个例フェリーは大人1人1000円ぐらいでした。車をフェリーに乗せている人がたくさんいました。車ごとフェリーに乗って移動している人もたくさんいました。


+ [Are you a body with a mind or a mind with a body? - Maryam Alimardani](https://www.youtube.com/watch?v=ILDy6kYU-xQ)
>rubber hand Illusion -> That may just be a temporary trick, but it speaks to a larger truth: our bodies, the physical, biological parts of us, and our minds, the thinking, conscious aspects, have a complicated, tangled relationship. // That takes us to an old question of whether the body and mind are two separate things.// 16th-century philosopher René Descartes pointed out that even if all our physical sensations were just a hallucinatory dream, our mind and thoughts would still be there. That, for him, was the ultimate proof of our existence. And it led him to conclude that the conscious mind is something separate from the material body that forms the core of our identity. // If we accept this, another problem emerges. How can a non-physical mind have any interaction with the physical body? If the mind has no shape, weight, or motion, how can it move your muscles? Or if we assume it can, why can your mind only move your body and not others? //The French priest and philosopher Nicolas Malebranche ->when we think about reaching for a fork, it's actually god who moves our hand. // Another priest philosopher named George Berkeley -> the material world is an illusion, existing only as mental perceptions. // This question of mind versus body isn't just the domain of philosophers. With the development of psychology and neuroscience, scientists have weighed in, as well. // 推荐阅读 I, Robot - Isaac Asimov (个人也推荐看一下[YaleCourses: Philosophy of Death](https://www.youtube.com/watch?v=p2J7wSuFRl8&list=PLE0D425F951001F57))








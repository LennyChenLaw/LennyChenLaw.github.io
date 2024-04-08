# AI相关的工具
!!! info 
    标题本想写成“LLM相关的工具”，但Stable Diffusion似乎并不属于LLM，而是latent diffusion models（请参考这篇[文章](https://www.reddit.com/r/StableDiffusion/comments/13y53jf/is_stable_diffusion_an_llm/)），GPT-SoVITS我也不清楚该分到哪一类，所以最后用了“AI相关的工具”这个标题，可能有点泛

1. [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)
>+ 一个Github Repo，在此Repo中，有各种各样的prompts，如：
>+ Act as an Ethereum Developer: Imagine you are an experienced Ethereum developer tasked with creating a smart contract for a blockchain messenger. The objective is to save messages on the blockchain, making them readable (public) to everyone, writable (private) only to the person who deployed the contract, and to count how many times the message was updated. Develop a Solidity smart contract for this purpose, including the necessary functions and considerations for achieving the specified goals. Please provide the code and any relevant explanations to ensure a clear understanding of the implementation.
>+ 蛮适合用来了解某个领域或者深入学习某些细节知识点的。

2. [Chatgot](https://start.chatgot.io/)
>集合了GPT-4、Claude v2、Llama v2、Midjourney、GPT-3.5等等大模型，不过免费用户有次数限制。

3. [llamafile](https://github.com/Mozilla-Ocho/llamafile)
>+ 可以本地离线用的大模型，效果相当可以
>+ 🙋‍♂️"我们的目标是让开发者和最终用户更容易访问开放的LLMs。我们通过将 llama.cpp 与 Cosmopolitan Libc 组合成一个框架来实现这一点，该框架将 LLMs 的所有复杂性压缩为在大多数计算机上本地运行的单个文件可执行文件（称为“llamafile”），无需安装。"

4. [jan](https://github.com/janhq/jan)
>Jan 是一个开源 ChatGPT 替代品，可以在您的计算机上 100% 离线运行。

5. [chatd](https://github.com/BruceMacD/chatd)
>+ 使用本地 AI 与您的文档聊天。您的所有数据都保留在您的计算机上，并且永远不会发送到云端。 Chatd 是一种完全私密且安全的文档交互方式。
>+ Chatd 是一个桌面应用程序，可让您使用本地大语言模型 ( Mistral-7B ) 与文档聊天。 chatd 与其他“与本地文档聊天”应用程序的不同之处在于，它附带了打包的本地 LLM 运行程序。这意味着您无需安装任何其他内容即可使用 chatd，只需运行可执行的。
>+ Chatd 使用 Ollama 运行 LLM。 Ollama 是一个 LLM 服务器，提供跨平台 LLM 运行器 API。如果您已经在本地运行 Ollama 实例，chatd 将自动使用它。否则，chatd 将为您启动一个 Ollama 服务器并管理其生命周期。
6. [Hugging Face](https://huggingface.co/)
>+ Hugging Face是一家美国公司，专门开发用于构建机器学习应用的工具。该公司的代表产品是其为自然语言处理应用构建的transformers库，以及允许用户共享机器学习模型和数据集的平台。
>+ 一篇介绍Hugging Face的[文章](https://zhuanlan.zhihu.com/p/535100411)

7. [New-Bing-Anywhere](https://github.com/ha0z1/New-Bing-Anywhere)
>+ 一个插件，使用后chrome或firefox等浏览器能直接使用Bing Chat。

8. [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS?tab=readme-ov-file)
>+ 零样本文本到语音（TTS）： 输入 5 秒的声音样本，即刻体验文本到语音转换。
>+ 少样本 TTS： 仅需 1 分钟的训练数据即可微调模型，提升声音相似度和真实感。
>+ 跨语言支持： 支持与训练数据集不同语言的推理，目前支持英语、日语和中文。
>+ WebUI 工具： 集成工具包括声音伴奏分离、自动训练集分割、中文自动语音识别(ASR)和文本标注，协助初学者创建训练数据集和 GPT/SoVITS 模型。

9. [Stable Diffusion](https://github.com/CompVis/stable-diffusion)
>+Stable Diffusion是一种 latent text-to-image diffusion model。与 Google 的 Imagen 类似，该模型使用frozen CLIP ViT-L/14 文本编码器来根据文本提示调节模型。该模型具有 860M UNet 和 123M 文本编码器，相对轻量级，并且在至少具有 10GB VRAM 的 GPU 上运行。

10. [Stable Diffusion整合包]( https://b23.tv/rGJpNVG)
>+ 秋葉aaaki：本整合包支持SDXL，预装多种必须模型。无需安装git、python、cuda等任何内容，无需任何配置解压即用





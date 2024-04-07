# 一些和LLM相关的工具
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
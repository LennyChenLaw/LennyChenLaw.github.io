# Open-webui + Ollama
## Open-webui
[Open-webui](https://github.com/open-webui/open-webui)是一个可扩展、功能丰富且用户友好的自托管 WebUI，旨在完全离线操作。它支持各种LLM运行程序，包括 Ollama 和 OpenAI 兼容的 API。

1. Nodejs>=20.10, Python>=3.11
2. [Windows上用fnm升级Nodejs](https://nodejs.org/en/download/package-manager),如果[电脑用户名是中文](https://github.com/Schniz/fnm/issues/1110)，建议不要用`winget install Schniz.fnm`命令下载，而是到fnm项目Releases里下载压缩包，在全英文路径解压，再把解压路径添加到环境变量，具体操作：编辑系统环境变量->环境变量->系统变量->找到Path，新建添加fnm的解压路径
3. Powershell里依次执行1)fnm env --use-on-cd | Out-String | Invoke-Expression 2)fnm use --install-if-missing 20 3)node -v #应该>=20.10
4. conda新建一个环境，name为open-webui，python=3.11.10
5. pip install open-webui，如果遇到“'open-webui' 不是内部或外部命令，也不是可运行的程序 或批处理文件。”，可能是因为open-webui版本导致的，执行pip install open-webui --upgrade
6. 执行open-webui serve，浏览器打开http://localhost:8080

## Ollama
下载[Ollama](https://github.com/ollama/ollama)，下载完成后打开[Models](https://ollama.com/library)，找到需要的模型在命令行执行ollama run [model]
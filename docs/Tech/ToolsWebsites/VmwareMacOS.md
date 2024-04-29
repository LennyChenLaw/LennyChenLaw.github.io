# Windows+Vmware+MacOS Virtual Machine
!!! info "准备工作"
    + [VMware Workstation Pro](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html): 17.0.2 build-21581411 :material-information-outline:{ title="VMware Workstation Player也可以" }
    ??? quetsion
        其他虚拟机还有Virtual Box，Hyper-V，它们之间的主要区别是什么？

    + MacOS iso image file: [Monterey 12.6.1 v17.6.11](https://archive.org/details/macos-collection):material-information-outline:{ title="右边ISO IMAGE FILES里可以找到" }
    + Unlocker: [macOS Unlocker V4 for VMware Workstation](https://github.com/DrDonk/unlocker)

## 踩坑
+ [Monterey 12.6.1 v17.6.11](https://archive.org/details/macos-collection)下载网页左边有很多种ISO IMAGE FILES，比如比较新的`13.0 Ventura`，但如果你用的是AMD CPUs，请不要下载Ventura，因为"AMD CPUs no longer work in Ventura possibly due to how CPUID leaf 7 is read - no way to patch need to look at OpenCore and other solutions"，详情请看这几篇讨论，[Ventura keep rebooting](https://github.com/DrDonk/unlocker/issues/59)、[macOS Ventura Testing](https://github.com/DrDonk/unlocker/issues/47)、[macOS Ventura Guests](https://github.com/DrDonk/unlocker/wiki/macOS-Ventura-Guests)、["Best settings for AMD" does not work on AMD 7xxx ](https://github.com/DrDonk/unlocker/issues/84)。
+ 如果你的VMware Workstation是16/17版本，请用[新版的Unlocker](https://github.com/DrDonk/unlocker)。
 

## Create a New Virtual Machine and Install MacOS
1. 先运行unlock.exe
2. 前面默认选项，到`Select a Guest Operating System`这一步选择Apple Mac OS X，`Version`里根据你的ISO文件选择，比如我的ISO文件是Monterey 12.6.1 v17.6.11，选择的就是MacOS 12，如果你的电脑[能用Ventura](https://github.com/DrDonk/unlocker/issues/47)，并且下载的文件是`Ventura 13.0 v18.0.02` 那就是MacOS 13，以此类推。
3. Location看自己需求可以改。后面一路默认。
4. 左上角VM->Settings->CD/DVD（SATA）->Use ISO image file->选择ISO image file文件的路径。完事就可以启动了，`Power on this virtual machine`。![](https://s2.loli.net/2024/04/29/SACIVwMa2iLsHbK.png)
5. 如果遇到`The CPU has been disabled by the guest operating system. Power off or reset the virtual machine`报错

    1. 找到第3步里你下载的Location，找到macOS 12.vmx文件，类型里写的应该是`VMware virtual machine configuration`，双击打开文件，在文件底部添加
    ![](https://s2.loli.net/2024/04/29/qPDE4vt3holIg9A.png)
    ```
    smc.version = "0"
    cpuid.0.eax = "0000:0000:0000:0000:0000:0000:0000:1011"
    cpuid.0.ebx = "0111:0101:0110:1110:0110:0101:0100:0111"
    cpuid.0.ecx = "0110:1100:0110:0101:0111:0100:0110:1110"
    cpuid.0.edx = "0100:1001:0110:0101:0110:1110:0110:1001"
    cpuid.1.eax = "0000:0000:0000:0001:0000:0110:0111:0001"
    cpuid.1.ebx = "0000:0010:0000:0001:0000:1000:0000:0000"
    cpuid.1.ecx = "1000:0010:1001:1000:0010:0010:0000:0011"
    cpuid.1.edx = "0000:0111:1000:1011:1111:1011:1111:1111"
    ```
    保存退出。
   2. 重启MacOS虚拟机。



6. Language选符合自己需求的，下一个窗口中选择`Disk Utility`，选左上角第一个`VMware Virtual SATA Hard`，然后点右上角`Erase`，跳出的窗口里`Name`命名随意，如Mac 12，点击Done，点击左上角红叉退回到原界面，点击`Install MacOS Monterey`，一路continue。
7. 下载完后`Select Your Country or Region`等根据自己需要选，APPle ID没有的话可以Skip。
8.  Finito！但是你可能注意到了屏幕尺寸不对，可以通过下载VMware Tools解决，左上角点击VM->Manage->Install VMware Tools，如果遇到`This operation cannot proceed because your guest is using the CD/DVD`，在你的Mac虚拟机桌面右上角应该有一个Install Monterey的图标，右键选择`Eject`。如果你的Install VMware Tools是灰的，无法点击，请参考这个[视频](https://www.youtube.com/watch?v=RKkWeHUBfpE)。
9.  在左上角出现的图标里点击Install VMware Tools，一路Continue，直到遇到弹窗`System Extension Blocked`，点击`Open System Settings`，下滑找到Privacy & Security,找到`System software from developer "XMware, Inc." was blocked from loading.` 点击Allow，输密码，然后Restart。
10. Restart完成后左上角VM->Manage->Update VMware Tools，点击`Install VMware Tools`，一路Continue。



## References
1. [How to install mac os on VMware | macOS on Windows PC/Laptop](https://www.youtube.com/watch?v=IHaNAR4ejlA)
2. [How to fix macOS VMware The CPU has been disabled by the guest Operating System](https://www.youtube.com/watch?v=qNQ3d6z07Ms)
P.S.已在文章中以链接形式给出的为避免重复不再在此单列。

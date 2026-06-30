---
title: 软件
createTime: 2026/06/30 19:05:19
permalink: /guide/server/software/
icon: eos-icons:software
---

MC服务器的软件需求跟客户端基本一致，主要有两个方面，一个是**操作系统**，另一个是**运行环境**。

## 1. 操作系统

操作系统没啥要求，主要有两个方面：

### Linux

进程调度和内存管理做的非常好，无头运行（no GUI）资源开销极低，而且还能利用 screen、tmux、systemd 等服务守护。

主要代表：
- [Ubuntu Server LTS](https://ubuntu.com/download/server)
- [Debian](https://www.debian.org/index.zh-cn.html)
- [Rocky Linux](https://rockylinux.org/zh-CN)。

### Windows

图形化简便，适合作个人测试，但系统自身内存占用与后台服务依托答辩，而且很难精确控制进程优先级和CPU亲和性。

主要代表：
- [Windows Server 2025](https://www.microsoft.com/zh-cn/evalcenter/download-windows-server-2025)
- [Windows Server 2022](https://www.microsoft.com/zh-cn/evalcenter/download-windows-server-2022)
- [Windows Server 2019](https://www.microsoft.com/zh-cn/evalcenter/download-windows-server-2019)

## 2. 运行环境

### Java

Java版服务器需要Java软件环境才能跑起来，没有Java的话你的服务器就无法正常启动。

也就是说，要运行Java版MC服务器，你必须安装Java才能跑起来。

| MC版本 | Java版本最低要求 |
| - | - |
| 1.12 | Java 8 |
| 1.17 | Java 16 |
| 1.18 | Java 17 |
| 1.20.5 | Java 21 |
| 26.1 | Java 25 |